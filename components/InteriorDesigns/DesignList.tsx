import DesignCard from '@components/InteriorDesigns/DesignCard';
import DesignCardDimmer from '@components/InteriorDesigns/DesignCardDimmer';
import Pagination from '@components/Shared/Pagination/index';
import usePagination from '@hooks/usePagination';
import { internalPages } from '@utils/config';
import { publicRoutes } from '@utils/constants/api';
import React from 'react';

interface DesignListInterface {
  feedData: {
    count: number;
    list: [];
    filters?: any;
  };
}

const DesignList: React.FC<DesignListInterface> = ({ feedData }) => {
  const { filters = {} } = feedData || {};

  const { currentRenderList, isFetching, buttons } = usePagination(
    { url: publicRoutes.designFeed, method: 'POST', payload: { data: { ...filters } } },
    feedData?.list,
    feedData?.count,
    internalPages.InteriorDesigns.DEFAULT_PAGINATION_BUTTON_COUNT,
    internalPages.InteriorDesigns.DEFAULT_PAGE_SIZE
  );
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-x-8 gap-y-12">
          {isFetching && (
            <>
              {[...new Array(internalPages.InteriorDesigns.DEFAULT_PAGE_SIZE)].map((_d, _i) => (
                <DesignCardDimmer key={Math.random()} />
              ))}
            </>
          )}
          {currentRenderList.map((design) => (
            <DesignCard cardData={design} key={design?._id} />
          ))}
        </div>
        <Pagination buttonList={buttons} />
      </div>
    </div>
  );
};

export default React.memo(DesignList);
