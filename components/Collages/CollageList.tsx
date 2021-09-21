import Pagination from '@components/Shared/Pagination/index';
import usePagination from '@hooks/usePagination';
import { internalPages } from '@utils/config';
import { publicRoutes } from '@utils/constants/api';
import React, { useRef } from 'react';
import CollageCard from './CollageCard';
import CollageCardDimmer from './CollageCardDimmer';
import { CollagesListInterface } from './interface';

interface CollageListInterface {
  feedData: {
    count: number;
    list: CollagesListInterface[];
    filters?: any;
  };
}

const CollageList: React.FC<CollageListInterface> = ({ feedData }) => {
  const ref = useRef<HTMLDivElement>();

  const onButtonClick = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const { currentRenderList, isFetching, buttons } = usePagination(
    { url: publicRoutes.collageBase, method: 'get' },
    feedData?.list,
    feedData?.count,
    internalPages.Collages.DEFAULT_PAGINATION_BUTTON_COUNT,
    internalPages.Collages.DEFAULT_PAGE_SIZE,
    { onButtonClick: onButtonClick }
  );

  return (
    <div className="bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 xl:gap-6 2xl:gap-8 lg:gap-y-14">
          {isFetching && (
            <>
              {[...new Array(internalPages.InteriorDesigns.DEFAULT_PAGE_SIZE)].map((_d, _i) => (
                <CollageCardDimmer key={_d} />
              ))}
            </>
          )}
          {currentRenderList.map((design) => (
            <CollageCard cardData={design} key={design?._id} />
          ))}
        </div>
        <div className="mb-8">
          <Pagination buttonList={buttons} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(CollageList);
