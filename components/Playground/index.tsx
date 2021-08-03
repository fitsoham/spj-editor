import { Stage as StageType } from 'konva/lib/Stage';
import React, { useContext } from 'react';
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
      id: 'in-1',
      x: 700,
      y: 600,
      src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_1600/v1627957170/spj-v2/DIY/sofa-1_or28di.png',
    },
    {
      id: 'in-2',
      x: 553,
      y: 176,
      src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_400/v1627957170/spj-v2/DIY/painting-1_kgtk7x.png',
    },
    {
      id: 'in-3',
      x: 730,
      y: 176,
      src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_400/v1627957170/spj-v2/DIY/painting-1_kgtk7x.png',
    },
    {
      id: 'in-4',
      x: 1073,
      y: 485,
      src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_800/v1627958722/spj-v2/DIY/floor-lamp-1_pncr67.png',
    },
  ]);

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
        <Stage width={w} height={h} ref={stageRef}>
          <Layer>
            {images.map((image) => (
              <DragImage image={image} key={image.id} />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default Playground;
