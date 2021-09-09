import { useFilterContext } from '@components/FilterModal/FilterContext';
import RangeSelector from '@components/Shared/RangeSelector';
import useDebounce from '@hooks/useDebounce';
import React, { useEffect, useState } from 'react';

const PriceFilter: React.FC = () => {
  const {
    assetStore: { filter, changeFilter },
  } = useFilterContext();

  const [value, setValue] = useState(filter?.price);
  const debouncedValue = useDebounce(value, 200);

  const handleChange = (value: number[]) => {
    setValue(value);
  };

  useEffect(() => {
    const handleAfterChange = (value: number[]) => {
      changeFilter({ price: value });
    };
    handleAfterChange(debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <div className="h-full flex flex-col flex-grow justify-center items-center">
      <div className="w-9/12 ">
        <RangeSelector onChange={handleChange} value={value} minMax={[0, 5000]} />
        <div className="flex justify-center gap-2 ">
          <div className="bg-gray-100 rounded-b-xl px-2 flex justify-between flex-col">
            <div className="w-full text-center text-xs text-gray-400">Selected range</div>
            <div className="w-52 flex mx-auto justify-center">
              <div className="p-2 text-sm w-2/5 flex-shrink-0">${value[0]}</div>
              <div className="p-2 text-sm">to </div>
              <div className="text-right p-2 text-sm w-2/5 flex-shrink-0">${value[1]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PriceFilter);
