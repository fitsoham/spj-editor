import useWindowSize from '@hooks/useWindowSize';
import Breakpoints from '@utils/constants/BreakPoints';
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
        <ProductCard product={productData} />
      ) : (
        <div className="bg-white p-4 w-full h-full">
          <div className="animate-pulse">
            <div className="bg-gray-200 h-32 rounded" />
            <div className="bg-gray-200 h-2 rounded mt-2" />
            <div className="bg-gray-200 h-6 rounded mt-2" />
            <div className="bg-gray-200 h-3 w-10 rounded mt-3" />
          </div>
        </div>
      )}
    </div>
  );
};

const ProductListView: React.FC = () => {
  const { isItemLoaded, loadMoreItems, count } = useProductListContext();
  const [rowHeight, setRowHeight] = useState(239);

  const { width } = useWindowSize();
  useEffect(() => {
    if (width > Breakpoints['2xl']) {
      if (rowHeight !== 249) setRowHeight(249);
    } else if (rowHeight !== 239) {
      setRowHeight(239);
    }
  }, [width, rowHeight]);

  return (
    <AutoSizer>
      {({ width, height }) => (
        <InfiniteLoader
          isItemLoaded={isItemLoaded}
          loadMoreItems={loadMoreItems}
          itemCount={count}
          minimumBatchSize={2}
        >
          {({ onItemsRendered, ref }) => (
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
              ref={ref}
              rowCount={Math.ceil(count / 2)}
              columnCount={2}
              columnWidth={width / 2}
              rowHeight={rowHeight}
            >
              {DesignCardRow}
            </Grid>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
};

export default ProductListView;
