import { ExternalLinkIcon } from '@heroicons/react/outline';
import { blurredProduct } from '@public/images/bg-base-64';
import AssetType from '@utils/types/AssetType';
import Image from 'next/image';
import React, { useContext } from 'react';
import { DataBusContext } from 'store';

interface ProductCardInterface {
  product: AssetType;
  isDraggable: boolean;
}

const ProductCard: React.FC<ProductCardInterface> = ({ product, isDraggable }) => {
  const { setBusData } = useContext(DataBusContext);
  const productThumbnail = product?.renderImages
    ? product?.renderImages[0]?.cdn
    : 'v1623166775/Untitled-1-12_iah06e.jpg';
  
  

  return (
    <div
      title={product?.name}
      className="relative group bg-white h-full rounded-sm cursor-move cursor-grab overflow-hidden"
      draggable="true"
      onDragStart={() =>
        setBusData({
          id: product._id,
          data: {
            ...product,
            dimension: {
              height: product?.height,
              width: product?.width,
              depth: product?.depth,
            },
            id: product?._id,
            x: 0,
            y: 0,
            retailer: product?.retailer,
          },
          type: 'asset',
        })
      }
    >
      <div className="rounded-sm absolute inset-x-0 top-0 z-10 bg-gray-100 px-4 py-1 shadow-xs transition transform -translate-y-12 group-hover:translate-y-0">
        <p className="text-center text-xs text-gray-500 leading-4">
          {`${product?.height.toFixed(2).toString()}" x 
          ${product?.width.toFixed(2).toString()}" x 
          ${product?.depth.toFixed(2).toString()}"`}
        </p>
      </div>
      <div className="next-image-fix p-4">
        <Image
          src={`https://res.cloudinary.com/spacejoy/image/upload/${productThumbnail}`}
          width={150}
          height={150}
          alt={product?.name}
          className="object-contain"
          draggable={false}
          blurDataURL={blurredProduct}
          placeholder="blur"
        />
      </div>
      <div className="px-4">
        <small className="text-xs text-gray-500 capitalize">{product?.retailer}</small>
        <p className="text-sm line-clamp-2 h-10">{product?.name}</p>
        <div className="flex justify-between items-center mt-1">
          <p className="font-bold">${product.displayPrice}</p>
          <a
            target="_blank"
            href={`https://www.spacejoy.com/product-view/${product._id}`}
            className="text-gray-500 transition transform translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
            rel="noreferrer"
          >
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
