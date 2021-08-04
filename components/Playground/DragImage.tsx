import React, { useEffect, useReducer, useRef } from 'react';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';

interface DragImageInterface {
  index: number;
  image: {
    id: string;
    src: string;
    x: number;
    y: number;
    height?: number;
    width?: number;
    isDragging?: false;
  };
  isSelected: boolean;
  onSelect: () => void;
  onChange: (newAttrs) => void;
}

const initialState = {
  src: '',
  x: 0,
  y: 0,
  isDragging: false,
};

const reducer = (state, action) => {
  const {
    payload: { isDragging, x, y },
  } = action;

  switch (action.type) {
    case 'DRAG_START':
      return { ...state, isDragging };
    case 'DRAG_END':
      return { ...state, isDragging, x, y };
    default:
      throw new Error();
  }
};

const DragImage: React.FC<DragImageInterface> = ({ index, image, isSelected, onSelect, onChange }) => {
  const [state, dispatch] = useReducer(reducer, image || initialState);
  const trRef = useRef(null);
  const AssetRef = useRef(null);
  const [img] = useImage(image.src);

  useEffect(() => {
    if (trRef && isSelected) {
      trRef?.current?.nodes([AssetRef.current]);
      trRef?.current?.getLayer().batchDraw();
    } else {
      trRef?.current?.nodes([]);
    }
  }, [index, isSelected]);

  return (
    <>
      <Image
        draggable
        ref={AssetRef}
        alt="Product Image"
        image={img}
        x={state.x}
        y={state.y}
        id={state.id}
        width={state.width}
        height={state.height}
        scaleX={0.5}
        scaleY={0.5}
        offsetX={img ? img.width / 2 : 0}
        offsetY={img ? img.height / 2 : 0}
        isSelected={isSelected}
        onClick={onSelect}
        onTap={onSelect}
        onDragStart={() => dispatch({ type: 'DRAG_START', payload: { isDragging: true } })}
        onDragEnd={(e) =>
          dispatch({ type: 'DRAG_END', payload: { isDragging: false, x: e.target.x(), y: e.target.y() } })
        }
        onTransformEnd={() => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = AssetRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          onChange({
            ...image,
            x: node.x(),
            y: node.y(),
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {true && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 50 || newBox.height < 50) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default DragImage;
