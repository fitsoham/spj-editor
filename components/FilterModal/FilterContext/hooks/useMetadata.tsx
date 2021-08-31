import fetcher from '@utils/fetcher';
import { useEffect, useState } from 'react';

const useMetadata = () => {
  const [metaData] = useState();

  const fetchMetaData = async () => {
    const endPoint = '/v2/unity/meta';
    const response = await fetcher({
      endPoint,
      method: 'GET',
    });

    if (response.statusCode <= 300) {
      return response.data?.fulfillmentValue;
    }
    throw new Error();
  };

  useEffect(() => {
    fetchMetaData();
  }, []);

  return {
    metaData,
  };
};

export default useMetadata;
