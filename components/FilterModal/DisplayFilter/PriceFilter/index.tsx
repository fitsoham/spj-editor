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
      <div className="w-9/12">
        <RangeSelector onChange={handleChange} value={value} minMax={[0, 50000]} />
        <div className="flex justify-center gap-2 mt-4">
          <div className="flex justify-between flex-col">
            <div className="w-full text-center text-xs text-gray-400">Selected price range</div>
            <div className="flex mx-auto justify-center mt-1">
              <div className="px-2 text-sm">${value[0]}</div>
              <div className="px-2 text-sm">to </div>
              <div className="text-right px-2 text-sm">${value[1]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PriceFilter);
