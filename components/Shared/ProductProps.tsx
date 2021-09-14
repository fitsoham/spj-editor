import React, { useContext } from 'react';
import { PlaygroundAssetsContext } from 'store/PlaygroundAssets';

const ProductProps: React.FC = () => {
  const { playgroundTotal } = useContext(PlaygroundAssetsContext);
  if (playgroundTotal)
    return (
      <p className="text-sm text-gray-900">
        Name: <strong>${playgroundTotal.toFixed(2)}</strong>{' '}
      </p>
    );
  else return <p className="text-sm text-gray-400 text-center">Product Details</p>;
};

export default ProductProps;
