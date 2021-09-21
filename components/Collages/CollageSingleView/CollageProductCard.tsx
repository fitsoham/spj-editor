import { AssetType } from '@components/Collages/AssetType';
import { cloudinary } from '@utils/config';
import Image from 'next/image';
import React from 'react';

const CollageProductCard: React.FC<{ productData: AssetType }> = ({ productData }) => {
  return (
    <div className="border rounded-2xl ">
      <div className="relative aspect-w-1 aspect-h-1 ">
        <Image
          src={`${cloudinary.baseDeliveryURL}/ar_1,c_pad/${productData?.cdn}`}
          className="mx-auto my-auto rounded-t-2xl"
          alt="name"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="p-4 flex flex-col gap-1">
        <div className="line-clamp-1 text-sm">{productData?.name}</div>
        <div className="line-clamp-1 text-xs text-gray-400 capitalize">{productData?.retailer?.name}</div>
        <div className="line-clamp-1 text-xs text-gray-400">
          {productData?.dimension?.width.toFixed(2)}&apos; W X {productData?.dimension?.depth.toFixed(2)}&apos; D X{' '}
          {productData?.dimension?.height.toFixed(2)}&apos; H
        </div>
        <div className="line-clamp-1 text-sm">${productData?.price?.toFixed(2)}</div>

        <div className="">
          <span>
            <a
              className=" inline-block bg-gradient-to-br from-spj-red hover:shadow-lg focus:shadow-lg active:shadow-lg transition-shadow to-spj-yellow text-white text-sm text-center py-2 px-4  rounded-lg   hover:bg-gray-700"
              href={`https://www.spacejoy.com/product-view/${productData?._id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop now
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollageProductCard;
