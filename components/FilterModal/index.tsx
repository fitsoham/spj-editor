import Modal from '@components/Shared/Modal';
import { Tab } from '@headlessui/react';
import { ChevronRightIcon, XIcon } from '@heroicons/react/outline';
import React, { useMemo } from 'react';
import filterButtonList from './constants/filterButtonConfig';
import DisplayFilter from './DisplayFilter';
import FilterContextProvider from './FilterContext';
import StoreFilterType from './FilterContext/types/assetStoreFilterType';
import FilterFooter from './FilterFooter';

interface FilterModal {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filter: StoreFilterType) => void;
  type: 'asset' | 'design';
  assetFilterState: StoreFilterType;
}

const FilterModal: React.FC<FilterModal> = ({ isOpen, onClose, type, onApply, assetFilterState }) => {
  const tabButtons = useMemo(() => {
    if (type === 'asset') {
      return filterButtonList.storeFilterList;
    } else {
      return filterButtonList.designFilterList;
    }
  }, [type]);

  return (
    <FilterContextProvider assetFilterState={assetFilterState}>
      <Modal isOpen={isOpen} onClose={onClose} className="divide-y w-7/12  min-w-65" unmount>
        <div className="p-4 divide-y">
          <Modal.Title className="flex pb-2 justify-between items-center">
            <span className="font-bold">Filters</span>{' '}
            <button aria-label="Close Modal" className="hover:bg-gray-200 p-2" onClick={onClose}>
              <XIcon className="w-4 h-4" />
            </button>
          </Modal.Title>
          <Modal.Body className="flex-grow">
            <Tab.Group vertical>
              <div className="flex h-60s overflow-scroll">
                <Tab.List className="flex flex-col divide-y border-r sticky top-0">
                  {tabButtons.map((tab) => (
                    <Tab key={tab?.id}>
                      {({ selected }) => (
                        <div
                          className={`p-2 pl-0 w-64 flex items-center justify-between ${
                            selected ? 'font-semibold' : ''
                          }`}
                        >
                          <span>{tab.label}</span>
                          <ChevronRightIcon className="w-4 font-bold h-4" />
                        </div>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="flex-grow h-full overflow-scroll">
                  {tabButtons.map((tab) => (
                    <Tab.Panel key={tab?.id} className="p-4 pr-0 h-full flex flex-col">
                      <div className="my-2 flex-grow flex flex-col">
                        <DisplayFilter tab={tab} />
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </div>
            </Tab.Group>
          </Modal.Body>
          <Modal.Footer className="pt-4">
            <FilterFooter onApply={onApply} />
          </Modal.Footer>
        </div>
      </Modal>
    </FilterContextProvider>
  );
};

export default FilterModal;
