import Slider from '@components/Shared/Slider';
import React, { ForwardRefExoticComponent, RefAttributes } from 'react';

const FilterSidebar: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>> = React.forwardRef<HTMLDivElement>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className="absolute z-10 top-14 p-4 inset-x-0 bg-white h-full bg-opacity-70 backdrop-filter backdrop-blur firefox:bg-opacity-70"
      >
        <div className="sticky top-0">
          <div>Price Range</div>
          <div className="w-full  my-2">
            <div className="flex justify-between text-sm text-gray-400">
              <span>0</span> <span>100</span>
            </div>
            <Slider minMax={[0, 100]} value={[25, 75]} minDistance={10} />
          </div>
        </div>
      </div>
    );
  }
);

export default FilterSidebar;
