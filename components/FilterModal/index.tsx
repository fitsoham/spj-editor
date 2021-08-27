import { Dialog } from '@headlessui/react';
import React from 'react';

interface FilterModal {
  open: boolean;
  onClose: () => void;
}

const FilterModal: React.FC<FilterModal> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} className="divide-y">
      <Dialog.Overlay />
      <Dialog.Title>Filter</Dialog.Title>
    </Dialog>
  );
};

export default FilterModal;
