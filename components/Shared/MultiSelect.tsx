import { useCombobox, useMultipleSelection } from 'downshift';
import React, { useState } from 'react';

const selectedItemIconStyles = { cursor: 'pointer', marginLeft: '5px' };

interface DropDownProps {
  triggerSearch: (text: string) => void;
  label: string;
  updateSelections: (any) => void;
  suggestions: any;
}

const DropdownMultipleCombobox: React.FC<DropDownProps> = ({ triggerSearch, suggestions, updateSelections, label }) => {
  const [items, setItems] = useState([]);
  React.useEffect(() => {
    setItems(suggestions);
  }, [suggestions]);

  const [inputValue, setInputValue] = useState('');
  const { getSelectedItemProps, getDropdownProps, addSelectedItem, removeSelectedItem, selectedItems } =
    useMultipleSelection();
  const getFilteredItems = () =>
    items.filter((item) => selectedItems.indexOf(item) < 0 && item?.toLowerCase().startsWith(inputValue.toLowerCase()));

  React.useEffect(() => {
    updateSelections(selectedItems);
  }, [selectedItems, updateSelections]);

  const {
    isOpen,
    // getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    inputValue,
    defaultHighlightedIndex: 0, // after selection, highlight the first item.
    selectedItem: null,
    items: getFilteredItems(),
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges;
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true, // keep the menu open after selection.
          };
      }
      return changes;
    },
    onStateChange: ({ inputValue, type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue);
          triggerSearch(inputValue);
          break;
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue('');
            addSelectedItem(selectedItem);
          }
          break;
        default:
          break;
      }
    },
  });
  return (
    <div className="w-full relative">
      <p className="pb-1" {...getLabelProps()}>
        {label}
      </p>
      <div className="w-full">
        {selectedItems.map((selectedItem, index) => (
          <span
            key={`selected-item-${index}`}
            {...getSelectedItemProps({ selectedItem, index })}
            className="text-sm py-2 px-4 ml-0 bg-gray-300 mb-2 inline-block rounded-full mr-2"
          >
            {selectedItem}
            <span
              style={selectedItemIconStyles}
              onClick={(e) => {
                e.stopPropagation();
                removeSelectedItem(selectedItem);
              }}
            >
              &#10005;
            </span>
          </span>
        ))}
        <div {...getComboboxProps()} className="w-full inline-block ml-0">
          <input
            {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
            className="p-2 outline-none block w-full caret-yellow-500 focus:ring-transparent border border-gray-400 focus:border-gray-800 rounded text-sm capitalize"
          />
        </div>
      </div>
      <ul
        {...getMenuProps()}
        className="absolute left-0 w-full z-10 bg-white border-gray-300 shadow-lg overflow-scroll max-h-64"
      >
        {isOpen &&
          getFilteredItems().map((item, index) => (
            <li
              style={highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}}
              className="py-2 px-2 cursor-pointer"
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default React.memo(DropdownMultipleCombobox);
