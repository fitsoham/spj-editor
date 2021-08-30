import React, { useContext, useState } from 'react';
import { SelectedIdContext } from './SelectedId';

const PlaygroundAssetsContext = React.createContext([]);

const initData = [];

const PlaygroundAssetsContextProvider: React.FC = ({ children }) => {
  const [PlaygroundAssets, setPlaygroundAssets] = useState(initData);
  const [selectedId, setSelectedId] = useContext(SelectedIdContext);
  const [bgImgUrl, setBgImgUrl] = useState('');
  const [tmpBgImg, setTmpBgImg] = useState('');

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

  const rotateAndSaveRotation = (selectedId, rotationValue) => {
    const updatedAssets = [...PlaygroundAssets].map((asset) => {
      if (asset?.id === selectedId) {
        return { ...asset, rotationValue };
      }
      return { ...asset };
    });
    setPlaygroundAssets(updatedAssets);
  };

  const getRotationValue = (selectedId) => {
    return [...PlaygroundAssets].filter((item) => item?.id === selectedId)[0]?.rotationValue || 0;
  };

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
        { tmpBgImg, bgImgUrl, setTmpBgImg, setBgImgUrl },
        rotateAndSaveRotation,
        getRotationValue,
      ]}
    >
      {children}
    </PlaygroundAssetsContext.Provider>
  );
};

export { PlaygroundAssetsContext, PlaygroundAssetsContextProvider };
