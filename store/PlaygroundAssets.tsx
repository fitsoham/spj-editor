import React, { useContext, useState } from 'react';
import { SelectedIdContext } from './SelectedId';

const PlaygroundAssetsContext = React.createContext([]);

const initData = [
  {
    x: 914,
    y: 363,
    id: 'in-playground-asset-5',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_350/v1628044306/spj-v2/DIY/floor-lamp-2_jmpe7t.png',
    width: 175,
    height: 432,
    price: 15.0,
  },
  {
    x: 292,
    y: 524,
    id: 'in-playground-asset-1',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/side-table-2_v7bhjf.png',
    width: 125,
    height: 176,
    price: 15.0,
  },
  {
    x: 615,
    y: 471,
    id: 'in-playground-asset-0',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_1200/v1628044308/spj-v2/DIY/sofa-1_skkpax.png',
    width: 600,
    height: 213.5,
    price: 15.0,
  },
  {
    x: 296.6214944085189,
    y: 379.7241106063118,
    id: 'in-playground-asset-2',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_200/v1628044309/spj-v2/DIY/table-lamp-2_wawq7o.png',
    width: 96.75701118296212,
    height: 162.5517787873764,
    price: 15.0,
  },
  {
    x: 371,
    y: 132,
    id: 'in-playground-asset-3',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/painting-2_jmqbfd.png',
  },
  {
    x: 503,
    y: 132,
    id: 'in-playground-asset-4',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/painting-2_jmqbfd.png',
    width: 125,
    height: 167.5,
    price: 15.0,
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

  const updateAsset = (data) => {
    const tmpAssetList = [...PlaygroundAssets];
    tmpAssetList.splice(getSelectedIndex(data?.id), 1);
    tmpAssetList.splice(getSelectedIndex(selectedId) - 1, 0, data);
    setPlaygroundAssets(tmpAssetList);
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

  const clearBoard = () => setPlaygroundAssets([]);

  return (
    <PlaygroundAssetsContext.Provider
      value={[
        PlaygroundAssets,
        setPlaygroundAssets,
        deleteAsset,
        updateAsset,
        moveAssetBehind,
        moveAssetForward,
        moveAssetTop,
        moveAssetLast,
        clearBoard,
      ]}
    >
      {children}
    </PlaygroundAssetsContext.Provider>
  );
};

export { PlaygroundAssetsContext, PlaygroundAssetsContextProvider };
