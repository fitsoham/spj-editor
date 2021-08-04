import { Stage as StageType } from 'konva/lib/Stage';
import React, { useContext, useRef, useState } from 'react';
import { Layer, Stage } from 'react-konva';
import { DataBusContext } from 'store';
import { PlaygroundAssetsContext } from 'store/PlaygroundAssets';
import DragImage from './DragImage';

interface PlaygroundInterface {
  w: number;
  h: number;
}

const Playground: React.FC<PlaygroundInterface> = ({ h, w }) => {
  const [src] = useContext(DataBusContext);
  const [PlaygroundAssets, setPlaygroundAssets] = useContext(PlaygroundAssetsContext);
  const stageRef = useRef<StageType>();

  const [selectedAssetId, setSelectAssetId] = useState('');

  const checkDeselect = (e): void => {
    if (e.target === e.target?.getStage()) {
      setSelectAssetId('');
    }
  };

  return (
    <div
      onDrop={(e) => {
        e.preventDefault();
        stageRef?.current?.setPointersPositions(e);
        setPlaygroundAssets(
          PlaygroundAssets.concat([
            {
              ...stageRef?.current?.getPointerPosition(),
              id: `in-playground-asset-${PlaygroundAssets.length}`,
              src,
            },
          ])
        );
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      <Stage width={w} height={h} ref={stageRef} onMouseDown={checkDeselect} onTouchStart={checkDeselect}>
        <Layer>
          {PlaygroundAssets?.map((image, i) => (
            <DragImage
              index={i}
              key={image.id}
              image={image}
              isSelected={image.id === selectedAssetId}
              onSelect={() => setSelectAssetId(image.id)}
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
