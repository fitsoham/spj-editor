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
  playgroundHeight?: number;
  playgroundWidth?: number;
  renderImages?: { cdn: string }[];
  price: number;
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
    bgImgUrl: Record<string, string>;
    setBgImgUrl: (value: string, type: string) => void;
  };
  rotateAndSaveRotation: (selectedId: string, rotationValue: string) => void;
  getRotationValue: (selectedId: string) => number;
  isCollageActive: boolean;
  selectedCategoryId: string;
  setSelectedCategoryId: React.Dispatch<React.SetStateAction<string>>;
  selectedSubCategoryId: string;
  setSelectedSubCategoryId: React.Dispatch<React.SetStateAction<string>>;
  setCollageActiveStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setPlaygroundTotal: React.Dispatch<React.SetStateAction<number>>;
  playgroundTotal: number;
  activeCollages: Array<string>;
  setActiveCollages: React.Dispatch<React.SetStateAction<Array<string>>>;
  copyAsset: (selectedId: string) => void;
}

// ========================= TYPES =========================

const PlaygroundAssetsContext = React.createContext<PlaygroundAssetContextType>({
  activeCollages: [''],
  setActiveCollages: () => {
    return;
  },
  playgroundTotal: 0,
  setPlaygroundTotal: () => {
    return;
  },
  setCollageActiveStatus: () => {
    return;
  },
  setSelectedSubCategoryId: () => {
    return;
  },
  selectedSubCategoryId: '',
  setSelectedCategoryId: () => {
    return;
  },
  selectedCategoryId: '',
  isCollageActive: true,
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
    bgImgUrl: {},
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
  copyAsset: () => { return []}
});

const initData: PlaygroundAssetType[] = [];

const PlaygroundAssetsContextProvider: React.FC = ({ children }) => {
  const [PlaygroundAssets, setPlaygroundAssets] = useState<PlaygroundAssetType[]>(initData);
  const [selectedId, setSelectedId] = useContext(SelectedIdContext);
  const [bgImgUrl, setBg] = useState({ value: '', type: 'bg-img' });
  const [playgroundTotal, setPlaygroundTotal] = useState(0);

  const [activeCollages, setActiveCollages] = useState([]);

  const setBgImgUrl = (value, type) => {
    setBg({ value, type });
  };

  const getSelectedIndex = (id: string) => {
    for (let i = 0; i <= PlaygroundAssets.length; i++) {
      if (PlaygroundAssets[i]?.id === id) {
        return i;
      }
    }
  };
  React.useEffect(() => {
    console.log(PlaygroundAssets);
    if (!PlaygroundAssets.length) {
      setPlaygroundTotal(0);
    } else {
      const currentPlaygroundTotal = PlaygroundAssets.reduce((acc, currValue) => {
        return acc + currValue?.price;
      }, 0);
      setPlaygroundTotal(currentPlaygroundTotal);
    }
  }, [PlaygroundAssets]);

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

  const copyAsset = (selectedId) => { 
    const selectedIndex = getSelectedIndex(selectedId);
    const selectedItem = [...PlaygroundAssets].filter((item) => item?.id === selectedId)[0];
    const newItem = {...selectedItem, id: `in-playground-asset-${PlaygroundAssets.length}-${Math.random()}`, x: selectedItem?.x + 200, rotationValue:"0"};
    const tmp = [...PlaygroundAssets];
    tmp.splice(selectedIndex + 1, 1, newItem);
    setPlaygroundAssets(tmp);
  }


  const clearBoard = () => {
    setPlaygroundAssets([]), setSelectedId('');
  };

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
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState('');
  const [isCollageActive, setCollageActiveStatus] = useState(true);
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
        bg: { bgImgUrl, setBgImgUrl },
        rotateAndSaveRotation,
        getRotationValue,
        selectedCategoryId,
        setSelectedCategoryId,
        selectedSubCategoryId,
        setSelectedSubCategoryId,
        isCollageActive,
        setCollageActiveStatus,
        playgroundTotal,
        setPlaygroundTotal,
        activeCollages,
        setActiveCollages,
        copyAsset
      }}
    >
      {children}
    </PlaygroundAssetsContext.Provider>
  );
};

export { PlaygroundAssetsContext, PlaygroundAssetsContextProvider };
