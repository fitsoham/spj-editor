import Image from 'next/image';
import React, { useContext } from 'react';
import { PlaygroundAssetsContext } from 'store/PlaygroundAssets';

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
  
];

const colorList = [{
  id: 1, 
  colorHex: '#dc143c'
}, {
  id: 2, 
  colorHex: '#0690A6'
}, {
  id: 3, 
  colorHex: '#EBEE05 '
}, {
  id: 4, 
  colorHex: '#000000'
}, {
  id: 5, 
  colorHex: '#35D3C9'
}, {
  id: 6, 
  colorHex: '#35D362'
}]


const BgSelector: React.FC = () => {
  const { bg } = useContext(PlaygroundAssetsContext);
  const { setBgImgUrl } = bg;

  const setBg = (valueString, type) => {
    setBgImgUrl(valueString, type);
  };

  return (
    <div className="grid-cols-1 gap-8">
      <div>
        <h2>Rooms</h2>
        <div className="overflow-scroll grid grid-cols-3 gap-4">
          {imgList.map((img) => {
            return (
              <div
                onClick={() => setBg(img.url, 'bg-img')}
                key={img.id}
                className="border-transparent box-border flex-shrink-0 h-36 last:mr-0 relative cursor-pointer"
              >
                <Image src={img.url} layout="fill" alt="name" objectFit="cover" quality={100} className="rounded" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-4">
        <h2>Colors</h2>
        <div className="overflow-scroll grid grid-cols-4 gap-4">
          {
            colorList.map((item) => {
              return (
                <div
                  key={item?.id}
                  onClick={() => setBg(item?.colorHex, 'bg-color')}
                  className="border-transparent box-border flex-shrink-0 h-24 last:mr-0 relative cursor-pointer rounded-md"
                  style={{backgroundColor: `${item?.colorHex}`}}
                />
              )
            })
          }
        </div>
      </div>
      
    </div>
  );
};

export default BgSelector;
