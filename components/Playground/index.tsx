import { DownloadIcon, SaveIcon } from '@heroicons/react/outline';
import { publicRoutes } from '@utils/constants/api';
import { off, on } from '@utils/events';
import fetcher from '@utils/fetcher';
import fetchWithFile from '@utils/fetchFile';
import { b64toFile, downloadURI } from '@utils/helpers';
import { KonvaEventObject } from 'konva/lib/Node';
import { Shape, ShapeConfig } from 'konva/lib/Shape';
import { Stage as StageType } from 'konva/lib/Stage';
import Image from 'next/image';
import React, { useContext, useRef, useState } from 'react';
import { Tween } from 'react-gsap';
import { Group, Image as Img, Layer, Line, Rect, Stage } from 'react-konva';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataBusContext } from 'store';
import { useCollageListContext } from 'store/CollageList';
import { PlaygroundAssetsContext, PlaygroundAssetType } from 'store/PlaygroundAssets';
import { SelectedIdContext } from 'store/SelectedId';
import { ViewingModeContext } from 'store/ViewingModeContext';
import useImage from 'use-image';
import DragImage from './DragImage';
import UnitAction from './UnitAction';

const sceneWidth = 1400;
interface PlaygroundInterface {
  w: number;
  h: number;
  collageData?: PlaygroundAssetType;
}

