import { RefreshIcon, SearchIcon } from '@heroicons/react/outline';
import useDebounce from '@hooks/useDebounce';
import React, { useEffect, useState } from 'react';
import { useProductListContext } from 'store/ProductList';

const FilterSearchbar: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const debouncedSearchText = useDebounce<string>(searchText, 500);

  const {
    count,
    searchText: { value, set },
    loading,
    data,
  } = useProductListContext();

  const setValue = () => {
    console.log(`searchText`, searchText);
    set(searchText);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      set(searchText);
    }
  };

  useEffect(() => {
    set(debouncedSearchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchText]);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    setSearchText(value);
  };

  return (
    <div className="sticky top-0 z-10 bg-gray-200">
      <div className="relative">
        <input
          type="text"
          autoComplete="off"
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="Search"
          defaultValue={value}
          className="text-sm py-4 pr-10 bg-gray-50 outline-none block w-full caret-yellow-500 focus:ring-transparent border-none capitalize"
        />
        <button className="absolute inset-y-0 right-0 px-3" onClick={setValue}>
          {loading && data?.length === 0 ? (
            <RefreshIcon className="w-4 h-4 animate-spin" />
          ) : (
            <SearchIcon className="w-4 h-4" />
          )}
        </button>
      </div>
      <div className="text-right py-1 px-4">
        <span className="text-xs text-gray-600">
          {loading && data?.length === 0 ? <>Searching</> : <>{count} results found</>}
        </span>
      </div>
    </div>
  );
};

export default FilterSearchbar;
