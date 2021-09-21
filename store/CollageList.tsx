import { publicRoutes } from '@utils/constants/api';
import fetcher from '@utils/fetcher';
import React, { useEffect, useState } from 'react';

export interface CollageType {
  price?: number;
  _id: string;
  description: string;
  background?: string;
  isActive?: boolean;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: string;
  meta: {
    view: {
      _id: string;
      translation: {
        x: number;
        y: number;
      };
      id: string;
      product: string;
      imgSrc: string;
      rotation?: string;
      playgroundScale: {
        height: number;
        width: number;
      };
      scale: {
        height: number;
        width: number;
      };
    }[];
  };
}

interface CollageCategoryType {
  _id: string;
  name: string;
  slug: string;
  selected?: boolean;
}
interface CollageContext {
  isItemLoaded: (index: any) => boolean;
  loadMoreItems: (startIndex: number, endIndex: number) => Promise<void>;
  hasNextPage: boolean;
  data: CollageType[];
  count: number;
  setData: React.Dispatch<React.SetStateAction<CollageType[]>>;
  setActiveCollages: React.Dispatch<React.SetStateAction<boolean>>;
  isActiveCollages: boolean;
  collageCategories: CollageCategoryType[];
  updateCategorySelections: (id: string) => void;
}

export const CollageListContext = React.createContext<CollageContext>({
  setActiveCollages: () => {
    return;
  },
  isActiveCollages: false,
  isItemLoaded: () => false,
  loadMoreItems: async () => {
    return;
  },
  hasNextPage: true,
  data: [],
  count: 1000,
  setData: () => {
    return;
  },
  collageCategories: [{ _id: '', name: '', slug: '' }],
  updateCategorySelections: () => {
    return;
  },
});

interface Filter {
  price: Array<string>;
  isActive: boolean;
  category?: Array<string>;
}
interface FilterInterface {
  searchText: string;
  sort: string;
  wildcard: boolean;
  filters: Filter;
}
export const defaultFilters: FilterInterface = {
  filters: {
    price: ['0', '500000'],
    isActive: true,
  },
  searchText: '',
  sort: 'createdAt',
  wildcard: true,
};

const CollageListContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<CollageType[]>([]);
  const [count, setCount] = useState(1000);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [isActiveCollages, setActiveCollages] = useState(false);
  const [collageCategories, setCollageCategories] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);

  const updateCategorySelections = (categoryId) => {
    const updatedSelections = [...collageCategories].map((category) => {
      if (category?._id === categoryId) {
        return { ...category, selected: !category?.selected };
      }
      return { ...category };
    });
    setCollageCategories(updatedSelections);
  };

  useEffect(() => {
    (async () => {
      const categoryRes = await fetcher({ endPoint: publicRoutes?.collageCategoryRoute, method: 'GET' });
      const { data, statusCode } = categoryRes;
      if (statusCode < 301) {
        const filtered = data?.map((item) => ({ _id: item?._id, name: item?.name, slug: item?.slug, selected: false }));
        setCollageCategories(filtered);
      }
    })();
  }, []);

  const loadMoreItems = async (startIndex: number, endIndex: number): Promise<void> => {
    if (loading) {
      return;
    }
    setLoading(true);
    const endPoint = `/v1/collages/search?skip=${startIndex}&limit=${endIndex - startIndex + 1}`;
    const resData = await fetcher({
      endPoint,
      method: 'POST',
      body: filters,
    });
    const copyData = [...data];
    if (resData.statusCode <= 300) {
      const responseData = resData?.data?.data || [];
      setCount(resData?.data?.count as number);

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
    setCount(50);
    setData([]);
    setHasNextPage(true);
    loadMoreItems(0, 50);
  }, [filters]);

  useEffect(() => {
    const selectedCategories = collageCategories.filter((item) => item?.selected);
    if (selectedCategories?.length) {
      const categoryQuery = selectedCategories.map((item) => item?.name.toLowerCase());
      const updatedFilters = {
        ...filters,
        filters: {
          ...filters?.filters,
          category: categoryQuery,
        },
      };
      setFilters(updatedFilters);
    } else {
      const updatedFilters = { ...filters };
      if (updatedFilters?.filters?.category) {
        delete updatedFilters.filters.category;
      }
      setFilters(updatedFilters);
    }
  }, [collageCategories]);

  const isItemLoaded = (index: number): boolean => {
    return !!data[index];
  };

  return (
    <CollageListContext.Provider
      value={{
        isItemLoaded,
        loadMoreItems,
        hasNextPage,
        data,
        count,
        setData,
        isActiveCollages,
        setActiveCollages,
        collageCategories,
        updateCategorySelections,
      }}
    >
      {children}
    </CollageListContext.Provider>
  );
};

export const useCollageListContext = (): CollageContext => {
  return React.useContext(CollageListContext);
};

export default CollageListContextProvider;
