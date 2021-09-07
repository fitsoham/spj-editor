import { useCombobox, useMultipleSelection } from 'downshift';
import React, { useState } from 'react';
// const items = ['Neptunium', 'Plutonium', 'Soham']
// import { comboboxStyles, items, menuStyles } from './utils';

const selectedItemStyles = {
  marginLeft: '5px',
  backgroundColor: 'aliceblue',
  borderRadius: '10px',
};

const selectedItemIconStyles = { cursor: 'pointer' };

const comboboxStyles = { display: 'inline-block', marginLeft: '5px' };

function DropdownMultipleCombobox({ triggerSearch, suggestions, updateSelections, label }) {
  const [items, setitems] = useState([]);
  React.useEffect(() => {
    setitems(suggestions);
  }, [suggestions]);

  const [inputValue, setInputValue] = useState('');
  const { getSelectedItemProps, getDropdownProps, addSelectedItem, removeSelectedItem, selectedItems } =
    useMultipleSelection();
  const getFilteredItems = () =>
    items.filter((item) => selectedItems.indexOf(item) < 0 && item?.toLowerCase().startsWith(inputValue.toLowerCase()));

  React.useEffect(() => {
    updateSelections(selectedItems);
  }, [selectedItems]);
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
      console.log(type);
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
            style={selectedItemStyles}
            key={`selected-item-${index}`}
            {...getSelectedItemProps({ selectedItem, index })}
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
        <div style={comboboxStyles} {...getComboboxProps()} className="w-full">
          <input
            {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
            className="p-2 outline-none block w-full caret-yellow-500 focus:ring-transparent border border-gray-400 focus:border-gray-800 rounded text-sm capitalize"
          />
        </div>
      </div>
      <ul {...getMenuProps()} className="absolute left-0 w-full z-10 bg-white px-2">
        {isOpen &&
          getFilteredItems().map((item, index) => (
            <li
              style={highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}}
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default DropdownMultipleCombobox;
