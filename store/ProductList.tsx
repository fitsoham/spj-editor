import AssetStatus from '@components/FilterModal/FilterContext/types/AssetStatusEnum';
import fetcher from '@utils/fetcher';
import AssetType from '@utils/types/AssetType';
import React, { useEffect, useState } from 'react';

export const assetStoreInitialState = {
  status: AssetStatus.Active,
  retailer: [],
  price: [0, 50000],
  height: [0, 360],
  width: [0, 360],
  depth: [0, 360],
  wildcard: false,
  category: [],
  subCategory: [],
  verticals: [],
  preferredRetailer: true,
};

interface ProductContext {
  setFilters: (filterValues: typeof assetStoreInitialState) => void;
  isItemLoaded: (index: any) => boolean;
  loadMoreItems: (startIndex: number, endIndex: number) => Promise<void>;
  hasNextPage: boolean;
  data: AssetType[];
  count: number;
  filter: typeof assetStoreInitialState;
  searchText: {
    value: string;
    set: (text: string) => void;
  };
  resetFilters: () => void;
  loading: boolean;
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
  filter: assetStoreInitialState,
  searchText: {
    value: '',
    set: () => {
      return;
    },
  },
  resetFilters: () => {
    return;
  },
  loading: false,
});

export const convertToFeet = (value: number): number => {
  return parseFloat((value / 12).toFixed(8));
};

const ProductListContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AssetType[]>([]);
  const [filter, setFilter] = useState(assetStoreInitialState);
  const [searchText, setSearchText] = useState<string>('');
  const [count, setCount] = useState<number>(1000);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  const loadMoreItems = async (startIndex: number, endIndex: number): Promise<void> => {
    if (loading) {
      return;
    }
    setLoading(true);
    const endPoint = `/v1/assets/search?skip=${startIndex}&limit=${endIndex - startIndex + 1}`;
    const body = {
      searchText: (searchText || '')?.trim(),
      sort: 'createdAt',
      wildcard: filter?.wildcard,
      filters: {
        retailer: filter.retailer,
        category: filter.category,
        subcategory: filter.subCategory,
        vertical: filter.verticals,
        price: filter.price,
        depth: filter.depth.map(convertToFeet),
        width: filter.width.map(convertToFeet),
        height: filter.height.map(convertToFeet),
        status: '',
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

  useEffect(() => {
    const resetData = () => {
      setCount(50);
      setData([]);
      loadMoreItems(0, 50);
    };
    resetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, searchText]);

  const setFilters = (filterValues) => {
    setFilter({
      ...filter,
      ...filterValues,
    });
  };

  const resetFilters = () => {
    setFilter(assetStoreInitialState);
  };

  const setSearchQuery = (text: string) => {
    setSearchText(text);
  };

  const isItemLoaded = (index: number): boolean => {
    return !!data[index];
  };

  return (
    <ProductListContext.Provider
      value={{
        setFilters,
        resetFilters,
        isItemLoaded,
        loadMoreItems,
        hasNextPage,
        data,
        count,
        filter,
        loading,
        searchText: { value: searchText, set: setSearchQuery },
      }}
    >
      {children}
    </ProductListContext.Provider>
  );
};

export const useProductListContext = (): ProductContext => {
  return React.useContext(ProductListContext);
};

export default ProductListContextProvider;
