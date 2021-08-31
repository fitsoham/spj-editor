import React, { useEffect, useReducer, useRef } from 'react';
import { Sprite, Transformer } from 'react-konva';
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
    stitchedAssetImage?: string;
    count?: number;
    boxSize?: number;
  };
  isSelected: boolean;
  onSelect: () => void;
  onChange: (newAttrs) => void;
  rotationValue?: string;
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

const getAnimationObject = (boxSize, boxHeight) => {
  const animationObject = {};
  for (let i = 0; i < 100; i += 8) {
    animationObject[i.toString()] = [Math.ceil(i / 8) * boxSize, 0, boxSize, boxHeight];
  }
  animationObject['96'] = animationObject['0'];
  return animationObject;
};

const DragImage: React.FC<DragImageInterface> = ({
  index,
  image,
  isSelected,
  onSelect,
  onChange,
  rotationValue = '0',
}) => {
  const [state, dispatch] = useReducer(reducer, image || initialState);
  const trRef = useRef(null);
  const AssetRef = useRef(null);
  const [thumbnail] = useImage(
    `https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_auto,w_300/${state?.productThumbnail}`,
    'anonymous'
  );
  const [img] = useImage(
    `https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_100,w_${
      Math.ceil(state?.width) * state?.count * 100
    }/${state?.stitchedAssetImage}`,
    'anonymous'
  );
  useEffect(() => {
    console.log('state value ---', state);
  }, [state]);

  const animations = getAnimationObject(img?.width / image.count, img?.height);

  useEffect(() => {
    if (trRef && isSelected) {
      trRef?.current?.nodes([AssetRef.current]);
      trRef?.current?.getLayer().batchDraw();
    } else {
      trRef?.current?.nodes([]);
    }
  }, [index, isSelected]);

  const onAssetChange = () => {
    // transformer is changing scale of the node
    // and NOT its width or height
    // but in the store we have only width and height
    // to match the data better we will reset scale on transform end
    const node = AssetRef.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();
    // we will reset it back
    node.scaleX(scaleX);
    node.scaleY(scaleY);
    onChange({
      ...image,
      x: node.x(),
      y: node.y(),
      width: Math.max(node.width() * scaleX),
      height: Math.max(node.height() * scaleY),
    });
  };

  const height = img?.height || 0;
  const width = img?.width / image.count || 0;

  return (
    <>
      <Sprite
        draggable
        ref={AssetRef}
        alt={state?.name}
        name="object"
        image={img}
        x={state?.x}
        y={state?.y}
        id={state?.id}
        offsetX={width ? width / 2 : 0}
        offsetY={height ? height / 2 : 0}
        scaleX={0.75}
        scaleY={0.75}
        width={width}
        height={height}
        isSelected={isSelected}
        onClick={onSelect}
        onTap={onSelect}
        onDragStart={() => dispatch({ type: 'DRAG_START', payload: { isDragging: true } })}
        onDragEnd={(e) => {
          onAssetChange();
          dispatch({ type: 'DRAG_END', payload: { isDragging: false, x: e.target.x(), y: e.target.y() } });
        }}
        onTransformEnd={onAssetChange}
        animations={animations}
        animation={rotationValue}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          keepRatio={true}
          enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
          boundBoxFunc={(oldBox, newBox) => ((newBox.width < 50 || newBox.height) < 50 ? oldBox : newBox)}
        />
      )}
    </>
  );
};

export default React.memo(DragImage);
