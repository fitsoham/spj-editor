import { PricingData } from '@components/Pricing/PricingTypes';
import SectionTitle from '@components/Shared/SectionTitle';
import React from 'react';
import { PricingCard } from './PricingCard';

interface PricingProps {
  pricingData: Array<PricingData>;
}

const Packages = ({ pricingData }: PricingProps): JSX.Element => {
  return (
    <div>
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="sm:flex sm:flex-col sm:align-center">
              <SectionTitle
                accent="indigo"
                feature="Packages"
                title="Packages Offered by Spacejoy"
                description="Pick from one of our three online interior design packages, custom-made keeping your budget, style and interior design needs in mind"
              />
              <div className="relative self-center bg-gray-100 rounded-lg p-0.5 flex">
                <button
                  type="button"
                  className="relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
                >
                  Single Room
                </button>
                <button
                  type="button"
                  className="ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
                >
                  Multi Room
                </button>
              </div>
            </div>
            <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 lg:grid-cols-3">
              {pricingData.map((pricingItem) => {
                return <PricingCard pricingItem={pricingItem} key={pricingItem?.name} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
