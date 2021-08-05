import { DownloadIcon } from '@heroicons/react/outline';
import { downloadURI } from '@utils/helpers';
import { Stage as StageType } from 'konva/lib/Stage';
import React, { useContext, useRef } from 'react';
import { Circle, Layer, Stage } from 'react-konva';
import { DataBusContext } from 'store';
import { PlaygroundAssetsContext } from 'store/PlaygroundAssets';
import { SelectedIdContext } from 'store/SelectedId';
import DragImage from './DragImage';

interface PlaygroundInterface {
  w: number;
  h: number;
}

const Playground: React.FC<PlaygroundInterface> = ({ h, w }) => {
  const [src] = useContext(DataBusContext);
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
        setPlaygroundAssets(
          PlaygroundAssets.concat([
            {
              ...stageRef?.current?.getPointerPosition(),
              id:
                PlaygroundAssets.filter((item) => item.id === `in-playground-asset-${PlaygroundAssets.length}`)
                  .length === 0
                  ? `in-playground-asset-${PlaygroundAssets.length}`
                  : `in-playground-asset-${PlaygroundAssets.length}-${Math.random()}`,
              src,
            },
          ])
        );
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      <button className="absolute right-4 top-4 bg-gray-100 p-2 rounded z-10" onClick={download}>
        <DownloadIcon className="w-4 h-4" />
      </button>
      <Stage
        ref={stageRef}
        width={w}
        height={h}
        scale={{ x: scale, y: scale }}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer>
          <Circle x={sceneWidth / 1.5} y={h / 4} radius={h / 3} fill="#FDF2F8" listening={false} />
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
