import { ExternalLinkIcon } from '@heroicons/react/outline';
import { blurredProduct } from '@public/images/bg-base-64';
import AssetType from '@utils/types/AssetType';
import Image from 'next/image';
import React, { useContext } from 'react';
import { DataBusContext } from 'store';

interface ProductCardInterface {
  product: AssetType;
}

const ProductCard: React.FC<ProductCardInterface> = ({ product }) => {
  const { setBusData } = useContext(DataBusContext);
  const productThumbnail = product?.renderImages
    ? product?.renderImages[0]?.cdn
    : 'v1623166775/Untitled-1-12_iah06e.jpg';
  return (
    <div
      title={product?.name}
      className="group bg-white h-full rounded-sm"
      draggable="true"
      onDragStart={() =>
        setBusData({
          id: product._id,
          data: {
            ...product,
            dimension: {
              height: product?.height,
              width: product?.width,
            },
            id: product?._id,
            x: 0,
            y: 0,
          },
          type: 'asset',
        })
      }
    >
      <div className="next-image-fix p-4">
        <Image
          src={`https://res.cloudinary.com/spacejoy/image/upload/${productThumbnail}`}
          width={150}
          height={150}
          alt={product?.name}
          className="object-contain transition transform scale-95 group-hover:scale-100"
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
            className="text-white scale-0 group-hover:text-gray-700 transition transform group-hover:scale-100"
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
