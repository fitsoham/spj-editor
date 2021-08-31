import { useFilterContext } from '@components/FilterModal/FilterContext';
import StoreFilterType from '@components/FilterModal/FilterContext/types/assetStoreFilterType';
import React from 'react';
import TreeComponent from '../CommonComponents/TreeComponent';

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

    console.log(`removeList, changedValue`, { ...removeListObj, [key]: changedValue });

    changeFilter({ ...removeListObj, [key]: changedValue });
  };
  return (
    <div>
      <TreeComponent data={categoryMap} onClick={onClick} />
    </div>
  );
};

export default CategoryFilter;
