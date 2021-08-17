import { SearchIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { Tween } from 'react-gsap';

const PinterestPanel: React.FC = () => {
  const [pinList, setPinList] = useState([]);

  const getBoardData = async (url) => {
    await fetch(url)
      .then((response) => response.json())
      .then((json) => setPinList(json));

    console.log(`res`, pinList);
  };

  const handleChange = (e) => {
    getBoardData(e.currentTarget.value);
  };

  return (
    <>
      <div className="p-4">
        <p className="">Find Your Inspiration</p>
        <small className="text-sm text-gray-500">Choose a Pinterest board that best represents your style.</small>
      </div>
      <div className="sticky top-0 z-10 bg-gray-200">
        <div className="relative">
          <input
            onChange={handleChange}
            type="text"
            autoComplete="off"
            placeholder="Public Pinterest Board URL"
            className="text-sm py-3 pr-10 bg-gray-50 outline-none block w-full caret-yellow-500 focus:ring-transparent border-none capitalize"
          />
          <button className="absolute inset-y-0 right-0 px-3">
            <SearchIcon className="w-4 h-4" />
          </button>
        </div>
        <div className="text-right py-1 px-4">
          <span className="text-xs text-gray-600">5 results found</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 px-1 pb-1">
        <Tween from={{ opacity: 0, y: 50 }} to={{ opacity: 1, y: 0 }} duration={1} ease="back.out(1.7)" stagger={0.2}>
          {pinList.map((pin) => (
            <div key={pin.id}>s</div>
          ))}
        </Tween>
      </div>
    </>
  );
};

export default PinterestPanel;
