import Image from 'next/image';
import React, { useContext } from 'react';
import { DataBusContext } from 'store';

interface ProductCardInterface {
  product: {
    src: string;
  };
}

const ProductCard: React.FC<ProductCardInterface> = ({ product }) => {
  const [, setSrc] = useContext(DataBusContext);
  return (
    <div
      data-pid={product.src}
      className="group bg-white p-4"
      draggable="true"
      onDragStart={(e) => setSrc(e.currentTarget.dataset.pid)}
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
      <p className="text-sm font-bold">$1999.00</p>
    </div>
  );
};

export default ProductCard;
