import fetcher from '@utils/fetcher';
import AssetType from '@utils/types/AssetType';
import React, { useEffect, useState } from 'react';

interface CollageContext {
  isItemLoaded: (index: any) => boolean;
  loadMoreItems: (startIndex: number, endIndex: number) => Promise<void>;
  hasNextPage: boolean;
  data: AssetType[];
  count: number;
}

export const CollageListContext = React.createContext<CollageContext>({
  isItemLoaded: () => false,
  loadMoreItems: async () => {
    return;
  },
  hasNextPage: true,
  data: [],
  count: 5,
});

const CollageListContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AssetType[]>([]);
  const [count, setCount] = useState(1000);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  useEffect(() => {
    console.log(data);
  }, [data]);

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
      const responseData = resData?.data || [];
      setCount(resData?.data?.total as number || 1000);

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
