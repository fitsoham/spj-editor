import Image from 'next/image';
import React, { useContext } from 'react';
import { DataBusContext } from 'store';
import { CollageType } from 'store/CollageList';

export interface ProcessedCollageType {
  x: number;
  y: number;
  height: number;
  width: number;
  rotationValue: string;
  id: string;
  stitchedAssetImage: string;
  count: number;
}
[];

const CollageCard: React.FC<{ collage: CollageType }> = ({ collage }) => {
  const { setBusData } = useContext(DataBusContext);
  const {
    thumbnail = 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_350/v1628223802/spj-v2/DIY/collage/col-1_jt7bsc.png',
    meta: { view = [] } = {},
  } = collage;
  const processedView: ProcessedCollageType[] = view.map((object) => {
    const {
      translation: {
        x: { $numberDecimal: xCoord } = { $numberDecimal: '' },
        y: { $numberDecimal: yCoord } = { $numberDecimal: '' },
      } = {},
      scale: {
        height: { $numberDecimal: heightCoord = '' } ,
        width: { $numberDecimal: widthCoord = '' } ,
      },
      playgroundScale: {
        height: { $numberDecimal: actualHeightCoord = '' } = {},
        width: { $numberDecimal: actualWidthCoord = '' } = {},
      } = {},
      rotation = '0',
      id,
      imgSrc,
    } = object;
    console.log(object);
    return {
      x: parseFloat(xCoord),
      y: parseFloat(yCoord),
      height: parseFloat(heightCoord),
      width: parseFloat(widthCoord),
      rotationValue: rotation,
      id,
      stitchedAssetImage: imgSrc,
      count: 12,
      ...(actualWidthCoord && {playgroundWidth: parseFloat(actualWidthCoord)}),
      ...(actualHeightCoord && {playgroundHeight: parseFloat(actualHeightCoord)}),
    };
  });
  console.log('processed view', processedView);
  return (
    <div
      data-cid={collage?._id}
      className="group bg-white p-4"
      draggable="true"
      onDragStart={(e) =>
        setBusData({
          type: 'collage',
          id: e.currentTarget?.dataset?.cid,
          data: processedView,
        })
      }
    >
      <Image
        src={`https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_1000/${thumbnail}`}
        width="500"
        height="500"
        alt="Collage"
        className="object-contain transition transform scale-95 group-hover:scale-100"
        draggable={false}
      />
    </div>
  );
};

export default CollageCard;
