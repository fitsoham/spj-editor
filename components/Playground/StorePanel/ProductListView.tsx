import EmptyState from '@components/Shared/EmptyState';
import React, { CSSProperties, useEffect, useState } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeGrid as Grid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { useProductListContext } from 'store/ProductList';
import ProductCard from '../ProductCard';

const DesignCardRow: React.FC<{
  columnIndex: number;
  rowIndex: number;
  isScrolling?: boolean;
  style: CSSProperties;
}> = ({ columnIndex, rowIndex, style, isScrolling }) => {
  const { data } = useProductListContext();
  const productData = data?.[rowIndex * 2 + columnIndex];
  return (
    <div className="overflow-hidden h-full w-full pb-1 px-1 odd:pr-0.5 even:pl-0.5" style={style}>
      {productData && !isScrolling ? (
        <ProductCard product={productData} isDraggable/>
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

const ProductListView: React.FC = () => {
  const { isItemLoaded, loadMoreItems, count } = useProductListContext();
  const [rowHeight] = useState(260);

  const gridRef = React.createRef<Grid<any>>();

  const { data, loading } = useProductListContext();

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
          minimumBatchSize={2}
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
                {DesignCardRow}
              </Grid>
            );
          }}
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
};

export default React.memo(ProductListView);
