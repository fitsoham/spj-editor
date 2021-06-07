import { RefreshIcon } from '@heroicons/react/outline';
import useKeyPress from 'hooks/useKeyPress';
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ListItem from './ListItem';

const entry = keyframes`
	from { 
		opacity: 0;
	}
	to {
    opacity: 1;
    transform: translateY(0px);
	}
`;

const AnimateBox = styled.div`
  &.entry {
    opacity: 0;
    transform: translateY(20px);
    animation: ${entry} 0.8s forwards;
  }
  &.details {
    animation-delay: 550ms;
  }
  &.banner {
    animation-delay: 300ms;
  }
`;

const items = [
  {
    id: 1,
    title: 'The Teal Door: A Perfect Modern Patio',
    theme: 'Boho Eclectic',
    thumbnail:
      'https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/w_700/v1621942704/server/designs/render/60ace1ad7c68df00239a02e0.png',
  },
  {
    id: 2,
    title: 'A Sweet Haven Bohemian Living Room',
    theme: 'Boho Minimalist',
    thumbnail:
      'https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/w_700/v1622033369/server/designs/render/60ae43d77c68df00239a8c22.png',
  },
  {
    id: 3,
    title: 'An Ultra-Modern Bohemian Living-Dining Room',
    theme: 'Boho Rustic',
    thumbnail:
      'https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/w_700/v1622119424/server/designs/render/60af93ff463d5700243613c5.jpg',
  },
  {
    id: 4,
    title: 'Delicate & Pink: A Transitional Glam Bedroom For A Little Lady',
    theme: 'Boho Eclectic',
    thumbnail:
      'https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/w_700/v1622209716/server/designs/render/60b0f4b3a4c72c00239b396e.jpg',
  },
  {
    id: 5,
    title: 'A Mid-century Modern Living - Dining Room In Earthy Hues',
    theme: 'Boho Eclectic',
    thumbnail:
      'https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/w_700/v1622209199/server/designs/render/60b0f2aea4c72c00239b383c.jpg',
  },
];

const SearchBox: React.FC = () => {
  const [searchString, setSearchString] = useState('');
  const [selected, setSelected] = useState(undefined);
  const downPress = useKeyPress('ArrowDown');
  const upPress = useKeyPress('ArrowUp');
  const enterPress = useKeyPress('Enter');
  const [cursor, setCursor] = useState(-1);
  const [hovered, setHovered] = useState(undefined);

  useEffect(() => {
    if (items.length && downPress) {
      setCursor((prevState) => (prevState < items.length - 1 ? prevState + 1 : prevState));
    }
  }, [downPress]);

  useEffect(() => {
    if (items.length && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress]);

  useEffect(() => {
    if (items.length && enterPress) {
      setSelected(items[cursor]);
      setSearchString(items[cursor]?.title);
    }
  }, [cursor, enterPress]);

  useEffect(() => {
    if (items.length && hovered) {
      setCursor(items.indexOf(hovered));
    }
  }, [hovered]);

  const clear = (e: React.SyntheticEvent) => {
    e.preventDefault();
    return setSearchString('');
  };

  return (
    <div className="relative h-screen bg-gray-100">
      <div className="container max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <AnimateBox className="entry">
          <form action="#" method="POST">
            <div className="relative">
              <input
                autoFocus
                onChange={(e) => setSearchString(e?.target?.value)}
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="off"
                placeholder="search"
                value={searchString}
                className="py-5 pl-5 pr-28 outline-none block w-full shadow-sm focus:shadow-lg focus:ring-transparent border border-gray-100 focus:border-gray-100 rounded-xl"
              />
              <div className="absolute right-20 top-0 bottom-0 flex justify-center items-center">
                {searchString && <RefreshIcon className="w-4 h-4 animate-spin text-gray-500" />}
              </div>
              <button
                className="absolute right-0 top-0 bottom-0 focus:outline-none w-16 bg-gray-50 flex justify-center text-center items-center border border-gray-100 rounded-xl"
                onClick={clear}
              >
                <span className="text-xs text-yellow-500">clear</span>
              </button>
            </div>
          </form>
        </AnimateBox>
        {searchString && (
          <AnimateBox className={`${searchString ? 'entry' : ''}`}>
            <ul className="w-full bg-white border border-gray-100 mt-2 p-4 shadow-sm rounded-xl overflow-hidden">
              {items.map((item, i) => (
                <ListItem
                  key={item.id}
                  active={i === cursor}
                  item={item}
                  setSelected={setSelected}
                  setHovered={setHovered}
                  setSearchString={setSearchString}
                />
              ))}
            </ul>
          </AnimateBox>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
