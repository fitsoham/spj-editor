import HelpData from '@mocks/HelpData';
import React from 'react';
import AccordionItem from './AccordionItem';

const Ecommerce: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-28">
      <div>
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
              <dl className="mt-6 space-y-6 divide-y divide-gray-300">
                {HelpData?.map((item, index) => (
                  <AccordionItem key={item.question} data={item} index={index} />
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
