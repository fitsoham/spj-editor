import RCSlider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from 'react';

const RangeWithTooltip = RCSlider.createSliderWithTooltip(Range);
interface SliderType {
  minMax?: number[];
  value: number[];
  onChange?: (value: number[], index?: number) => void;
}

const RangeSelector: React.FC<SliderType> = ({ minMax = [0, 100], value, onChange }) => {
  const onAfterChange = (value) => {
    if (onChange) onChange(value);
  };
  return (
    <div className="bg-bluegray-200 p-3 rounded-full">
      <div className="bg-white py-4 px-2 rounded-full flex items-center">
        <div className="pl-2 pr-6">${minMax[0]}</div>
        <RangeWithTooltip
          tipFormatter={(value) => `$${value}`}
          min={minMax?.[0]}
          onAfterChange={onAfterChange}
          max={minMax?.[1]}
          trackStyle={[{ background: 'black' }]}
          handleStyle={[
            {
              background: 'black',
              border: '0',
              width: '1.6875rem',
              height: '1.6875rem',
              top: '-0.06rem',
            },
          ]}
          defaultValue={value}
          pushable
        />
        <div className="pr-2 pl-6">${minMax[1]}</div>
      </div>
    </div>
  );
};

export default RangeSelector;
