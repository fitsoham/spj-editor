import React from 'react';
import ReactSlider from 'react-slider';

interface SliderType {
  minMax?: number | number[];
  value: number | number[];
  minDistance?: number;
  handleOnChange?: (value: number | number[], index?: number) => void;
}

const Slider: React.FC<SliderType> = ({ minMax = [0, 100], value, minDistance, handleOnChange }) => {
  const onChange = (value, thumbIndex) => {
    if (handleOnChange) handleOnChange(value, thumbIndex);
  };
  return (
    <ReactSlider
      pearling
      onAfterChange={onChange}
      min={minMax?.[0]}
      max={minMax?.[1]}
      value={value}
      minDistance={minDistance}
      className="h-16 focus:ring-1"
      renderThumb={(props, state) => (
        <div {...props} className="cursor-default select-none rounded-full bg-red-400 h-4 w-4 relative group">
          <div className="absolute bg-black top-full text-white text-xs  p-2 hidden left-2/4 -translate-x-1/2 group-hover:block group-active:block">
            {state.valueNow}
          </div>
        </div>
      )}
      thumbClassName="h-4 w-4 bg-red-200 rounded-full outline-rounded-full outline-none focus:ring focus:ring-1 focus:ring-black/50 focus:border-black"
      trackClassName="h-2 rounded-md bg-blue-200 my-1 "
    />
  );
};

export default Slider;
