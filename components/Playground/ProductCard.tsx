import { ExternalLinkIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React, { useContext } from 'react';
import { DataBusContext } from 'store';

interface ProductCardInterface {
  product: {
    src: string;
    price: string;
  };
}

const ProductCard: React.FC<ProductCardInterface> = ({ product }) => {
  const [, setBusData] = useContext(DataBusContext);
  return (
    <div
      data-pid={product.src}
      className="group bg-white p-4"
      draggable="true"
      onDragStart={(e) =>
        setBusData({
          type: 'asset',
          src: e.currentTarget?.dataset?.pid,
        })
      }
    >
      <Image
        src={product.src}
        width="300"
        height="300"
        alt="product"
        className="object-contain transition transform scale-95 group-hover:scale-100"
        draggable={false}
      />
      <small className="text-xs text-gray-500">Article</small>
      <p className="text-sm pb-1">Livia Natural Lounge Chair</p>
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

export default ProductCard;
