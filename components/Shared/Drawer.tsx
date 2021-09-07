import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import React, { Fragment, useEffect, useState } from 'react';

interface HeaderInterface {
  title: string;
  description: string;
}

interface DrawerSubComponent {
  Header?: React.FC<HeaderInterface>;
  Body?: React.FC;
  Footer?: React.FC;
}
interface DrawerInterface {
  isOpen: boolean;
  cb: () => void;
}

const Drawer: React.FC<DrawerInterface> & DrawerSubComponent = ({ isOpen, cb, children }) => {
  const [open, setIsOpen] = useState(isOpen);

  useEffect(() => setIsOpen(isOpen), [isOpen]);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 h-screen bg-gray-900 bg-opacity-75 z-50 overflow-y-auto backdrop-filter backdrop-blur firefox:bg-opacity-90"
        onClose={cb}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-50"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0" />
        </Transition.Child>
        {/* This element is to trick the browser into centering the Drawer contents. */}
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-y-0 right-0 bg-white w-1/2 2xl:w-1/3">
            <button
              type="button"
              className="absolute right-0 top-0 h-10 w-10 text-gray-900 bg-gray-100 flex justify-center items-center hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              onClick={cb}
            >
              <XIcon className="w-4 h-4" />
            </button>
            {children}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

Drawer.Header = ({ title, description }) => (
  <div className="p-6">
    <Dialog.Title as="h3" className="text-xl font-medium leading-6 text-gray-900">
      {title}
    </Dialog.Title>
    <Dialog.Description as="p" className="text-sm mt-1 text-gray-400">
      {description}
    </Dialog.Description>
  </div>
);

Drawer.Body = ({ children }) => <div className="px-6 overflow-scroll">{children}</div>;

Drawer.Footer = ({ children }) => <div className="px-6 absolute inset-x-0 bottom-0">{children}</div>;

export default Drawer;
