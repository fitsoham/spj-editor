import React, { useContext, useState } from 'react';
import { SelectedIndexContext } from './SelectedIndex';

const PlaygroundAssetsContext = React.createContext([]);

const initData = [
  {
    x: 480,
    y: 210,
    id: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/painting-3_iierxb.png-0',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/painting-3_iierxb.png',
  },
  {
    x: 528,
    y: 210,
    id: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/painting-3_iierxb.png-1',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/painting-3_iierxb.png',
  },
  {
    x: 873,
    y: 400,
    id: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_350/v1628044306/spj-v2/DIY/floor-lamp-2_jmpe7t.png-3',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_350/v1628044306/spj-v2/DIY/floor-lamp-2_jmpe7t.png',
  },
  {
    x: 200,
    y: 600,
    id: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/side-table-2_v7bhjf.png-6',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/side-table-2_v7bhjf.png',
  },
  {
    x: 200,
    y: 450,
    id: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_200/v1628044309/spj-v2/DIY/table-lamp-2_wawq7o.png-8',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_200/v1628044309/spj-v2/DIY/table-lamp-2_wawq7o.png',
  },
  {
    x: 550,
    y: 550,
    id: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_1200/v1628044308/spj-v2/DIY/sofa-1_skkpax.png-5',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_1200/v1628044308/spj-v2/DIY/sofa-1_skkpax.png',
  },
];

const PlaygroundAssetsContextProvider: React.FC = ({ children }) => {
  const [PlaygroundAssets, setPlaygroundAssets] = useState(initData);
  const [selectedIndex] = useContext(SelectedIndexContext);

  const deleteAsset = () => {
    const tmpAssetList = [...PlaygroundAssets];
    tmpAssetList.splice(selectedIndex, 1);
    setPlaygroundAssets(tmpAssetList);
  };

  const moveAssetBehind = () => {
    const tmpAssetList = [...PlaygroundAssets];
    const tmpItem = tmpAssetList.splice(selectedIndex, 1);
    tmpAssetList.splice(selectedIndex - 1, 0, tmpItem[0]);
    setPlaygroundAssets(tmpAssetList);
  };

  const moveAssetForward = () => {
    const tmpAssetList = [...PlaygroundAssets];
    const tmpItem = tmpAssetList.splice(selectedIndex, 1);
    tmpAssetList.splice(selectedIndex + 1, 0, tmpItem[0]);
    setPlaygroundAssets(tmpAssetList);
  };

  return (
    <PlaygroundAssetsContext.Provider
      value={[PlaygroundAssets, setPlaygroundAssets, deleteAsset, moveAssetBehind, moveAssetForward]}
    >
      {children}
    </PlaygroundAssetsContext.Provider>
  );
};

export { PlaygroundAssetsContext, PlaygroundAssetsContextProvider };