const Playground: React.FC<PlaygroundInterface> = ({ h, w, collageData }) => {
  const stageRef = useRef<StageType>();
  const GUIDELINE_OFFSET = 5;
  const [guides, setGuides] = useState([]);
  const { busData } = useContext(DataBusContext);
  const [currentMode] = useContext(ViewingModeContext);

  const {
    PlaygroundAssets,
    setPlaygroundAssets,
    bg,
    getRotationValue,
    isCollageActive,
    selectedSubCategoryId,
    playgroundTotal,
    setActiveCollages,
    activeCollages,
    clearBoard,
  } = useContext(PlaygroundAssetsContext);

  React.useEffect(() => {
    if (collageData) {
      if (currentMode === 'view') {
        setPlaygroundAssets([...collageData?.data]);
      } else {
        setPlaygroundAssets([collageData] || []);
      }
    } else {
      setPlaygroundAssets([...PlaygroundAssets]);
    }
  }, [collageData, currentMode, setPlaygroundAssets]);

  const [selectedId, setSelectedId] = useContext(SelectedIdContext);
  const itemsRef = useRef([]);
  const {
    bgImgUrl: { value: bgValue, type: bgType },
  } = bg;
  const [img] = useImage(bgValue, 'anonymous');
  const scale = w / sceneWidth;
  const { setData, data } = useCollageListContext();
  const download = (): void => {
    const uri = stageRef?.current?.toDataURL({
      pixelRatio: 2, // or other value you need
    });
    downloadURI(uri, `spacejoy-demo-${Date.now()}`);
  };
  const saveCollage = React.useCallback(
    async ({ collageName, collageDescription, selectedTags, selectedThemes }) => {
      stageRef.current?.findOne('.background-image')?.hide();
      stageRef.current?.findOne('.background-color-wall')?.hide();
      const uri = stageRef?.current?.toDataURL({
        pixelRatio: 2, // or other value you need
      });
      stageRef.current?.findOne('.background-image')?.show();
      stageRef.current?.findOne('.background-color-wall')?.show();
      const fileRes = await b64toFile(uri);

      const formatted = PlaygroundAssets.map((item) => {
        if (item?.type === 'collage') {
          return item?.data;
        }
        return { ...item };
      });
      const mergedArray = [].concat(...formatted);

      const payload = mergedArray.map((asset) => {
        return {
          ...(asset?.playgroundHeight && {
            playgroundScale: { width: asset?.playgroundWidth, height: asset?.playgroundHeight },
          }),
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
      try {
        const formData = new FormData();
        formData.append('file', fileRes, fileRes?.name);
        formData.append(
          'data',
          JSON.stringify({
            view: [...payload],
            ...(playgroundTotal && { price: playgroundTotal }),
            ...(collageName && collageName?.length && { name: collageName }),
            ...(collageDescription && collageDescription?.length && { description: collageDescription }),
            ...(selectedThemes && selectedThemes?.length && { themes: selectedThemes }),
            ...(selectedTags && selectedTags?.length && { tags: selectedTags }),
            ...(selectedSubCategoryId &&
              selectedSubCategoryId?.length && { isActive: isCollageActive, categoryMap: selectedSubCategoryId }),
          })
        );
        const endPoint =
          activeCollages?.length === 1
            ? `${publicRoutes?.saveCollages}/${activeCollages[0]}`
            : publicRoutes?.saveCollages;
        const res = await fetchWithFile({
          endPoint,
          method: 'POST',
          body: formData,
        });
        const { data: savedCollageData, statusCode } = res;
        if (statusCode > 300) {
          throw new Error();
        } else {
          setData([savedCollageData, ...data]);
          clearBoard();
          return data;
        }
      } catch {
        throw new Error();
      }
    },
    [
      PlaygroundAssets,
      isCollageActive,
      selectedSubCategoryId,
      data,
      setData,
      playgroundTotal,
      activeCollages,
      clearBoard,
    ]
  );

  const saveCollageWithNotification = React.useCallback(
    async (args) => {
      const { detail: { collageName = '', collageDescription = '', selectedThemes = [], selectedTags = [] } = {} } =
        args;
      await toast.promise(saveCollage({ collageName, collageDescription, selectedTags, selectedThemes }), {
        pending: 'Saving collage',
        success: 'Collage saved successfully',
        error: 'There was an error while saving your collage. Please try again.',
      });
    },
    [saveCollage]
  );

  React.useEffect(() => {
    on('publish', saveCollageWithNotification);
    return () => {
      off('publish', saveCollageWithNotification);
    };
  }, [PlaygroundAssets, saveCollageWithNotification, selectedSubCategoryId]);

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
            stroke: '#4B5563',
            strokeWidth: 1,
            name: 'guid-line',
            dash: [3, 3],
            x: 0,
            y: lg.lineGuide,
          };
          setGuides([...guides, guide]);
        } else if (lg.orientation === 'V') {
          const guide = {
            points: [0, -6000, 0, 6000],
            stroke: '#4B5563',
            strokeWidth: 1,
            name: 'guid-line',
            dash: [3, 3],
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
        data: { id, dimension, renderImages, displayPrice, retailer, name, price, vertical = '' },
      } = busData;

      const { data } = await fetcher({ endPoint: `/v1/assets/${id}/stitchImages`, method: 'GET' });
      const { count, boxSize, image } = data;
      setPlaygroundAssets(
        PlaygroundAssets?.concat([
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
            depth: dimension?.depth,
            assetId: id,
            renderImages,
            stitchedAssetImage: image?.originalCdn,
            displayPrice,
            price,
            type: 'asset',
            retailer,
            name,
            vertical,
          },
        ])
      );
    }
    if (busData.type === 'collage') {
      const { id } = busData;
      setActiveCollages([...activeCollages, id]);
      const productIds = busData?.data?.map((item) => item?.assetId);
      // // fetch product prices
      const res = await fetcher({
        endPoint: '/v1/assets/getAssetsDetail',
        body: { assets: [...productIds], fields: ['price', 'name', 'renderImages', 'retailer', 'dimension', 'meta'] },
        method: 'POST',
      });
      const { data, statusCode } = res;
      const isError = statusCode < 300 ? false : true;
      const collageData = {
        ...busData,
        data: busData?.data?.map((item) => {
          return {
            ...item,
            id: `in-playground-asset-${PlaygroundAssets.length}-${Math.random()}`,
            price: !isError ? data[item?.assetId]?.price : 0,
            displayPrice: !isError ? data[item?.assetId]?.price : 0,
            retailer: !isError ? data[item?.assetId]?.retailer?.name : '',
            renderImages: !isError ? data[item?.assetId]?.renderImages : [{ cdn: '' }],
            name: !isError ? data[item?.assetId]?.name : '',
            depth: !isError ? data[item?.assetId]?.dimension?.depth : 0,
            vertical: !isError ? data[item?.assetId]?.meta?.vertical?.name : 0,
          };
        }),
      };
      const newPlaygroundData =
        currentMode === 'view' ? [...PlaygroundAssets, ...collageData?.data] : [...PlaygroundAssets, collageData];
      setPlaygroundAssets(newPlaygroundData);
    }
  };

  // save collage

  const onCollageDragEnd = (collageId, currentGroup) => {
    const upatedAssetArray = [...PlaygroundAssets].map((item) => {
      if (item?.id === collageId) {
        return {
          ...item,
          data: item?.data?.map((asset, index) => {
            return {
              ...asset,
              x: currentGroup?.children[index].getAbsolutePosition().x,
              y: currentGroup?.children[index].getAbsolutePosition().y,
            };
          }),
        };
      }
      return { ...item };
    });
    setPlaygroundAssets(upatedAssetArray);
  };

  return (
    <>
      <ToastContainer
        theme="dark"
        hideProgressBar
        toastClassName={() => 'bg-gray-900 shadow rounded shadow p-4 flex flex-1 justify-between'}
        bodyClassName={() => 'text-white antialiased text-sm flex flex-1 space-x-1'}
        newestOnTop={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="relative" onDrop={onDropEvent} onDragOver={(e) => e.preventDefault()}>
        {PlaygroundAssets?.length !== 0 && (
          <div className="absolute right-4 top-4 z-10 flex flex-col space-y-2">
            <UnitAction position="left" title="Download" onClick={download}>
              <DownloadIcon className="w-4 h-4" />
            </UnitAction>
            {currentMode && currentMode === 'edit' && (
              <UnitAction position="left" title="Save Collage" onClick={() => saveCollageWithNotification({})}>
                <SaveIcon className="w-4 h-4" />
              </UnitAction>
            )}
          </div>
        )}
        {PlaygroundAssets?.length === 0 && (
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
            {PlaygroundAssets?.length !== 0 && bgType === 'bg-color' && (
              <Rect
                x={0}
                y={0}
                width={sceneWidth}
                height={h / scale}
                fill={bgValue}
                listening={false}
                name="background-color-wall"
              />
            )}
            {bgType === 'bg-img' && (
              <Img x={0} y={0} width={sceneWidth} image={img} listening={false} name="background-image" />
            )}
            {guides.map((item, i) => {
              return <Line key={i} {...item} />;
            })}

            {PlaygroundAssets?.map((playgroundItem, index) => {
              return playgroundItem?.type === 'collage' ? (
                <Group
                  draggable
                  onDragEnd={() => onCollageDragEnd(playgroundItem?.id, itemsRef?.current[index])}
                  ref={(el) => (itemsRef.current[index] = el)}
                >
                  {playgroundItem?.data?.map((item, i) => {
                    return (
                      <DragImage
                        index={i}
                        key={item.id}
                        image={item}
                        rotationValue={getRotationValue(item?.id)}
                        isSelected={item.id === selectedId}
                        onSelect={() => setSelectedId(item.id)}
                        belongsToGroup
                        onChange={(newAttrs): void => {
                          const tmp = [...PlaygroundAssets];
                          tmp[i] = newAttrs;
                          setPlaygroundAssets(tmp);
                        }}
                      />
                    );
                  })}
                </Group>
              ) : (
                <DragImage
                  index={index}
                  belongsToGroup={false}
                  key={playgroundItem?.id}
                  image={playgroundItem}
                  rotationValue={getRotationValue(playgroundItem?.id)}
                  isSelected={playgroundItem.id === selectedId}
                  onSelect={() => setSelectedId(playgroundItem.id)}
                  onChange={(newAttrs): void => {
                    const tmp = [...PlaygroundAssets];
                    tmp[index] = newAttrs;
                    setPlaygroundAssets(tmp);
                  }}
                />
              );
            })}

            {/* 
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
            ))} */}
          </Layer>
        </Stage>
      </div>
    </>
  );
};

export default Playground;
