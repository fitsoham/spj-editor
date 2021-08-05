import React, { useContext, useState } from 'react';
import { SelectedIdContext } from './SelectedId';

const PlaygroundAssetsContext = React.createContext([]);

const initData = [
  {
    x: 131.37072919940172,
    y: 518.8690926283336,
    id: 'in-playground-asset-0',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/painting-2_jmqbfd.png',
    width: 98.3339173871015,
    height: 131.76744929871597,
  },
  {
    x: 234.86367462616448,
    y: 517.9773239990608,
    id: 'in-playground-asset-1',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/painting-2_jmqbfd.png',
    width: 99.0399702929451,
    height: 132.71356019254642,
  },
  {
    x: 338.88036223984517,
    y: 517.9796854013917,
    id: 'in-playground-asset-2',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_250/v1628044308/spj-v2/DIY/painting-2_jmqbfd.png',
    width: 98.56385907262307,
    height: 132.0755711573149,
  },
  {
    x: 903,
    y: 264,
    id: 'in-playground-asset-3',
    src: 'https://res.cloudinary.com/spacejoy/image/upload/c_scale,w_350/v1628044306/spj-v2/DIY/floor-lamp-1_thurjj.png',
    width: 175,
    height: 380,
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
