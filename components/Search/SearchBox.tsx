import DesignCard from '@components/InteriorDesigns/DesignCard';
import EmptyState from '@components/Shared/EmptyState';
import { RefreshIcon, XIcon } from '@heroicons/react/outline';
import useKeyPress from '@hooks/useKeyPress';
import useSearch from '@hooks/useSearch';
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
    isLoadingSearch,
    searchString,
    setSearchString,
    init,
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
        <Tween from={{ opacity: 0, y: -50 }} to={{ opacity: 1, y: 0 }} duration={0.5} delay={1}>
          <button
            className="absolute right-0 top-0 bottom-0 focus:outline-none w-16 h-16 shadow-sm text-center bg-white border border-gray-100"
            onClick={() => router.back()}
          >
            <XIcon className="inline w-6 h-6" />
            <p className="text-xs text-gray-400 mt-1">esc</p>
          </button>
        </Tween>
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
              placeholder="Start typing to view your inspiring designs"
              value={searchString}
              className="py-5 pl-5 pr-28 outline-none block w-full shadow-sm focus:shadow-lg focus:ring-transparent border border-gray-100 focus:border-gray-100 rounded-xl capitalize"
            />
            <div className="absolute right-20 top-0 bottom-0 flex justify-center items-center">
              {isLoadingSearch && <RefreshIcon className="w-4 h-4 text-gray-500 animate-spin" />}
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
                <AnimateBox className={`${searchString ? 'entry' : ''}`}>
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
                  <div>
                    <div className="shadow-xl next-image-fix rounded-xl">
                      <Image
                        src="https://images.unsplash.com/photo-1523544463628-d873327f5217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                        className="rounded-xl object-cover"
                        alt="spacejoy happy customer"
                        height="124"
                        width="124"
                      />
                    </div>
                    <small>Eclectic</small>
                  </div>
                  <div>
                    <div className="shadow-xl next-image-fix rounded-xl">
                      <Image
                        src="https://images.unsplash.com/photo-1607322851003-f5a88dc5b960?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                        className="rounded-xl object-cover"
                        alt="spacejoy happy customer"
                        height="124"
                        width="124"
                      />
                    </div>
                    <small>Glam</small>
                  </div>
                  <div>
                    <div className="shadow-xl next-image-fix rounded-xl">
                      <Image
                        src="https://images.unsplash.com/photo-1602872029708-84d970d3382b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                        className="rounded-xl object-cover"
                        alt="spacejoy happy customer"
                        height="124"
                        width="124"
                      />
                    </div>
                    <small>Modern</small>
                  </div>
                  <div>
                    <div className="shadow-xl next-image-fix rounded-xl">
                      <Image
                        src="https://images.unsplash.com/photo-1614518921956-0d7c71b7999d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                        className="rounded-xl object-cover"
                        alt="spacejoy happy customer"
                        height="124"
                        width="124"
                      />
                    </div>
                    <small>Home Office</small>
                  </div>
                </Tween>
              </div>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <EmptyState />
              <p className="mt-8 text-center text-gray-600">
                Oops! No results match your search criteria. Please try again with different keywords.
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="container mx-auto px-4 pb-40">
          <p className="text-gray-400 text-xl mb-5">Search Results for {searchString}</p>
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
