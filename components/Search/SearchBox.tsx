import { RefreshIcon } from '@heroicons/react/outline';
import useKeyPress from '@hooks/useKeyPress';
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ListItem from './ListItem';
import useSearch from '@hooks/useSearch';
import DesignCardDimmer from '@components/InteriorDesigns/DesignCardDimmer'
import DesignCard from '@components/InteriorDesigns/DesignCard';
import EmptyState from '@components/Shared/EmptyState';


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
    init
  } = useSearch();

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

  const clear = (e: React.SyntheticEvent) => {
    return setSearchString('');
  };
  console.log('init vals', init)
  return (
    <div className="relative h-screen bg-gray-100 overflow-scroll">
      <div className="container max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <AnimateBox className="entry">

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
              className="py-5 pl-5 pr-28 outline-none block w-full shadow-sm focus:shadow-lg focus:ring-transparent border border-gray-100 focus:border-gray-100 rounded-xl capitalize"
            />
            <div className="absolute right-20 top-0 bottom-0 flex justify-center items-center">
              {searchString && <RefreshIcon className="w-4 h-4 text-gray-500 animate-spin" />}
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
              <AnimateBox className={`${searchString ? 'entry' : ''}`}>
                {
                  !!autoCompleteResults?.length && (
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
                  )
                }

              </AnimateBox>
            </div>
          )}
        </div>
        {
          (searchResultsList && searchResultsList?.length === 0) ? (
            <div className="mt-12">
              {
                init === 'init' ? (
                  <p className="text-center">Start typing to view your inspiring designs...</p>
                ) :
                  (
                    <>
                      <EmptyState />
                      <p className="mt-8 text-center"> Oops! No results match your search criteria. Please try again with different keywords.</p>
                    </>
                  )

              }
            </div>
          ) : (
              <div className="mt-12 grid-cols-3 gap-4 grid">
                {isLoadingSearch && (
                  <>
                    {[...new Array(9)].map((_d, _i) => (
                      <DesignCardDimmer key={Math.random()} />
                    ))}
                  </>
                )}
                {
                  searchResultsList?.map((searchItem) => {
                    return (
                      <DesignCard cardData={searchItem?.design} key={searchItem?.design?._id} />
                    )
                  })
                }
              </div>
            )
        }

      </div>
    </div >
  );
};

export default SearchBox;
