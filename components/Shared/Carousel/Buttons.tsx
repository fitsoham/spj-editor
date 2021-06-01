import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import React from 'react';

interface CarouselNavButton {
  onClick: () => void;
  flow: string;
}

const CarouselNavButton: React.FC<CarouselNavButton> = ({ onClick, flow }) => {
  return (
    <button
      className={`relative z-10 h-28 w-28 bg-white shadow-md border border-bg-50 transition hover:shadow-xl rounded-2xl flex items-center justify-center focus:outline-none hover:text-red-500 ${
        flow === 'left' ? 'justify-self-end' : 'justify-self-start'
      }`}
      onClick={onClick}
    >
      {flow === 'left' && <ArrowLeftIcon className="w-6 h-6" />}
      {flow === 'right' && <ArrowRightIcon className="w-6 h-6" />}
    </button>
  );
};

export default CarouselNavButton;
