import React, { useContext, useState } from 'react';
import { SelectedIdContext } from './SelectedId';

const PlaygroundAssetsContext = React.createContext([]);

const initData = [
  {
    x: 470,
    y: 210,
    id: 'in-playground-asset-0',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/painting-3_iierxb.png',
  },
  {
    x: 600,
    y: 210,
    id: 'in-playground-asset-1',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/painting-3_iierxb.png',
  },
  {
    x: 873,
    y: 400,
    id: 'in-playground-asset-2',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_350/v1628044306/spj-v2/DIY/floor-lamp-2_jmpe7t.png',
  },
  {
    x: 200,
    y: 600,
    id: 'in-playground-asset-3',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/side-table-2_v7bhjf.png',
  },
  {
    x: 200,
    y: 450,
    id: 'in-playground-asset-4',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_200/v1628044309/spj-v2/DIY/table-lamp-2_wawq7o.png',
  },
  {
    x: 550,
    y: 550,
    id: 'in-playground-asset-5',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_1200/v1628044308/spj-v2/DIY/sofa-1_skkpax.png',
  },
];

const PlaygroundAssetsContextProvider: React.FC = ({ children }) => {
  const [PlaygroundAssets, setPlaygroundAssets] = useState(initData);
  const [selectedId, setSelectedId] = useContext(SelectedIdContext);

  const getSelectedIndex = (id: string) => {
    for (let i = 0; i <= PlaygroundAssets.length; i++) {
      if (PlaygroundAssets[i]?.id === id) {
        return i;
      }
    }
  };

  const deleteAsset = () => {
    const tmpAssetList = [...PlaygroundAssets];
    tmpAssetList.splice(getSelectedIndex(selectedId), 1);
    setPlaygroundAssets(tmpAssetList);
    setSelectedId('');
  };

  const moveAssetBehind = () => {
    const tmpAssetList = [...PlaygroundAssets];
    const tmpItem = tmpAssetList.splice(getSelectedIndex(selectedId), 1);
    tmpAssetList.splice(getSelectedIndex(selectedId) - 1, 0, tmpItem[0]);
    setPlaygroundAssets(tmpAssetList);
  };

  const moveAssetForward = () => {
    const tmpAssetList = [...PlaygroundAssets];
    const tmpItem = tmpAssetList.splice(getSelectedIndex(selectedId), 1);
    tmpAssetList.splice(getSelectedIndex(selectedId) + 1, 0, tmpItem[0]);
    setPlaygroundAssets(tmpAssetList);
  };

  const moveAssetTop = () => {
    const tmpAssetList = [...PlaygroundAssets];
    const tmpItem = tmpAssetList.splice(getSelectedIndex(selectedId), 1);
    tmpAssetList.push(tmpItem[0]);
    setPlaygroundAssets(tmpAssetList);
  };

  const moveAssetLast = () => {
    const tmpAssetList = [...PlaygroundAssets];
    const tmpItem = tmpAssetList.splice(getSelectedIndex(selectedId), 1);
    tmpAssetList.unshift(tmpItem[0]);
    setPlaygroundAssets(tmpAssetList);
  };

  return (
    <PlaygroundAssetsContext.Provider
      value={[
        PlaygroundAssets,
        setPlaygroundAssets,
        deleteAsset,
        moveAssetBehind,
        moveAssetForward,
        moveAssetTop,
        moveAssetLast,
      ]}
    >
      {children}
    </PlaygroundAssetsContext.Provider>
  );
};

export { PlaygroundAssetsContext, PlaygroundAssetsContextProvider };
