import AssetStatus from '@components/FilterModal/FilterContext/types/AssetStatusEnum';
import fetcher from '@utils/fetcher';
import AssetType from '@utils/types/AssetType';
import React, { useEffect, useMemo, useReducer, useState } from 'react';

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

const initialState = {
  loading: false,
  data: [],
  error: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING_ACTIVE': {
      return { ...state, loading: true };
    }
    case 'SET_RECOMMENDATION_DATA': {
      const { payload } = action;

      return {
        ...state,
        data: payload,
        loading: false,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const useRecommendations = () => {
  // const [data, setData] = useState<AssetType[]>([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [filter, setFilter] = useState(assetStoreInitialState);
  const [count, setCount] = useState<number>(1000);
  const [loading, setLoading] = useState<boolean>(false);

  const assetData = useMemo(() => {
    return state?.data;
  }, [state?.data]);

  const loadMoreItems = async (startIndex: number, endIndex: number): Promise<void> => {
    if (loading) return;
    setLoading(true);
    const endPoint = `/v1/assets/search?skip=${startIndex}&limit=${endIndex - startIndex + 1}`;
    const body = {
      searchText: '',
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
    const copyData = [...assetData];
    if (resData.statusCode <= 300) {
      const responseData = resData?.data?.hits || [];
      console.log(resData?.data?.total, resData?.data);
      setCount(resData?.data?.total as number);

      for (let i = startIndex, j = 0; i <= endIndex; i += 1, j += 1) {
        copyData[i] = responseData[j];
      }
      dispatch({
        type: 'SET_RECOMMENDATION_DATA',
        payload: copyData.filter((copy) => {
          return copy;
        }),
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (filter?.verticals?.length) {
      const resetData = () => {
        setCount(20);
        dispatch({ type: 'SET_RECOMMENDATION_DATA', payload: [] });
        console.log('current filters', filter);
        loadMoreItems(0, 20);
      };
      resetData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const setFilters = (filterValues) => {
    setFilter({
      ...filter,
      ...filterValues,
    });
  };

  const resetFilters = () => {
    setFilter(assetStoreInitialState);
  };
  const isItemLoaded = (index: number): boolean => {
    return !!assetData[index];
  };

  return {
    loadMoreItems,
    isItemLoaded,
    count,
    setFilters,
    resetFilters,
    data: assetData,
    loading,
  };
};

export default useRecommendations;
