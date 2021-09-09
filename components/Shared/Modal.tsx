import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';

interface ModalProps {
  onCloseCallback?: () => void;
  disabled?: boolean;
}
interface StaticComponents {
  Body?: React.FC;
  Button?: React.FC;
  Header?: React.FC;
}

const Modal: React.FC<ModalProps> & StaticComponents = ({ children, onCloseCallback, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <button disabled={disabled} onClick={openModal}>
        {children[0]}
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed bg-gray-900 bg-opacity-75 inset-0 z-50 overflow-y-auto backdrop-filter backdrop-blur firefox:bg-opacity-90"
          onClose={closeModal}
        >
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
              <Dialog.Overlay className="fixed inset-0" />
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title as="h2" className="text-lg font-medium leading-6 text-gray-900">
                  {children[1]}
                </Dialog.Title>
                <div className="mt-4">{children[2]}</div>
                <div className="mt-4 text-right">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 border border-transparent rounded-md hover:bg-gray-200 focus:ring-1 focus-visible:ring-offset-2 focus:ring-gray-900 focus:outline-none"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  {onCloseCallback && (
                    <button
                      type="button"
                      className=" inline-flex ml-2 justify-center px-4 py-2 text-sm font-medium bg-gray-900 text-white border border-transparent rounded-md focus:ring-1 focus-visible:ring-offset-2 focus:ring-gray-900 focus:outline-none"
                      onClick={() => {
                        closeModal();
                        onCloseCallback();
                      }}
                    >
                      Continue
                    </button>
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

Modal.Button = ({ children }) => <>{children}</>;
Modal.Header = ({ children }) => <span className="text-gray-900">{children}</span>;
Modal.Body = ({ children }) => <p className="text-gray-600 text-sm">{children}</p>;

export default Modal;
