import { useFilterContext } from '@components/FilterModal/FilterContext';
import StoreFilterType from '@components/FilterModal/FilterContext/types/assetStoreFilterType';
import React, { useMemo } from 'react';
import TreeComponent from '../../components/TreeComponent';

const CategoryFilter: React.FC = () => {
  const {
    categoryMap,
    assetStore: { filter, changeFilter },
  } = useFilterContext();

  const onClick = ({ key, value, removeList }: { key: string; value: string; removeList: string[] }) => {
    let changedValue = filter[key];
    if (typeof changedValue === 'object') {
      if (key !== 'verticals') {
        if (changedValue[0] === value) {
          changedValue = [];
        } else changedValue = [value];
      } else {
        if (changedValue.includes(value)) {
          changedValue = changedValue.filter((entry) => entry !== value);
        } else changedValue = [...changedValue, value];
      }
    } else {
      changedValue = value;
    }
    const removeListObj: Partial<StoreFilterType> = {};

    if (removeList) {
      removeList.forEach((key) => {
        removeListObj[key] = [];
      });
    }

    changeFilter({ ...removeListObj, [key]: changedValue });
  };

  const [isFilterApplied, mergedArray] = useMemo(() => {
    try {
      if (filter?.subCategory.length > 0 || filter?.verticals.length > 0 || filter?.category.length > 0) {
        return [true, [...filter?.category, ...filter?.subCategory, ...filter?.verticals]];
      }
      return [false, []];
    } catch (e) {
      return [false, []];
    }
  }, [filter?.category, filter?.subCategory, filter?.verticals]);
  return (
    <div>
      {isFilterApplied && (
        <div className="sticky top-3 pr-4">
          <div className="bg-white flex p-2 w-auto rounded-full text-sm gap-2 overflow-x-auto ">
            {mergedArray.map((label) => (
              <div key={label}>
                <div className={`rounded-full whitespace-nowrap border border-gray-400 py-0.5 px-4`}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <TreeComponent data={categoryMap} onClick={onClick} />
    </div>
  );
};

export default CategoryFilter;
