import { ExternalLinkIcon } from '@heroicons/react/outline';
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
      className="group bg-white p-2 h-full"
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
      <div className="next-image-fix h-32">
        <Image
          src={`https://res.cloudinary.com/spacejoy/image/upload/${productThumbnail}`}
          width={250}
          height={250}
          alt={product?.name}
          className="object-contain transition transform scale-95 group-hover:scale-100"
          draggable={false}
        />
      </div>
      <div className="p-2">
        <small className="text-xs text-gray-500">{product?.retailer}</small>
        <p className="text-sm pb-1 line-clamp-2 h-10">{product?.name}</p>
        <p>
          <small className="text-xs text-gray-500">{`${product?.height.toFixed(2).toString()}'H x ${product?.width.toFixed(2).toString()}'W x ${product?.depth.toFixed(2).toString()}'D`}</small>
        </p>
        <div className="flex justify-between items-center">
          <p className="text-sm font-bold">${product.displayPrice}</p>
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
    </div>
  );
};

export default React.memo(ProductCard);
