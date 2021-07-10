import DesignCard from '@components/InteriorDesigns/DesignCard';
import DesignCardDimmer from '@components/InteriorDesigns/DesignCardDimmer';
import Pagination from '@components/Shared/Pagination/index';
import usePagination from '@hooks/usePagination';
import { internalPages } from '@utils/config';
import { publicRoutes } from '@utils/constants/api';
import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .div3 {
    grid-area: 1 / 2 / 3 / 4;
  }
  .div4 {
    grid-area: 3 / 1 / 5 / 3;
  }
  .div5 {
    grid-area: 3 / 3 / 4 / 4;
  }
  .div6 {
    grid-area: 4 / 3 / 5 / 4;
  }
  .div7 {
    grid-area: 5 / 1 / 6 / 2;
  }
  .div8 {
    grid-area: 5 / 2 / 6 / 3;
  }
  .div9 {
    grid-area: 5 / 3 / 6 / 4;
  }
`;

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
        <div className="grid grid-cols-3 gap-4 xl:gap-6 2xl:gap-8 lg:gap-y-14">
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
