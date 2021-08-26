import BottomNav from '@components/Playground/BottomNav';
import Header from '@components/Playground/Header';
import MoreActions from '@components/Playground/MoreActions';
import NavPanel from '@components/Playground/NavPanel';
import SideNav from '@components/Playground/SideNav';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';
import { DataBusContextProvider } from 'store';
import { NavSelectContextProvider } from 'store/NavSelect';
import { PlaygroundAssetsContextProvider } from 'store/PlaygroundAssets';
import { SelectedIdContextProvider } from 'store/SelectedId';

const PlaygroundWithNoSSR = dynamic(() => import('@components/Playground'), { ssr: false });

const VisualBoard: React.FC = () => {
  const PlaygroundWrapperRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState([0, 0]);

  const updateSize = () =>
    setSize([PlaygroundWrapperRef.current.offsetWidth, PlaygroundWrapperRef.current.offsetHeight]);

  useEffect(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <NavSelectContextProvider>
      <SelectedIdContextProvider>
        <PlaygroundAssetsContextProvider>
          <DataBusContextProvider>
            <div className="h-screen">
              <Header roomTypeTitle="Living Room" />
              <div className="flex">
                <div className="flex-shrink-0 w-16 bg-white diy-h-free">
                  <SideNav />
                </div>
                <div className="relative flex-shrink-0 w-72 2xl:w-80 bg-gray-200 overflow-y-scroll diy-h-free">
                  <NavPanel />
                </div>
                <div className="bg-gray-100 diy-h-free w-3/4 py-4 pl-4 flex flex-col space-y-4">
                  <div className="bg-white shadow-sm p-4">
                    <p className="text-sm text-gray-600">Budget: $19000.00</p>
                  </div>
                  <div className="bg-white shadow-sm h-full flex-1" ref={PlaygroundWrapperRef}>
                    <PlaygroundWithNoSSR w={size[0]} h={size[1]} />
                  </div>
                  <BottomNav />
                </div>
                <MoreActions />
              </div>
            </div>
          </DataBusContextProvider>
        </PlaygroundAssetsContextProvider>
      </SelectedIdContextProvider>
    </NavSelectContextProvider>
  );
};

export default React.memo(VisualBoard);
