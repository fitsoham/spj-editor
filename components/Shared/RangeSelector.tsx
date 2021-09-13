import RCSlider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from 'react';

const RangeWithTooltip = RCSlider.createSliderWithTooltip(Range);
interface SliderType {
  minMax?: number[];
  value: number[];
  onChange?: (value: number[], index?: number) => void;
  onAfterChange?: (value: number[], index?: number) => void;
}

const RangeSelector: React.FC<SliderType> = ({ minMax = [0, 100], value, onChange, onAfterChange }) => {
  const onAfterChangeHandle = (changedValue) => {
    if (onAfterChange) onAfterChange(changedValue);
  };

  const onChangeHandle = (changedValue) => {
    if (onChange) onChange(changedValue);
  };

  return (
    <div className="bg-white rounded-full">
      <div className="py-4 px-2 rounded-full flex items-center">
        <div className="px-4">${minMax[0]}</div>
        <RangeWithTooltip
          tipFormatter={(value) => <>${value}</>}
          tipProps={{
            prefixCls: 'rc-slider-tooltip',
          }}
          min={minMax?.[0]}
          onChange={onChangeHandle}
          onAfterChange={onAfterChangeHandle}
          max={minMax?.[1]}
          trackStyle={[{ background: 'black' }]}
          handleStyle={[
            {
              background: 'black',
              border: '0',
              width: '1.2rem',
              height: '1.2rem',
              top: '0.15rem',
            },
          ]}
          defaultValue={value}
        />
        <div className="px-4">${minMax[1]}</div>
      </div>
    </div>
  );
};

export default RangeSelector;
