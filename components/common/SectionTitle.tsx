import React from 'react';

const SectionTitle = ({ accent, feature, title, description }) => {
  return (
    <div className="container mx-auto p-28">
      <div className="text-center max-w-4xl mx-auto">
        <p
          className={`
          ${accent === 'indigo' && 'text-indigo-500'}
          ${accent === 'pink' && 'text-pink-500'}
          ${accent === 'yellow' && 'text-yellow-500'} 
          ${accent === 'green' && 'text-green-500'} 
          text-sm mb-2`}
        >
          {feature}
        </p>
        <h2 className="text-gray-900 text-3xl mb-5">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
