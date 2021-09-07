import CollageCard from '@components/Playground/CollageCard';
import useWindowSize from '@hooks/useWindowSize';
import Breakpoints from '@utils/constants/BreakPoints';
import React, { CSSProperties, useEffect, useState } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeGrid as Grid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { useCollageListContext } from 'store/CollageList';

const DesignCardRow: React.FC<{
  columnIndex: number;
  rowIndex: number;
  isScrolling?: boolean;
  style: CSSProperties;
}> = ({ columnIndex, rowIndex, style, isScrolling }) => {
  const { data } = useCollageListContext();
  const collageData = data?.[rowIndex * 2 + columnIndex];
  return (
    <div className="overflow-hidden h-full w-full odd:pr-0.5 even:pl-0.5" style={style}>
      {collageData && !isScrolling ? (
        <CollageCard collage={collageData} />
      ) : (
        <div className="bg-white p-4 w-full h-full">
          <div className="animate-pulse">
            <div className="bg-gray-200 h-32 rounded" />
          </div>
        </div>
      )}
    </div>
  );
};

const ProductListView: React.FC = () => {
  const { isItemLoaded, loadMoreItems, count } = useCollageListContext();
  const [rowHeight, setRowHeight] = useState(225);

  const { width } = useWindowSize();
  useEffect(() => {
    if (width > Breakpoints['2xl']) {
      if (rowHeight !== 225) setRowHeight(225);
    } else if (rowHeight !== 225) {
      setRowHeight(205);
    }
  }, [width, rowHeight]);

  return (
    <AutoSizer>
      {({ width, height }) => (
        <InfiniteLoader
          isItemLoaded={isItemLoaded}
          loadMoreItems={loadMoreItems}
          itemCount={count}
          minimumBatchSize={8}
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
