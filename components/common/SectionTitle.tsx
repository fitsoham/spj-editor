import React from 'react';

const SectionTitle = ({ accent, feature, title, description }) => {
  return (
    <div className="bg-gray-0">
      <div className="container text-center mx-auto py-10">
        <p className={`text-indigo-500 text-sm mb-2`}>{feature}</p>
        <h2 className="text-gray-900 text-3xl mb-5">{title}</h2>
        <p className="text-gray-500 max-w-5xl mx-auto">{description}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
