import Image from 'next/image';
import React, { useContext } from 'react';
import { PlaygroundAssetsContext } from 'store/PlaygroundAssets';

const imgList = [
  {
    id: 0,
    url: 'https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_auto,w_1400/v1629790023/spj-v2/DIY/room-bg/room-bg-2_d2nxon',
  },
  {
    id: 1,
    url: 'https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_auto,w_1400/v1630143027/spj-v2/DIY/room-bg/Room_12_m3q3af',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_auto,w_1400/v1630143027/spj-v2/DIY/room-bg/Room_04_dh5f1a',
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_auto,w_1400/v1630143026/spj-v2/DIY/room-bg/61172a7841d45f00238f145f__xnx3jc',
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_auto,w_1400/v1630143026/spj-v2/DIY/room-bg/61159ca841d45f00238e5355__imbmyk',
  },
  {
    id: 5,
    url: 'https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_auto,w_1400/v1630143026/spj-v2/DIY/room-bg/611baa309d92ba0028e0173d__khy5ii',
  },
  {
    id: 6,
    url: 'https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_auto,w_1400/v1630994030/spj-v2/DIY/room-bg/bg-10_kvtnod',
  },
  {
    id: 7,
    url: 'https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_auto,w_1400/v1630143026/spj-v2/DIY/room-bg/611baa309d92ba0028e0173d__khy5ii',
  },
  {
    id: 8,
    url: 'https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_auto,w_1400/v1630994029/spj-v2/DIY/room-bg/bg-2_wesuyn',
  },
  {
    id: 9,
    url: 'https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_auto,w_1400/v1630994028/spj-v2/DIY/room-bg/bg-1_drkxje',
  },
  {
    id: 10,
    url: 'https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_auto,w_1400/v1630143025/spj-v2/DIY/room-bg/610d7cc8884ac10023b4f60e__sog7mq',
  },
];

const colorList = [
  {
    id: 0,
    colorHex: 'transparent',
  },
  {
    id: 1,
    colorHex: 'rgb(235, 241, 255)',
  },
  {
    id: 2,
    colorHex: 'rgb(246, 240, 255)',
  },
  {
    id: 3,
    colorHex: 'rgb(255, 254, 245)',
  },
  {
    id: 4,
    colorHex: 'rgb(255, 240, 253)',
  },
  {
    id: 5,
    colorHex: 'rgb(235, 255, 246)',
  },
  {
    id: 6,
    colorHex: 'rgb(255, 252, 230)',
  },
  {
    id: 7,
    colorHex: 'rgb(255, 241, 240)',
  },
  {
    id: 8,
    colorHex: 'rgb(235, 255, 248)',
  },
  {
    id: 9,
    colorHex: 'rgb(247, 235, 255)',
  },
  {
    id: 10,
    colorHex: 'rgb(242, 253, 255)',
  },
];

const BgSelector: React.FC = () => {
  const { bg } = useContext(PlaygroundAssetsContext);
  const { setBgImgUrl } = bg;

  const setBg = (valueString, type) => {
    setBgImgUrl(valueString, type);
  };

  return (
    <div className="grid-cols-1 gap-8">
      <div>
        <h2 className="mb-1 font-normal">Rooms</h2>
        <div className="overflow-scroll grid grid-cols-4 gap-4">
          {imgList.map((img) => {
            return (
              <div
                onClick={() => setBg(img.url, 'bg-img')}
                key={img.id}
                className="border-transparent box-border flex-shrink-0 h-24 last:mr-0 relative cursor-pointer"
              >
                <Image src={img.url} layout="fill" alt="name" objectFit="cover" quality={100} className="rounded" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="mb-1 font-normal">Colors</h2>
        <div className="overflow-scroll grid grid-cols-8 gap-4">
          {colorList.map((item) => {
            return (
              <div
                key={item?.id}
                onClick={() => setBg(item?.colorHex, 'bg-color')}
                className="border-transparent box-border flex-shrink-0 h-14 last:mr-0 relative cursor-pointer rounded border border-gray-200"
                style={{ backgroundColor: `${item?.colorHex}` }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BgSelector;
