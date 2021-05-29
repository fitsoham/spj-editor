import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="bg-green-900">
      <p className="text-sm py-3 text-white text-center container mx-auto">
        Season Beckons with our freshest sale. Get <strong>20% Off</strong> design packages. Use code:{' '}
        <strong>SPRING20</strong>
      </p>
    </div>
  );
};

export default React.memo(Banner);
