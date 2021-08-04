import { Stage as StageType } from 'konva/lib/Stage';
import React, { useContext, useRef, useState } from 'react';
import { Layer, Stage } from 'react-konva';
import { DataBusContext } from 'store';
import DragImage from './DragImage';

interface PlaygroundInterface {
  w: number;
  h: number;
}

const initData = [
  {
    x: 480,
    y: 210,
    id: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/painting-3_iierxb.png-0',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/painting-3_iierxb.png',
  },
  {
    x: 628,
    y: 210,
    id: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/painting-3_iierxb.png-1',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/painting-3_iierxb.png',
  },
  {
    x: 873,
    y: 400,
    id: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_350/v1628044306/spj-v2/DIY/floor-lamp-2_jmpe7t.png-3',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_350/v1628044306/spj-v2/DIY/floor-lamp-2_jmpe7t.png',
  },
  {
    x: 200,
    y: 600,
    id: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/side-table-2_v7bhjf.png-6',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/side-table-2_v7bhjf.png',
  },
  {
    x: 200,
    y: 450,
    id: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_200/v1628044309/spj-v2/DIY/table-lamp-2_wawq7o.png-8',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_200/v1628044309/spj-v2/DIY/table-lamp-2_wawq7o.png',
  },
  {
    x: 550,
    y: 550,
    id: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_1200/v1628044308/spj-v2/DIY/sofa-1_skkpax.png-5',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_1200/v1628044308/spj-v2/DIY/sofa-1_skkpax.png',
  },
];

const Playground: React.FC<PlaygroundInterface> = ({ h, w }) => {
  const [src] = useContext(DataBusContext);
  const stageRef = useRef<StageType>();
  const [images, setImages] = useState(initData);
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
  );
};

export default Playground;
