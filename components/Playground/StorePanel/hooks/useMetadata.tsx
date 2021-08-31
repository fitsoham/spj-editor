import { MetaDataType } from '@components/FilterModal/FilterContext/types/MetadataType';
import fetcher from '@utils/fetcher';
import { useEffect, useState } from 'react';

const useMetadata = (): { meta: MetaDataType } => {
  const [meta, setMeta] = useState<MetaDataType>(null);

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
        return setMeta(null);
      }
    };

    fetchAllFilters();
  }, []);

  return { meta };
};

export default useMetadata;
