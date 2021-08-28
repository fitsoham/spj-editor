import Image from 'next/image';
import React, { useContext, useRef } from 'react';
import { PlaygroundAssetsContext } from 'store/PlaygroundAssets';
const TIMEOUT = 1500;



const imgList = [
  {
    id:1,
    url: 'https://res.cloudinary.com/spacejoy/image/upload/v1630143027/spj-v2/DIY/room-bg/Room_12_m3q3af.jpg',
  },
  {
    id:2,
    url: 'https://res.cloudinary.com/spacejoy/image/upload/v1630143027/spj-v2/DIY/room-bg/Room_04_dh5f1a.jpg',
  },
  {
    id:3,
    url: 'https://res.cloudinary.com/spacejoy/image/upload/v1630143026/spj-v2/DIY/room-bg/61172a7841d45f00238f145f__xnx3jc.jpg',
  },
  {
    id:4,
    url: 'https://res.cloudinary.com/spacejoy/image/upload/v1630143026/spj-v2/DIY/room-bg/61159ca841d45f00238e5355__imbmyk.jpg',
  },
  {
    id:5,
    url: 'https://res.cloudinary.com/spacejoy/image/upload/v1630143026/spj-v2/DIY/room-bg/611baa309d92ba0028e0173d__khy5ii.jpg',
  },
  {
    id:6,
    url: 'https://res.cloudinary.com/spacejoy/image/upload/v1630143025/spj-v2/DIY/room-bg/60ff62e76c22210023ffda8f__tru3hl.jpg',
  },
]
const Index = () => {
    const timer = useRef(null);
    const [, , , , , , , , , bg ] = useContext(PlaygroundAssetsContext);
    const {setTmpBgImg,setBgImgUrl} = bg;
    
    const updateBgImage = (imgUrl) => {
      timer.current = setTimeout(() => {
        setTmpBgImg(imgUrl);
      }, TIMEOUT);
    }
    
    const resetbgImage = () => {
      clearTimeout(timer?.current);
    }
    const setBgImg = (img) => {
      setTmpBgImg('');
      setBgImgUrl(img);
    } 


    return (
        <div className="w-[1000px] bg-white shadow-lg py-4 rounded-lg">
          <h2 className="text-2xl mt-3 px-4 mb-2">Pick a room</h2>
            <div className="overflow-scroll flex">
            {
              imgList.map((img) => {
                return (
                  <div onClick={() => setBgImg(img.url)} onMouseEnter={() => updateBgImage(img?.url)} onMouseLeave={resetbgImage} key={img.id} className="border-transparent box-border flex-shrink-0 h-36 w-64 mx-4 relative cursor-pointer">
                    <Image src={img.url} layout="fill" alt="name" objectFit="cover" quality={100}/>
                  </div>  
                )
              })
            }
            </div>
        </div>
    )
}


export default Index;