import EmptyState from '@components/Shared/EmptyState';
import { SwitchHorizontalIcon } from '@heroicons/react/outline';
import useRecommendations from '@hooks/useRecommendations';
import React, { CSSProperties, useContext, useEffect, useState } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeGrid as Grid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { PlaygroundAssetsContext, PlaygroundAssetType } from 'store/PlaygroundAssets';
import ProductCard from '../ProductCard';

const DesignCardRow: React.FC<{
  columnIndex: number;
  rowIndex: number;
  isScrolling?: boolean;
  style: CSSProperties;
  fetchProductReplacement: (id: string, product: PlaygroundAssetType) => void;
  data;
}> = ({ columnIndex, rowIndex, style, isScrolling, data, fetchProductReplacement }) => {
  const productData = data?.[rowIndex * 2 + columnIndex];
  return (
    <div className="overflow-hidden h-full w-full pb-1 px-1 odd:pr-0.5 even:pl-0.5" style={style}>
      {productData && !isScrolling ? (
        <ProductCard product={productData} isDraggable={false} isSwappable>
          <button
            className=" flex text-black text-xs py-1 px-3 ml-2 rounded-lg border border-black hover:bg-black hover:text-white"
            onClick={() => fetchProductReplacement(productData?._id, productData)}
          >
            <SwitchHorizontalIcon className="h-4 w-4 mr-2" />
            <span className="text-xs">Swap</span>
          </button>
        </ProductCard>
      ) : (
        <div className="bg-white p-4 w-full h-full">
          <div className="animate-pulse">
            <div className="bg-gray-100 h-32 rounded" />
            <div className="bg-gray-100 h-2 rounded mt-2 w-16" />
            <div className="bg-gray-100 h-8 rounded mt-2" />
            <div className="bg-gray-100 h-3 rounded mt-4 w-10 " />
          </div>
        </div>
      )}
    </div>
  );
};

const RecommendationsView: React.FC = () => {
  const { currentVerticalForRecommendations, fetchProductReplacement } = useContext(PlaygroundAssetsContext);
  const { isItemLoaded, loadMoreItems, count, data, loading, setFilters } = useRecommendations();
  const [rowHeight] = useState(260);

  useEffect(() => {
    if (currentVerticalForRecommendations) {
      setFilters({ verticals: [currentVerticalForRecommendations] });
    }
  }, [currentVerticalForRecommendations]);

  const gridRef = React.createRef<Grid<any>>();

  useEffect(() => {
    if (data?.length === 0 && loading) {
      gridRef.current?.scrollToItem({
        columnIndex: 0,
        rowIndex: 0,
      });
    }
  }, [gridRef, data?.length, loading]);
  return !loading && data?.length === 0 ? (
    <EmptyState title="Oops!" message="No matching products found" />
  ) : (
    <AutoSizer>
      {({ width, height }) => (
        <InfiniteLoader
          isItemLoaded={isItemLoaded}
          loadMoreItems={loadMoreItems}
          itemCount={count}
          minimumBatchSize={20}
        >
          {({ onItemsRendered }) => {
            return (
              <Grid
                height={height}
                width={width}
                onItemsRendered={({
                  visibleRowStartIndex,
                  visibleRowStopIndex,
                  overscanRowStopIndex,
                  overscanRowStartIndex,
                }) => {
                  onItemsRendered({
                    overscanStartIndex: overscanRowStartIndex * 2,
                    overscanStopIndex: overscanRowStopIndex * 2,
                    visibleStartIndex: visibleRowStartIndex * 2,
                    visibleStopIndex: visibleRowStopIndex * 2,
                  });
                }}
                ref={gridRef}
                rowCount={Math.ceil(count / 2)}
                columnCount={2}
                columnWidth={width / 2}
                rowHeight={rowHeight}
              >
                {/* {DesignCardRow} */}
                {({ columnIndex, rowIndex, style, isScrolling }) => {
                  return (
                    <DesignCardRow
                      columnIndex={columnIndex}
                      rowIndex={rowIndex}
                      style={style}
                      isScrolling={isScrolling}
                      fetchProductReplacement={fetchProductReplacement}
                      data={data}
                    />
                  );
                }}
              </Grid>
            );
          }}
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
};

export default React.memo(RecommendationsView);
