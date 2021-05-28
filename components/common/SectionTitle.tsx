import React from 'react';

const SectionTitle = ({ accent, feature, title, description }) => {
  return (
    <div className="bg-gray-0">
      <div className="container text-center mx-auto pt-36 pb-16">
        <p
          className={`
          ${accent === 'indigo' && 'text-indigo-500'}
          ${accent === 'pink' && 'text-pink-500'}
          ${accent === 'yellow' && 'text-yellow-500'} 
          text-sm mb-2`}
        >
          {feature}
        </p>
        <h2 className="text-gray-900 text-3xl mb-5">{title}</h2>
        <p className="text-gray-500 max-w-4xl mx-auto">{description}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
