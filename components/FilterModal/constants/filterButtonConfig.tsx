export enum StoreFilterButtonIds {
  category,
  price,
  brand,
}

const StoreFilterButtonList = [
  { id: StoreFilterButtonIds.category, label: 'Category' },
  { id: StoreFilterButtonIds.price, label: 'Price' },
  { id: StoreFilterButtonIds.brand, label: 'Brand' },
];

const DesignFilterButtonList = [{ id: 'notConfigured', label: 'Not Configured' }];

const filterButtonList = {
  storeFilterList: StoreFilterButtonList,
  designFilterList: DesignFilterButtonList,
};

export default filterButtonList;
