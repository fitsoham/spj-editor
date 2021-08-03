import { Stage as StageType } from 'konva/lib/Stage';
import React, { useContext } from 'react';
import { Layer, Stage } from 'react-konva';
import { DataBusContext } from 'store';
import DragImage from './DragImage';

interface PlaygroundInterface {
  w: number;
  h: number;
}

const initData = [
  {
    id: 'in-4',
    x: 750,
    y: 400,
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_600/v1627958722/spj-v2/DIY/floor-lamp-1_pncr67.png',
  },
  {
    id: 'in-1',
    x: 500,
    y: 500,
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_1600/v1627957170/spj-v2/DIY/sofa-1_or28di.png',
  },
  {
    id: 'in-2',
    x: 400,
    y: 170,
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_400/v1627957170/spj-v2/DIY/painting-1_kgtk7x.png',
  },
  {
    id: 'in-3',
    x: 550,
    y: 170,
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_400/v1627957170/spj-v2/DIY/painting-1_kgtk7x.png',
  },
];

const Playground: React.FC<PlaygroundInterface> = ({ h, w }) => {
  const [src] = useContext(DataBusContext);
  const stageRef = React.useRef<StageType>();
  const [images, setImages] = React.useState(initData);

  const [selectedAssetId, setSelectAssetId] = React.useState('');

  const checkDeselect = (e): void => {
    if (e.target === e.target?.getStage()) {
      setSelectAssetId('');
    }
  };

  return (
    <div>
      <div
        onDrop={(e) => {
          e.preventDefault();
          stageRef?.current?.setPointersPositions(e);
          setImages(
            images.concat([
              {
                ...stageRef?.current?.getPointerPosition(),
                id: `${src}-${images.length}`,
                src,
              },
            ])
          );
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <Stage width={w} height={h} ref={stageRef} onMouseDown={checkDeselect} onTouchStart={checkDeselect}>
          <Layer>
            {images.map((image, i) => (
              <DragImage
                key={image.id}
                image={image}
                isSelected={image.id === selectedAssetId}
                onSelect={() => {
                  setSelectAssetId(image.id);
                }}
                onChange={(newAttrs): void => {
                  const tmp = [...images];
                  tmp[i] = newAttrs;
                  setImages(tmp);
                }}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default Playground;
