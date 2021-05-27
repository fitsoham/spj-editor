import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="bg-red-200 py-3 text-center">
      <p className="text-sm">
        Season Beckons with our freshest sale. Get <strong>20% Off</strong> design packages. Use code:{' '}
        <strong>SPRING20</strong>
      </p>
    </div>
  );
};

export default React.memo(Banner);
