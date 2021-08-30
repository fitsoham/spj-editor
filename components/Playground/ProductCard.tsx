import { ExternalLinkIcon } from '@heroicons/react/outline';
import AssetType from '@utils/types/AssetType';
import Image from 'next/image';
import React, { useContext } from 'react';
import { DataBusContext } from 'store';

interface ProductCardInterface {
  product: AssetType;
}

const ProductCard: React.FC<ProductCardInterface> = ({ product }) => {
  const [, setBusData] = useContext(DataBusContext);
  const productThumbnail = product?.renderImages
    ? product?.renderImages[0]?.cdn
    : 'v1623166775/Untitled-1-12_iah06e.jpg';
  return (
    <div
      className="group bg-white p-4 h-full"
      draggable="true"
      onDragStart={() =>
        setBusData({
          ...product,
          dimension: {
            height: product?.height,
            width: product?.width,
          },
          type: 'asset',
        })
      }
    >
      <div className="next-image-fix h-32">
        <Image
          src={`https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_300/${productThumbnail}`}
          width={150}
          height={150}
          alt={product?.name}
          className="object-contain transition transform scale-95 group-hover:scale-100"
          draggable={false}
        />
      </div>
      <small className="text-xs text-gray-500">{product?.retailer}</small>
      <p className="text-sm pb-1 line-clamp-2">{product?.name}</p>
      <div className="flex justify-between items-center">
        <p className="text-sm font-bold">${product.price}</p>
        <a
          target="_blank"
          href="https://www.spacejoy.com/product-view/608ca48a6d61840042c33569"
          className="text-white scale-0 group-hover:text-gray-700 transition transform group-hover:scale-100"
          rel="noreferrer"
        >
          <ExternalLinkIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
