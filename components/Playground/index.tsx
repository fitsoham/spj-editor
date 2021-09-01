import { DownloadIcon, SaveIcon } from '@heroicons/react/outline';
import { publicRoutes } from '@utils/constants/api';
import fetcher from '@utils/fetcher';
import { downloadURI } from '@utils/helpers';
import { KonvaEventObject } from 'konva/lib/Node';
import { Shape, ShapeConfig } from 'konva/lib/Shape';
import { Stage as StageType } from 'konva/lib/Stage';
import Image from 'next/image';
import React, { useContext, useRef, useState } from 'react';
import { Tween } from 'react-gsap';
import { Image as Img, Layer, Line, Rect, Stage } from 'react-konva';
import { DataBusContext } from 'store';
import { PlaygroundAssetsContext } from 'store/PlaygroundAssets';
import { SelectedIdContext } from 'store/SelectedId';
import useImage from 'use-image';
import DragImage from './DragImage';

const sceneWidth = 1400;
interface PlaygroundInterface {
  w: number;
  h: number;
}

const Playground: React.FC<PlaygroundInterface> = ({ h, w }) => {
  const stageRef = useRef<StageType>();
  const GUIDELINE_OFFSET = 5;
  const [guides, setGuides] = useState([]);
  const { busData } = useContext(DataBusContext);
  const { PlaygroundAssets, setPlaygroundAssets, bg, getRotationValue } = useContext(PlaygroundAssetsContext);
  const [selectedId, setSelectedId] = useContext(SelectedIdContext);
  const { tmpBgImg, bgImgUrl } = bg;
  const [img] = useImage(tmpBgImg || bgImgUrl, 'anonymous');

  const scale = w / sceneWidth;

  const download = (): void => {
    const uri = stageRef?.current?.toDataURL({
      pixelRatio: 2, // or other value you need
    });
    downloadURI(uri, `spacejoy-demo-${Date.now()}`);
  };

  const saveCollage = async () => {
    const bg = img?.src;
    const payload = PlaygroundAssets.map((asset) => {
      return {
        ...(bg && { background: bg }),
        translation: {
          x: asset?.x,
          y: asset?.y,
        },
        rotation: (asset?.rotationValue || 0).toString(),
        scale: {
          height: asset?.height,
          width: asset?.width,
        },
        id: asset?.id,
        product: asset?.assetId,
        imgSrc: asset?.stitchedAssetImage,
      };
    });

    await fetcher({ endPoint: publicRoutes?.saveCollages, method: 'POST', body: { view: [...payload] } });
  };

  const checkDeselect = (e): void => {
    if (e.target === e.target?.getStage()) {
      setSelectedId('');
    }
  };

  // where can we snap our objects?
  const getLineGuideStops = (skipShape: Shape<ShapeConfig> | StageType) => {
    // we can snap to stage borders and the center of the stage
    const vertical: number[] = [0, stageRef.current.width() / 2, stageRef.current.width()];
    const horizontal: number[] = [0, stageRef.current.height() / 2, stageRef.current.height()];

    // and we snap over edges and center of each object on the canvas
    stageRef.current.find('.object').forEach((guideItem) => {
      if (guideItem === skipShape) return;
      const box = guideItem.getClientRect();
      // and we can snap to all edges of shapes
      vertical.push(box?.x, box?.x + box?.width, box?.x + box?.width / 2);
      horizontal.push(box?.y, box?.y + box?.height, box?.y + box?.height / 2);
    });
    return {
      vertical: vertical.flat(),
      horizontal: horizontal.flat(),
    };
  };

  // what points of the object will trigger to snapping?
  // it can be just center of the object
  // but we will enable all edges and center
  const getObjectSnappingEdges = (node) => {
    const box = node.getClientRect();
    const absPos = node.absolutePosition();

    return {
      vertical: [
        {
          guide: Math.round(box.x),
          offset: Math.round(absPos.x - box.x),
          snap: 'start',
        },
        {
          guide: Math.round(box.x + box.width / 2),
          offset: Math.round(absPos.x - box.x - box.width / 2),
          snap: 'center',
        },
        {
          guide: Math.round(box.x + box.width),
          offset: Math.round(absPos.x - box.x - box.width),
          snap: 'end',
        },
      ],
      horizontal: [
        {
          guide: Math.round(box.y),
          offset: Math.round(absPos.y - box.y),
          snap: 'start',
        },
        {
          guide: Math.round(box.y + box.height / 2),
          offset: Math.round(absPos.y - box.y - box.height / 2),
          snap: 'center',
        },
        {
          guide: Math.round(box.y + box.height),
          offset: Math.round(absPos.y - box.y - box.height),
          snap: 'end',
        },
      ],
    };
  };

  // find all snapping possibilities
  const getGuides = (lineGuideStops, itemBounds) => {
    const resultV = [];
    const resultH = [];

    lineGuideStops.vertical.forEach((lineGuide) => {
      itemBounds.vertical.forEach((itemBound) => {
        const diff = Math.abs(lineGuide - itemBound.guide);
        // if the distance between guild line and object snap point is close we can consider this for snapping
        if (diff < GUIDELINE_OFFSET) {
          resultV.push({
            lineGuide: lineGuide,
            diff: diff,
            snap: itemBound.snap,
            offset: itemBound.offset,
          });
        }
      });
    });

    lineGuideStops.horizontal.forEach((lineGuide) => {
      itemBounds.horizontal.forEach((itemBound) => {
        const diff = Math.abs(lineGuide - itemBound.guide);
        if (diff < GUIDELINE_OFFSET) {
          resultH.push({
            lineGuide: lineGuide,
            diff: diff,
            snap: itemBound.snap,
            offset: itemBound.offset,
          });
        }
      });
    });

    const guides = [];

    // find closest snap
    const minV = resultV.sort((a, b) => a.diff - b.diff)[0];
    const minH = resultH.sort((a, b) => a.diff - b.diff)[0];
    if (minV) {
      guides.push({
        lineGuide: minV.lineGuide,
        offset: minV.offset,
        orientation: 'V',
        snap: minV.snap,
      });
    }
    if (minH) {
      guides.push({
        lineGuide: minH.lineGuide,
        offset: minH.offset,
        orientation: 'H',
        snap: minH.snap,
      });
    }
    return guides;
  };

  const drawGuides = (guides) => {
    if (guides) {
      guides.forEach((lg) => {
        if (lg.orientation === 'H') {
          const guide = {
            points: [-6000, 0, 6000, 0],
            stroke: 'rgb(0, 161, 255)',
            strokeWidth: 1,
            name: 'guid-line',
            dash: [4, 6],
            x: 0,
            y: lg.lineGuide,
          };
          setGuides([...guides, guide]);
        } else if (lg.orientation === 'V') {
          const guide = {
            points: [0, -6000, 0, 6000],
            stroke: 'rgb(0, 161, 255)',
            strokeWidth: 1,
            name: 'guid-line',
            dash: [4, 6],
            x: lg.lineGuide,
            y: 0,
          };
          setGuides([...guides, guide]);
        }
      });
    }
  };

  const onDragMove = (e: KonvaEventObject<DragEvent>) => {
    // clear all previous lines on the screen
    // layer.find('.guid-line').destroy();

    // find possible snapping lines
    const lineGuideStops = getLineGuideStops(e.target);
    // find snapping points of current object
    const itemBounds = getObjectSnappingEdges(e.target);

    // now find where can we snap current object
    const guides = getGuides(lineGuideStops, itemBounds);

    // do nothing of no snapping
    if (!guides.length) {
      return;
    }

    drawGuides(guides);

    const absPos = e.target.absolutePosition();
    // now force object position
    guides.forEach((lg) => {
      switch (lg.snap) {
        case 'start': {
          switch (lg.orientation) {
            case 'V': {
              absPos.x = lg.lineGuide + lg.offset;
              break;
            }
            case 'H': {
              absPos.y = lg.lineGuide + lg.offset;
              break;
            }
            default:
              break;
          }
          break;
        }
        case 'center': {
          switch (lg.orientation) {
            case 'V': {
              absPos.x = lg.lineGuide + lg.offset;
              break;
            }
            case 'H': {
              absPos.y = lg.lineGuide + lg.offset;
              break;
            }
            default:
              break;
          }
          break;
        }
        case 'end': {
          switch (lg.orientation) {
            case 'V': {
              absPos.x = lg.lineGuide + lg.offset;
              break;
            }
            case 'H': {
              absPos.y = lg.lineGuide + lg.offset;
              break;
            }
            default:
              break;
          }
          break;
        }
        default:
          break;
      }
    });
    e.target.absolutePosition(absPos);
  };

  const onDragEnd = () => {
    setGuides([]);
  };

  const onDropEvent = async (e) => {
    e.preventDefault();
    stageRef?.current?.setPointersPositions(e);
    if (busData.type === 'asset') {
      const {
        data: { id, dimension, renderImages },
      } = busData;
      const { data } = await fetcher({ endPoint: `/v1/assets/${id}/stitchImages`, method: 'GET' });
      const { count, boxSize, image } = data;
      setPlaygroundAssets(
        PlaygroundAssets.concat([
          {
            ...stageRef?.current?.getPointerPosition(),
            id:
              PlaygroundAssets.filter((item) => item.id === `in-playground-asset-${PlaygroundAssets.length}`).length ===
              0
                ? `in-playground-asset-${PlaygroundAssets.length}`
                : `in-playground-asset-${PlaygroundAssets.length}-${Math.random()}`,
            count,
            boxSize,
            height: dimension?.height,
            width: dimension?.width,
            assetId: id,
            productThumbnail: renderImages[0].cdn,
            stitchedAssetImage: image?.originalCdn,
          },
        ])
      );
    }
    if (busData.type === 'collage') {
      const tmp = [...PlaygroundAssets];
      busData.data.map((asset) =>
        tmp.push({
          ...asset,
          // id: `in-playground-asset-${PlaygroundAssets.length}-${Math.random()}`,
        })
      );

      setPlaygroundAssets(tmp);
    }
  };

  return (
    <div className="relative" onDrop={onDropEvent} onDragOver={(e) => e.preventDefault()}>
      {PlaygroundAssets.length !== 0 && (
        <>
          <button className="absolute right-4 top-4 bg-gray-100 p-2 rounded z-10" onClick={download}>
            <DownloadIcon className="w-4 h-4" />
          </button>
          <button className="absolute right-4 top-16 bg-gray-100 p-2 rounded z-10" onClick={saveCollage}>
            <SaveIcon className="w-4 h-4" />
          </button>
        </>
      )}
      {PlaygroundAssets.length === 0 && (
        <div className="absolute h-full w-full flex justify-center items-center">
          <Tween from={{ opacity: 0, y: 10 }} to={{ opacity: 1, y: 0 }} duration={1} delay={0.15}>
            <div className="h-1/2 text-center">
              <Image
                className="object-cover"
                src="https://res.cloudinary.com/spacejoy/image/upload/v1628488827/spj-v2/DIY/placeholder_gdkupl.svg"
                alt="begin design"
                width={286}
                height={236}
              />
              <p className="text-sm mt-4 text-center text-gray-400">Drag and Drop assets from left panel</p>
            </div>
          </Tween>
        </div>
      )}
      <Stage
        ref={stageRef}
        width={w}
        height={h}
        scale={{ x: scale, y: scale }}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer onDragMove={(e) => onDragMove(e)} onDragEnd={onDragEnd}>
          {PlaygroundAssets.length !== 0 && (
            <>
              <Rect x={0} y={0} width={sceneWidth} height={h / scale} fill="#ffffff" listening={false} />
            </>
          )}
          <Img x={0} y={0} width={sceneWidth} image={img} listening={false} />
          {guides.map((item, i) => {
            return <Line key={i} {...item} />;
          })}
          {PlaygroundAssets?.map((image, i) => (
            <DragImage
              index={i}
              key={image.id}
              image={image}
              rotationValue={getRotationValue(image?.id)}
              isSelected={image.id === selectedId}
              onSelect={() => setSelectedId(image.id)}
              onChange={(newAttrs): void => {
                const tmp = [...PlaygroundAssets];
                tmp[i] = newAttrs;
                setPlaygroundAssets(tmp);
              }}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Playground;
