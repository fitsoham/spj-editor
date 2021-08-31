import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
interface ModalType {
  className?: string;
  onClose: () => void;
  isOpen: boolean;
  unmount: boolean;
}

interface ModalParts {
  Title: React.FC<{ className?: string }>;
  Body: React.FC<{ className?: string }>;
  Footer: React.FC<{ className?: string }>;
}

const Modal: React.FC<ModalType> & ModalParts = ({ children, className = '', onClose, isOpen, unmount }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-40 overflow-y-auto" onClose={onClose} unmount={unmount}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={`inline-block w-full max-w-md my-8 overflow-hidden text-left text-gray-800 align-middle transition-all transform bg-white shadow-xl rounded-md ${className}`}
            >
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

Modal.Title = function Title({ children, className = '' }) {
  return (
    <Dialog.Title as="h3" className={`text-lg font-medium leading-6 text-black ${className}`}>
      {children}
    </Dialog.Title>
  );
};

Modal.Body = function Body({ children, className = '' }) {
  return <div className={`${className}`}>{children}</div>;
};

Modal.Footer = function Footer({ children, className = '' }) {
  return <div className={`${className}`}>{children}</div>;
};

export default Modal;
