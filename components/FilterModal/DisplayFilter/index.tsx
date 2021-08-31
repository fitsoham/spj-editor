import React from 'react';
import { StoreFilterButtonIds } from '../constants/filterButtonConfig';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import RetailerFilter from './RetailerFilter';

interface DisplayFilterType {
  filterKey: StoreFilterButtonIds | string;
}

const DisplayFilterComponent: React.FC<DisplayFilterType> = ({ filterKey }) => {
  switch (filterKey) {
    case StoreFilterButtonIds.brand:
      return <RetailerFilter />;
    case StoreFilterButtonIds.price:
      return <PriceFilter />;
    case StoreFilterButtonIds.category:
      return <CategoryFilter />;
    default:
      return <div>{filterKey}Not developed yet</div>;
  }
};

const DisplayFilter: React.FC<{
  tab:
    | {
        id: StoreFilterButtonIds;
        label: string;
      }
    | {
        id: string;
        label: string;
      };
}> = ({ tab }) => {
  return (
    <>
      <h2 className="text-xl mb-4">Filter by {tab.label}</h2>
      <div className="my-2 flex-grow flex flex-col">
        <DisplayFilterComponent filterKey={tab?.id} />
      </div>
    </>
  );
};

export default DisplayFilter;
