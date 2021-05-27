import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="py-3 bg-green-900 text-center">
      <p className="text-sm text-white">
        Season Beckons with our freshest sale. Get <strong>20% Off</strong> design packages. Use code:{' '}
        <strong>SPRING20</strong>
      </p>
    </div>
  );
};

export default React.memo(Banner);
