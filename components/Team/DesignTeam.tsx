import SectionTitle from '@components/Shared/SectionTitle';
import Image from 'next/image';
import React from 'react';
import DesignTeamData from '../../mocks/DesignTeamData';

const DesignTeam: React.FC = () => (
  <div className="bg-white">
    <div className="container mx-auto px-4">
      <SectionTitle
        accent="indigo"
        feature="The People"
        title="Meet our growing team of interior designers"
        description="Spacejoy's interior designers are handpicked from across the country. While our team is a diverse mix of professionals with varied interests, there is a common thread - They are all passionate about interior and design and love transforming spaces. Our designers continue to design homes across the country to bring our clients' vision to life through mindful and personalized designs. Start a project and allow them to work their magic in your actual space."
      />
    </div>
    <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-8 sm:space-y-12">
        <ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
          {DesignTeamData.map((designer, index) => (
            <li key={`${designer.firstName}-${index}`}>
              <div className="">
                <Image
                  className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24 object-cover filter contrast-125"
                  src={`https://res.cloudinary.com/spacejoy/${designer.icon}`}
                  alt={designer.firstName}
                  height={'180'}
                  width={'180'}
                />
                <div className="text-xs lg:text-sm">
                  <h3 className="font-medium">
                    {designer.firstName} {designer.lastName}
                  </h3>
                  <p className="text-indigo-400">Design Expert</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default DesignTeam;
