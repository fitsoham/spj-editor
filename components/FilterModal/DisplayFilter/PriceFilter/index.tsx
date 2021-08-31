import { useFilterContext } from '@components/FilterModal/FilterContext';
import RangeSelector from '@components/Shared/RangeSelector';
import React from 'react';

const PriceFilter: React.FC = () => {
  const {
    assetStore: { filter, changeFilter },
  } = useFilterContext();

  const handleChange = (value: number[]) => {
    changeFilter({ price: value });
  };

  return (
    <div className="h-full flex flex-col flex-grow justify-center items-center">
      <div className="w-9/12">
        <RangeSelector value={filter?.price} minMax={[0, 5000]} onChange={handleChange} />
      </div>
    </div>
  );
};

export default React.memo(PriceFilter);
