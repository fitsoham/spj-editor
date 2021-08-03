import Header from '@components/Playground/Header';
import MoreActions from '@components/Playground/MoreActions';
import NavPanel from '@components/Playground/NavPanel';
import SideNav from '@components/Playground/SideNav';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';
import { DataBusContextProvider } from 'store';

const PlaygroundWithNoSSR = dynamic(() => import('@components/Playground'), { ssr: false });

const MoodBoard: React.FC = () => {
  const PlaygroundWrapperRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(PlaygroundWrapperRef.current.getClientRects()[0].height);
    setWidth(PlaygroundWrapperRef.current.getClientRects()[0].width);
  }, []);

  return (
    <DataBusContextProvider>
      <div className="h-screen">
        <Header />
        <div className="flex">
          <SideNav />
          <NavPanel />
          <div className="bg-gray-100 diy-h-free flex-1 py-4 pl-4">
            <div className="bg-white h-full shadow-sm" ref={PlaygroundWrapperRef}>
              <PlaygroundWithNoSSR h={height} w={width} />
            </div>
          </div>
          <MoreActions />
        </div>
      </div>
    </DataBusContextProvider>
  );
};

export default MoodBoard;
