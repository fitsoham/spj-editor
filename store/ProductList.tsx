import fetcher from '@utils/fetcher';
import AssetType from '@utils/types/AssetType';
import React, { useState } from 'react';

interface ProductContext {
  setFilters: (filterValues) => void;
  isItemLoaded: (index: any) => boolean;
  loadMoreItems: (startIndex: number, endIndex: number) => Promise<void>;
  hasNextPage: boolean;
  data: AssetType[];
  count: number;
}

export const ProductListContext = React.createContext<ProductContext>({
  setFilters: () => false,
  isItemLoaded: () => false,
  loadMoreItems: async () => {
    return;
  },
  hasNextPage: true,
  data: [],
  count: 1000,
});

export const assetStoreInitialState = {
  metaData: null,
  loading: true,
  status: 'active',
  retailer: [],
  price: [0, 50000],
  height: [0, 360],
  width: [0, 360],
  depth: [0, 360],
  wildcard: false,
  searchText: '',
  category: [],
  subCategory: [],
  verticals: [],
  selectedAsset: '',
  cartOpen: false,
  preferredRetailer: true,
};

export const convertToFeet = (value: number): number => {
  return parseFloat((value / 12).toFixed(8));
};

const ProductListContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AssetType[]>([]);
  const [filter, setFilter] = useState(assetStoreInitialState);
  const [count, setCount] = useState(1000);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  const loadMoreItems = async (startIndex: number, endIndex: number): Promise<void> => {
    console.log('load more data ---- products');
    if (loading) {
      return;
    }
    setLoading(true);
    const endPoint = `/v1/assets/search?skip=${startIndex}&limit=${endIndex - startIndex + 1}`;
    const body = {
      searchText: (filter?.searchText || '')?.trim(),
      sort: 'createdAt',
      wildcard: filter?.wildcard,
      ...{
        ...(filter?.preferredRetailer ? { projectId: 'randomString' } : {}),
      },
      filters: {
        retailer: filter.retailer,
        category: filter.category,
        subcategory: filter.subCategory,
        vertical: filter.verticals,
        price: filter.price,
        depth: filter.depth.map(convertToFeet),
        width: filter.width.map(convertToFeet),
        height: filter.height.map(convertToFeet),
        status: filter.status,
        spriteAvailable: true,
      },
      spriteAvailable: true,
    };

    const resData = await fetcher({
      endPoint,
      method: 'POST',
      body: body,
    });
    const copyData = [...data];
    if (resData.statusCode <= 300) {
      const responseData = resData?.data?.hits || [];
      setCount(resData?.data?.total as number);

      for (let i = startIndex, j = 0; i <= endIndex; i += 1, j += 1) {
        copyData[i] = responseData[j];
      }
      setData(
        copyData.filter((copy) => {
          return copy;
        })
      );
      if (copyData.length < count) {
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
    }
    setLoading(false);
  };

  const setFilters = (filterValues) => {
    setFilter({
      ...filter,
      ...filterValues,
    });
    setCount(0);
    setData([]);
    loadMoreItems(0, 149);
  };

  const isItemLoaded = (index: number): boolean => {
    return !!data[index];
  };

  return (
    <ProductListContext.Provider value={{ setFilters, isItemLoaded, loadMoreItems, hasNextPage, data, count }}>
      {children}
    </ProductListContext.Provider>
  );
};

export const useProductListContext = (): ProductContext => {
  return React.useContext(ProductListContext);
};

export default ProductListContextProvider;
