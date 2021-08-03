import React, { useReducer } from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

interface DragImageInterface {
  image: {
    id: string;
    src: string;
    x: number;
    y: number;
    isDragging?: false;
  };
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

const DragImage: React.FC<DragImageInterface> = ({ image }) => {
  const [img] = useImage(image.src);
  const [state, dispatch] = useReducer(reducer, image || initialState);

  return (
    <Image
      draggable
      alt="Product Image"
      image={img}
      x={state.x}
      y={state.y}
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
      scaleX={0.5}
      scaleY={0.5}
      onDragStart={() => dispatch({ type: 'DRAG_START', payload: { isDragging: true } })}
      onDragEnd={(e) =>
        dispatch({ type: 'DRAG_END', payload: { isDragging: false, x: e.target.x(), y: e.target.y() } })
      }
    />
  );
};

export default React.memo(DragImage);
