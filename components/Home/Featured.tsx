import React from 'react';
import SectionTitle from '../common/SectionTitle';

const Featured = () => {
  return (
    <div className="py-10">
      <SectionTitle
        accent="indigo"
        feature="Media"
        title="We are proud to be Featured in"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reprehenderit reiciendis officia vero ab nostrum
      asperiores aperiam? Illo vitae recusandae, incidunt quas sapiente quo maxime impedit cum, hic odio temporibus!"
      />
      <div className="bg-gray-100 h-64 flex items-center justify-center">
        <div className="shadow-sm bg-white h-32 w-32 rounded-xl flex items-center justify-center mx-5">s</div>
        <div className="shadow-sm bg-white h-32 w-32 rounded-xl flex items-center justify-center mx-5">s</div>
        <div className="shadow-sm bg-white h-32 w-32 rounded-xl flex items-center justify-center mx-5">s</div>
        <div className="shadow-sm bg-white h-32 w-32 rounded-xl flex items-center justify-center mx-5">s</div>
        <div className="shadow-sm bg-white h-32 w-32 rounded-xl flex items-center justify-center mx-5">s</div>
      </div>
    </div>
  );
};

export default Featured;
