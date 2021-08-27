import fetcher from '@utils/fetcher';
import { useEffect, useState } from 'react';

const useMetadata = () => {
  const [meta, setMeta] = useState([]);

  useEffect(() => {
    const fetchAllFilters = async () => {
      const endPoint = '/v2/unity/meta';
      try {
        const response = await fetcher({ endPoint, method: 'GET' });
        const { data, statusCode } = response;
        if (statusCode <= 301) {
          const { isFulfilled } = data;
          if (isFulfilled) {
            const { fulfillmentValue = {} } = data;
            setMeta({ ...fulfillmentValue });
          }
        }
      } catch {
        return setMeta([]);
      }
    };

    fetchAllFilters();
  }, []);

  return { meta };
};

export default useMetadata;
