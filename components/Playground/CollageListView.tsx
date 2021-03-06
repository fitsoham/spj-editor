import CollageCard from '@components/Playground/CollageCard';
import useWindowSize from '@hooks/useWindowSize';
import Breakpoints from '@utils/constants/BreakPoints';
import React, { CSSProperties, useEffect, useState } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeGrid as Grid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { useCollageListContext } from 'store/CollageList';

const cardHeight = 230;

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
        <div className="bg-white p-4 w-full">
          <div className="animate-pulse">
            <div className="bg-gray-200 h-32 rounded" />
            <div className="bg-gray-200 h-3 rounded mt-2 w-24" />
            <div className="bg-gray-200 h-3 rounded mt-1 w-24" />
            <div className="bg-gray-200 h-3 rounded mt-3 w-12" />
          </div>
        </div>
      )}
    </div>
  );
};

const CollageListView: React.FC = () => {
  const { isItemLoaded, loadMoreItems, count } = useCollageListContext();
  const [rowHeight, setRowHeight] = useState(cardHeight);

  const { width } = useWindowSize();
  useEffect(() => {
    if (width > Breakpoints['2xl']) {
      if (rowHeight !== cardHeight) setRowHeight(cardHeight);
    } else if (rowHeight !== cardHeight) {
      setRowHeight(210);
    }
  }, [width, rowHeight]);

  return (
    <>
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
    </>
  );
};

export default CollageListView;
