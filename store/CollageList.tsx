import fetcher from '@utils/fetcher';
import React, { useState } from 'react';

export interface CollageType {
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
        x: {
          $numberDecimal: string;
        };
        y: {
          $numberDecimal: string;
        };
      };
      id: string;
      product: string;
      imgSrc: string;
      rotation?: string;
      playgroundScale: {
        height: {
          $numberDecimal: string;
        };
        width: {
          $numberDecimal: string;
        };
      };
      scale: {
        x: {
          $numberDecimal: string;
        };
        y: {
          $numberDecimal: string;
        };
      };
    }[];
  };
}
interface CollageContext {
  isItemLoaded: (index: any) => boolean;
  loadMoreItems: (startIndex: number, endIndex: number) => Promise<void>;
  hasNextPage: boolean;
  data: CollageType[];
  count: number;
}

export const CollageListContext = React.createContext<CollageContext>({
  isItemLoaded: () => false,
  loadMoreItems: async () => {
    return;
  },
  hasNextPage: true,
  data: [],
  count: 1000,
});

const CollageListContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<CollageType[]>([]);
  const [count, setCount] = useState(1000);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  const loadMoreItems = async (startIndex: number, endIndex: number): Promise<void> => {
    if (loading) {
      return;
    }
    setLoading(true);
    const endPoint = `/v1/collages?skip=${startIndex}&limit=${endIndex - startIndex + 1}`;
    const resData = await fetcher({
      endPoint,
      method: 'GET',
    });
    const copyData = [...data];
    if (resData.statusCode <= 300) {
      const responseData = resData?.data?.data || [];
      setCount((resData?.data?.count as number));

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

  const isItemLoaded = (index: number): boolean => {
    return !!data[index];
  };

  return (
    <CollageListContext.Provider value={{ isItemLoaded, loadMoreItems, hasNextPage, data, count }}>
      {children}
    </CollageListContext.Provider>
  );
};

export const useCollageListContext = (): CollageContext => {
  return React.useContext(CollageListContext);
};

export default CollageListContextProvider;
