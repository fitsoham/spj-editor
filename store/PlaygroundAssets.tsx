import React, { useContext, useState } from 'react';
import { SelectedIdContext } from './SelectedId';

// ========================= TYPES =========================

export interface PlaygroundAssetType {
  id: string;
  src?: string;
  x: number;
  y: number;
  height?: number;
  assetId?: string;
  width?: number;
  isDragging?: false;
  stitchedAssetImage?: string;
  count?: number;
  boxSize?: number;
  rotationValue?: string;
  productThumbnail?: string;
  dimension?: {
    height: number;
    width: number;
  };
  renderImages?: { cdn: string }[];
}

interface PlaygroundAssetContextType {
  PlaygroundAssets: PlaygroundAssetType[];
  setPlaygroundAssets: React.Dispatch<React.SetStateAction<PlaygroundAssetType[]>>;
  deleteAsset: () => void;
  updateAsset: (data: PlaygroundAssetType) => void;
  moveAssetBehind: () => void;
  moveAssetForward: () => void;
  moveAssetTop: () => void;
  moveAssetLast: () => void;
  clearBoard: () => void;
  bg: {
    tmpBgImg: string;
    bgImgUrl: string;
    setTmpBgImg: React.Dispatch<React.SetStateAction<string>>;
    setBgImgUrl: React.Dispatch<React.SetStateAction<string>>;
  };
  rotateAndSaveRotation: (selectedId: string, rotationValue: string) => void;
  getRotationValue: (selectedId: string) => number;
}

// ========================= TYPES =========================

const PlaygroundAssetsContext = React.createContext<PlaygroundAssetContextType>({
  PlaygroundAssets: [],
  setPlaygroundAssets: () => {
    return;
  },
  deleteAsset: () => {
    return;
  },
  updateAsset: () => {
    return;
  },
  moveAssetBehind: () => {
    return;
  },
  moveAssetForward: () => {
    return;
  },
  moveAssetTop: () => {
    return;
  },
  moveAssetLast: () => {
    return;
  },
  clearBoard: () => {
    return;
  },
  bg: {
    tmpBgImg: '',
    bgImgUrl: '',
    setTmpBgImg: () => {
      return;
    },
    setBgImgUrl: () => {
      return;
    },
  },
  rotateAndSaveRotation: () => {
    return;
  },
  getRotationValue: () => {
    return -1;
  },
});

const initData: PlaygroundAssetType[] = [];

const PlaygroundAssetsContextProvider: React.FC = ({ children }) => {
  const [PlaygroundAssets, setPlaygroundAssets] = useState<PlaygroundAssetType[]>(initData);
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

  const updateAsset = (data: PlaygroundAssetType) => {
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

  const rotateAndSaveRotation = (selectedId: string, rotationValue: string) => {
    const updatedAssets = [...PlaygroundAssets].map((asset) => {
      if (asset?.id === selectedId) {
        return { ...asset, rotationValue };
      }
      return { ...asset };
    });
    setPlaygroundAssets(updatedAssets);
  };

  const getRotationValue = (selectedId) => {
    return parseInt([...PlaygroundAssets].filter((item) => item?.id === selectedId)[0]?.rotationValue, 10) || 0;
  };

  return (
    <PlaygroundAssetsContext.Provider
      value={{
        PlaygroundAssets,
        setPlaygroundAssets,
        deleteAsset,
        updateAsset,
        moveAssetBehind,
        moveAssetForward,
        moveAssetTop,
        moveAssetLast,
        clearBoard,
        bg: { tmpBgImg, bgImgUrl, setTmpBgImg, setBgImgUrl },
        rotateAndSaveRotation,
        getRotationValue,
      }}
    >
      {children}
    </PlaygroundAssetsContext.Provider>
  );
};

export { PlaygroundAssetsContext, PlaygroundAssetsContextProvider };
