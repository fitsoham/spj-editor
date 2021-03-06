import { blurredProduct } from '@public/images/bg-base-64';
import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import React, { useContext } from 'react';
import { DataBusContext } from 'store';
import { CollageType } from 'store/CollageList';

dayjs.extend(RelativeTime);

export interface ProcessedCollageType {
  x: number;
  y: number;
  height: number;
  width: number;
  rotationValue: string;
  id: string;
  stitchedAssetImage: string;
  count: number;
  assetId: string;
}
[];

const CollageCard: React.FC<{ collage: CollageType }> = ({ collage }) => {
  const { setBusData } = useContext(DataBusContext);
  const {
    thumbnail = 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_350/v1628223802/spj-v2/DIY/collage/col-1_jt7bsc.png',
    meta: { view = [] } = {},
    price = 0,
  } = collage;
  const processedView: ProcessedCollageType[] = view.map((object) => {
    const {
      translation: { x: xCoord = 0, y: yCoord = 0 } = {},
      scale: { height: heightCoord = 0, width: widthCoord = 0 },
      playgroundScale: { height: actualHeightCoord = 0, width: actualWidthCoord = 0 } = {},
      rotation = '0',
      id,
      imgSrc,
    } = object;
    return {
      x: xCoord,
      y: yCoord,
      height: heightCoord,
      width: widthCoord,
      assetId: object?.product,
      rotationValue: rotation,
      id,
      stitchedAssetImage: imgSrc,
      count: 12,
      ...(actualWidthCoord && { playgroundWidth: actualWidthCoord }),
      ...(actualHeightCoord && { playgroundHeight: actualHeightCoord }),
      price,
    };
  });
  return (
    <div
      data-cid={collage?._id}
      title={collage?.name}
      className="group bg-white p-4 rounded-sm relative cursor-move"
      draggable="true"
      onDragStart={(e) =>
        setBusData({
          type: 'collage',
          id: e.currentTarget?.dataset?.cid,
          data: processedView,
        })
      }
    >
      {/* <span className="text-xs text-gray-500 absolute capitalize">
        {dayjs(new Date(collage?.createdAt)).fromNow(true)} ago
      </span> */}
      <Image
        src={`https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_auto,w_300/${thumbnail}`}
        width="150"
        height="150"
        alt={collage?.name}
        className="object-contain transition transform scale-95 group-hover:scale-100"
        draggable={false}
        blurDataURL={blurredProduct}
        placeholder="blur"
      />
      <p className="text-sm pb-1 line-clamp-2 h-10 capitalize">{collage?.name}</p>
      <p className="text-sm font-bold">${collage?.price?.toFixed(2) || 0}</p>
    </div>
  );
};

export default CollageCard;
