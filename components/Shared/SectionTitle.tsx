import React from 'react';

const SectionTitle = ({
  accent,
  feature,
  title,
  description,
}: {
  accent: string;
  feature?: string;
  title: string;
  description?: string;
}): JSX.Element => {
  return (
    <div className="container mx-auto p-28">
      <div className="text-center max-w-4xl mx-auto">
        {feature && (
          <p
            className={`
          ${accent === 'indigo' && 'text-indigo-600'}
          ${accent === 'pink' && 'text-pink-600'}
          ${accent === 'yellow' && 'text-yellow-600'} 
          ${accent === 'green' && 'text-green-500'} 
          ${accent === 'red' && 'text-red-600'} 
          font-semibold tracking-wide uppercase mb-2`}
          >
            {feature}
          </p>
        )}
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight tracking-normal text-gray-900 sm:text-4xl mb-5">
          {title}
        </h2>
        {description && <p className="text-gray-500">{description}</p>}
      </div>
    </div>
  );
};

export default SectionTitle;
