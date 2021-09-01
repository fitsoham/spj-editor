import { RefreshIcon, SearchIcon, XIcon } from '@heroicons/react/outline';
import useDebounce from '@hooks/useDebounce';
import React, { useEffect, useState } from 'react';
import { useProductListContext } from 'store/ProductList';

const FilterSearchbar: React.FC = () => {
  const {
    count,
    searchText: { value, set },
    loading,
    data,
  } = useProductListContext();
  const [searchText, setSearchText] = useState(value);
  const debouncedSearchText = useDebounce<string>(searchText, 500);

  const setValue = () => set(searchText);

  const ClearValue = () => setSearchText('');

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      set(searchText);
    }
  };

  useEffect(() => {
    set(debouncedSearchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchText]);

  const onChange = (e) => setSearchText(e?.target?.value);

  return (
    <div className="sticky top-0 z-10 bg-gray-200">
      <div className="relative">
        <input
          type="text"
          autoComplete="off"
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="Search"
          value={searchText}
          className="text-sm text-gray-900 py-3 pr-10 bg-white outline-none block w-full caret-yellow-500 focus:ring-transparent border-none capitalize"
        />
        {debouncedSearchText ? (
          <button className="absolute inset-y-0 right-0 px-3 text-gray-900" onClick={ClearValue}>
            <XIcon className="w-4 h-4" />
          </button>
        ) : (
          <button className="absolute inset-y-0 right-0 px-3 text-gray-900" onClick={setValue}>
            {loading && data?.length === 0 ? (
              <RefreshIcon className="w-4 h-4 animate-spin" />
            ) : (
              <SearchIcon className="w-4 h-4" />
            )}
          </button>
        )}
      </div>
      <div className="text-right py-1 px-4">
        <span className="text-xs text-gray-600">
          {loading && data?.length === 0 ? (
            <>{debouncedSearchText ? 'Searching' : 'Loading'}</>
          ) : (
            <>
              {count} {debouncedSearchText ? 'results found' : 'Items'}
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default FilterSearchbar;
