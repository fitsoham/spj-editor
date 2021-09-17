import { ExternalLinkIcon } from '@heroicons/react/outline';
import React, { useContext, useEffect, useState } from 'react';
import { PlaygroundAssetsContext } from 'store/PlaygroundAssets';
import { SelectedIdContext } from 'store/SelectedId';

const ProductProps: React.FC = () => {
  const { currentlySelectedProduct } = useContext(PlaygroundAssetsContext);
  const [selectedId] = useContext(SelectedIdContext);
  const [currentProduct, setCurrentProduct] = useState(null);
  useEffect(() => {
    const product = currentlySelectedProduct(selectedId);
    setCurrentProduct(product);
  }, [selectedId, currentlySelectedProduct]);
  console.log(currentProduct);
  return (
    <p>
      {currentProduct ? (
        <p className="flex justify-between items-center">
          <span className="truncate bg-gray-300 py-1 px-2 rounded-md"> {currentProduct.name}</span>
          <span className="ml-4 bg-gray-300 py-1 px-2 rounded-md"> ${currentProduct.displayPrice}</span>
          <span className="ml-4 bg-gray-300 py-1 px-2 rounded-md">
            {' '}
            {`H: ${currentProduct?.height?.toFixed(2).toString()}" x 
          W: ${currentProduct?.width?.toFixed(2).toString()}" x 
          D: ${currentProduct?.depth?.toFixed(2).toString()}"`}
          </span>
          <span className="ml-4 bg-gray-300 py-1 px-2 rounded-md capitalize">{currentProduct?.retailer}</span>
          <a
            target="_blank"
            href={`https://www.spacejoy.com/product-view/${currentProduct?.assetId}`}
            className="text-gray-500 transition transform  group-hover:opacity-100 group-hover:translate-y-0 ml-4"
            rel="noreferrer"
          >
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
        </p>
      ) : (
        <p className="text-sm text-gray-400 text-center">Product Details</p>
      )}
    </p>
  );
};

export default ProductProps;
