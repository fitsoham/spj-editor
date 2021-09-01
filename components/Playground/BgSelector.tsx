import Image from 'next/image';
import React, { useContext } from 'react';
import { PlaygroundAssetsContext } from 'store/PlaygroundAssets';
const TIMEOUT = 1500;

const imgList = [
  {
    id: 0,
    url: 'https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_auto,w_1400/v1629790023/spj-v2/DIY/room-bg-2_d2nxon',
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
    url: 'https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,f_auto,q_auto,w_1400/v1630143025/spj-v2/DIY/room-bg/60ff62e76c22210023ffda8f__tru3hl',
  },
];
const BgSelector: React.FC = () => {
  const [, , , , , , , , , bg] = useContext(PlaygroundAssetsContext);
  const { setTmpBgImg, setBgImgUrl } = bg;

  const setBgImg = (img) => {
    setTmpBgImg('');
    setBgImgUrl(img);
  };

  return (
    <div className="overflow-scroll grid grid-cols-3 gap-4">
      {imgList.map((img) => {
        return (
          <div
            onClick={() => setBgImg(img.url)}
            key={img.id}
            className="border-transparent box-border flex-shrink-0 h-36 last:mr-0 relative cursor-pointer"
          >
            <Image src={img.url} layout="fill" alt="name" objectFit="cover" quality={100} className="rounded" />
          </div>
        );
      })}
    </div>
  );
};

export default BgSelector;
