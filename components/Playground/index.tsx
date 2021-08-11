import { DownloadIcon } from '@heroicons/react/outline';
import { downloadURI } from '@utils/helpers';
import { Stage as StageType } from 'konva/lib/Stage';
import Image from 'next/image';
import React, { useContext, useRef } from 'react';
import { Tween } from 'react-gsap';
import { Image as Img, Layer, Rect, Stage } from 'react-konva';
import { DataBusContext } from 'store';
import { PlaygroundAssetsContext } from 'store/PlaygroundAssets';
import { SelectedIdContext } from 'store/SelectedId';
import useImage from 'use-image';
import DragImage from './DragImage';

interface PlaygroundInterface {
  w: number;
  h: number;
}

const Playground: React.FC<PlaygroundInterface> = ({ h, w }) => {
  const [img] = useImage(
    `https://res.cloudinary.com/spacejoy/image/upload/w_${w * 1.25}/v1628664294/spj-v2/DIY/room-3_hxged3.jpg`,
    'anonymous'
  );
  const [busData] = useContext(DataBusContext);
  const [PlaygroundAssets, setPlaygroundAssets] = useContext(PlaygroundAssetsContext);
  const [selectedId, setSelectedId] = useContext(SelectedIdContext);
  const stageRef = useRef<StageType>();

  const download = (): void => {
    const uri = stageRef?.current?.toDataURL({
      pixelRatio: 2, // or other value you need
    });
    downloadURI(uri, 'spacejoy-demo');
  };

  const checkDeselect = (e): void => {
    if (e.target === e.target?.getStage()) {
      setSelectedId('');
    }
  };

  const sceneWidth = 1400;

  const scale = w / sceneWidth;

  return (
    <div
      className="relative"
      onDrop={(e) => {
        e.preventDefault();
        stageRef?.current?.setPointersPositions(e);
        if (busData.type === 'asset') {
          setPlaygroundAssets(
            PlaygroundAssets.concat([
              {
                ...stageRef?.current?.getPointerPosition(),
                id:
                  PlaygroundAssets.filter((item) => item.id === `in-playground-asset-${PlaygroundAssets.length}`)
                    .length === 0
                    ? `in-playground-asset-${PlaygroundAssets.length}`
                    : `in-playground-asset-${PlaygroundAssets.length}-${Math.random()}`,
                src: busData.src,
              },
            ])
          );
        }
        if (busData.type === 'collage') {
          const tmp = [...PlaygroundAssets];
          busData.data.map((asset) =>
            tmp.push({
              ...asset,
              id: `in-playground-asset-${PlaygroundAssets.length}-${Math.random()}`,
            })
          );
          setPlaygroundAssets(tmp);
        }
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      {PlaygroundAssets.length !== 0 && (
        <button className="absolute right-4 top-4 bg-gray-100 p-2 rounded z-10" onClick={download}>
          <DownloadIcon className="w-4 h-4" />
        </button>
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
        <Layer>
          {PlaygroundAssets.length !== 0 && (
            <Rect x={0} y={0} width={w / scale} height={h / scale} fill="#ffffff" listening={false} />
          )}
          <Img x={0} y={-100} width={w / scale} image={img} listening={false} />
          {PlaygroundAssets?.map((image, i) => (
            <DragImage
              index={i}
              key={image.id}
              image={image}
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
