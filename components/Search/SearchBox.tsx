import DesignCard from '@components/InteriorDesigns/DesignCard';
import EmptyState from '@components/Shared/EmptyState';
import { RefreshIcon, XIcon } from '@heroicons/react/outline';
import useKeyPress from '@hooks/useKeyPress';
import useSearch from '@hooks/useSearch';
import TopSearches from '@utils/Mocks/TopSearches';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Tween } from 'react-gsap';
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

const SearchBox: React.FC = () => {
  const downPress = useKeyPress('ArrowDown');
  const upPress = useKeyPress('ArrowUp');
  const enterPress = useKeyPress('Enter');
  const [cursor, setCursor] = useState(-1);
  const [hovered, setHovered] = useState(undefined);

  const {
    autoCompleteResults,
    setSelectedSearchQuery,
    searchResultsList,
    searchString,
    setSearchString,
    init,
    isFetching,
  } = useSearch();

  const router = useRouter();

  useEffect(() => {
    if (autoCompleteResults.length && downPress) {
      setCursor((prevState) => (prevState < autoCompleteResults.length - 1 ? prevState + 1 : prevState));
    }
  }, [downPress]);

  useEffect(() => {
    if (autoCompleteResults.length && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress]);

  useEffect(() => {
    if (autoCompleteResults.length && enterPress) {
      // setSelected(autoCompleteResults[cursor]);
      setSelectedSearchQuery(autoCompleteResults[cursor]);
      setSearchString(autoCompleteResults[cursor]?.value);
    }
  }, [cursor, enterPress]);

  useEffect(() => {
    if (autoCompleteResults.length && hovered) {
      setCursor(autoCompleteResults.indexOf(hovered));
    }
  }, [hovered]);

  const clear = () => setSearchString('');

  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="container relative mx-auto px-4">
        <button
          className="absolute rounded-b-lg right-0 top-0 bottom-0 focus:outline-none w-16 h-16 shadow-sm text-center text-gray-400 hover:text-yellow-500 bg-white border border-gray-100"
          onClick={() => router.back()}
        >
          <XIcon className="inline w-6 h-6" />
          <p className="text-xs mt-1">esc</p>
        </button>
      </div>
      <div className="relative md:max-w-3xl xl:max-w-3xl mx-auto pt-12 pb-10 px-4 sm:px-6 lg:pt-16 lg:px-8">
        <AnimateBox className="entry">
          <div className="relative">
            <input
              autoFocus
              onChange={(e) => setSearchString(e?.target?.value)}
              type="text"
              name="first_name"
              id="first_name"
              autoComplete="off"
              placeholder="Start typing to view inspiring designs"
              value={searchString}
              className="py-5 pl-5 pr-28 outline-none block w-full shadow-sm focus:shadow-lg focus:ring-transparent border border-gray-100 focus:border-gray-100 rounded-xl capitalize"
            />
            <div className="absolute right-20 top-0 bottom-0 flex justify-center items-center">
              {isFetching && <RefreshIcon className="w-4 h-4 text-gray-500 animate-spin" />}
            </div>
            <button
              className="absolute right-0 top-0 bottom-0 focus:outline-none w-16 bg-gray-50 flex justify-center text-center items-center border border-gray-100 rounded-xl"
              onClick={clear}
            >
              <span className="text-xs text-yellow-500">clear</span>
            </button>
          </div>
        </AnimateBox>
        <div className="relative">
          {searchString && (
            <div className="inset-0 absolute z-10">
              {!!autoCompleteResults?.length && (
                <AnimateBox className={`${searchString && 'entry'}`}>
                  <ul className="w-full bg-white border border-gray-100 mt-2 p-4 shadow-sm rounded-xl overflow-hidden">
                    {autoCompleteResults.map((item, i) => (
                      <ListItem
                        key={item.id}
                        active={i === cursor}
                        item={item}
                        setSelected={setSelectedSearchQuery}
                        setHovered={setHovered}
                        setSearchString={setSearchString}
                      />
                    ))}
                  </ul>
                </AnimateBox>
              )}
            </div>
          )}
        </div>
      </div>
      {!searchString && searchResultsList && searchResultsList?.length === 0 ? (
        <>
          {init === 'init' ? (
            <div className="max-w-md text-center mx-auto px-4">
              <p className="text-gray-900">Most popular results</p>
              <div className="grid grid-cols-4 gap-x-4 mt-4">
                <Tween from={{ opacity: 0, y: 50 }} to={{ opacity: 1, y: 0 }} duration={0.5} stagger={0.25}>
                  {TopSearches?.map((searchItem) => {
                    return (
                      <div key={searchItem?.id} onClick={() => setSelectedSearchQuery(searchItem?.meta)}>
                        <div className="shadow-xl next-image-fix rounded-xl cursor-pointer">
                          <Image
                            src={searchItem?.img}
                            className="rounded-xl object-cover"
                            alt="spacejoy happy customer"
                            height="124"
                            width="124"
                          />
                        </div>
                        <small className="capitalize mt-4">{searchItem?.title}</small>
                      </div>
                    );
                  })}
                </Tween>
              </div>
            </div>
          ) : (
            <EmptyState
              title="No results"
              message="Oops! No results match your search criteria. Please try again with different keywords."
            />
          )}
        </>
      ) : (
        <div className="container mx-auto px-4 pb-40">
          <p className="text-gray-400 text-xl mb-5 capitalize">Search Results for {`'${searchString}'`}</p>
          <div className="lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 xl:gap-8 grid">
            {searchResultsList?.map((searchItem) => (
              <DesignCard cardData={searchItem?.design} key={searchItem?.design?._id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
