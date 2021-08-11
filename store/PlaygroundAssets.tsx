import React, { useContext, useEffect, useState } from 'react';
import { SelectedIdContext } from './SelectedId';

const PlaygroundAssetsContext = React.createContext([]);

const initData = [];

const PlaygroundAssetsContextProvider: React.FC = ({ children }) => {
  const [PlaygroundAssets, setPlaygroundAssets] = useState(initData);
  const [selectedId, setSelectedId] = useContext(SelectedIdContext);

  useEffect(() => {
    console.log(`object`, PlaygroundAssets);
  }, [PlaygroundAssets]);

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
