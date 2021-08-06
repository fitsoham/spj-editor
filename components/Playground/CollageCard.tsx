import CollageList from '@mocks/CollageList';
import Image from 'next/image';
import React, { useContext } from 'react';
import { DataBusContext } from 'store';

interface CollageCardInterface {
  collage: {
    src: string;
    id: string;
  };
}

const CollageCard: React.FC<CollageCardInterface> = ({ collage }) => {
  const [, setBusData] = useContext(DataBusContext);
  return (
    <div
      data-cid={collage.id}
      className="group bg-white p-4"
      draggable="true"
      onDragStart={(e) =>
        setBusData({
          type: 'collage',
          id: e.currentTarget?.dataset?.cid,
          data: CollageList.filter((item) => item.id === e.currentTarget?.dataset?.cid)[0].data,
        })
      }
    >
      <Image
        src={collage.src}
        width="300"
        height="300"
        alt="Collage"
        className="object-contain transition transform scale-95 group-hover:scale-100"
        draggable={false}
      />
    </div>
  );
};

export default CollageCard;
