import { Stage as StageType } from 'konva/lib/Stage';
import React, { useContext, useEffect } from 'react';
import { Layer, Stage } from 'react-konva';
import { DataBusContext } from 'store';
import DragImage from './DragImage';

interface PlaygroundInterface {
  w: number;
  h: number;
}

const Playground: React.FC<PlaygroundInterface> = ({ h, w }) => {
  const [src] = useContext(DataBusContext);
  const stageRef = React.useRef<StageType>();
  const [images, setImages] = React.useState([
    {
      x: 700,
      y: 600,
      key: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_1600/v1627957170/spj-v2/DIY/sofa-1_or28di.png-0',
      src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_1600/v1627957170/spj-v2/DIY/sofa-1_or28di.png',
    },
    {
      x: 553,
      y: 176,
      key: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_400/v1627957170/spj-v2/DIY/painting-1_kgtk7x.png-1',
      src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_400/v1627957170/spj-v2/DIY/painting-1_kgtk7x.png',
    },
    {
      x: 730,
      y: 176,
      key: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_400/v1627957170/spj-v2/DIY/painting-1_kgtk7x.png-2',
      src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_400/v1627957170/spj-v2/DIY/painting-1_kgtk7x.png',
    },
    {
      x: 1073,
      y: 485,
      key: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_800/v1627958722/spj-v2/DIY/floor-lamp-1_pncr67.png-3',
      src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_800/v1627958722/spj-v2/DIY/floor-lamp-1_pncr67.png',
    },
  ]);

  useEffect(() => {
    console.log(`images`, images);
  }, [images]);

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
                key: `${src}-${images.length}`,
                src,
              },
            ])
          );
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <Stage width={w} height={h} ref={stageRef}>
          <Layer>
            {images.map((image) => (
              <DragImage image={image} key={image.key} />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default Playground;
