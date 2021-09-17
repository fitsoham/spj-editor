import fetcher from '@utils/fetcher';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { NavSelectContext } from 'store/NavSelect';
import { SelectedIdContext } from './SelectedId';

// ========================= TYPES =========================

export interface PlaygroundAssetType {
  type?: string;
  data?: Array<PlaygroundAssetType>;
  id: string;
  src?: string;
  x?: number;
  y?: number;
  height?: number;
  assetId?: string;
  width?: number;
  depth?: number;
  isDragging?: false;
  stitchedAssetImage?: string;
  count?: number;
  boxSize?: number;
  rotationValue?: string;
  productThumbnail?: string;
  dimension?: {
    height: number;
    width: number;
    depth?: number;
  };
  playgroundHeight?: number;
  playgroundWidth?: number;
  renderImages?: { cdn: string }[];
  price?: number;
  selected?: boolean;
  displayPrice?: string;
  retailer?: string;
  name?: string;
  vertical?: string;
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
  unGroupAssets: () => void;
  updateCurrentVerticalForRecommendation: (selectedId: string) => void;
  currentVerticalForRecommendations: string;
  fetchProductReplacement: (assetId: string, product: PlaygroundAssetType) => Promise<void>;
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
  copyAsset: () => {
    return [];
  },
  unGroupAssets: () => {
    return;
  },
  updateCurrentVerticalForRecommendation: () => {
    return;
  },
  currentVerticalForRecommendations: '',
  fetchProductReplacement: () => {
    return new Promise(() => {
      return;
    });
  },
});

const initData: PlaygroundAssetType[] = [];

const PlaygroundAssetsContextProvider: React.FC = ({ children }) => {
  const [PlaygroundAssets, setPlaygroundAssets] = useState<PlaygroundAssetType[]>(initData);
  const [selectedId, setSelectedId] = useContext(SelectedIdContext);
  const [bgImgUrl, setBg] = useState({ value: '', type: 'bg-img' });
  const [playgroundTotal, setPlaygroundTotal] = useState(0);
  const [currentVerticalForRecommendations, setCurrentProductVertical] = useState('');

  const [, setNav] = useContext(NavSelectContext);

  const [activeCollages, setActiveCollages] = useState([]);

  const updateCurrentVerticalForRecommendation = (selectedId) => {
    // get current Product
    setNav('recommendations');
    const currentProduct = [...PlaygroundAssets].filter((item) => item?.id === selectedId)[0];
    const { vertical = '' } = currentProduct;
    setCurrentProductVertical(vertical);
  };
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
    console.log('updated ----', PlaygroundAssets);
    const formatted = PlaygroundAssets.map((item) => {
      if (item?.type === 'collage') {
        return item?.data;
      }
      return { ...item };
    });
    const mergedArray = [].concat(...formatted);

    if (!mergedArray.length) {
      setPlaygroundTotal(0);
    } else {
      const currentPlaygroundTotal = mergedArray.reduce((acc, currValue) => {
        return parseFloat(acc) + parseFloat(currValue?.price);
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
    const newItem = {
      ...selectedItem,
      id: `in-playground-asset-${PlaygroundAssets.length}-${Math.random()}`,
      x: selectedItem?.x + 100 * Math.random(),
      y: selectedItem?.y + 100 * Math.random(),
    };
    const tmp = [...PlaygroundAssets];
    tmp.splice(selectedIndex + 1, 0, newItem);
    setPlaygroundAssets(tmp);
  };

  const clearBoard = () => {
    setPlaygroundAssets([]), setSelectedId('');
  };

  const fetchProductReplacement = async (assetId, productData) => {
    if (selectedId && selectedId.length) {
      try {
        const { data, statusCode } = await fetcher({ endPoint: `/v1/assets/${assetId}/stitchImages`, method: 'GET' });
        if (statusCode < 300) {
          const { count, boxSize, image: { originalCdn = '' } = {} } = data;
          const updatedAssets = PlaygroundAssets.map((plAsset) => {
            if (selectedId === plAsset?.id) {
              console.log(assetId, plAsset);
              return {
                ...plAsset,
                ...productData,
                assetId: productData?._id,
                stitchedAssetImage: originalCdn,
                boxSize,
                count,
              };
            }
            return { ...plAsset };
          });
          setPlaygroundAssets(updatedAssets);
        } else {
          throw new Error();
        }
      } catch {
        toast('Error while swapping. Please try again ', { autoClose: false });
      }
    } else {
      toast('Please select a product to swap ', { autoClose: false });
    }
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
    let rotationValue = 0;
    PlaygroundAssets.forEach((item) => {
      if (item?.type === 'collage') {
        item?.data?.forEach((collageItem) => {
          if (collageItem?.id === selectedId) {
            rotationValue = parseInt(collageItem?.rotationValue, 10) || 0;
          }
        });
      } else if (item?.id === selectedId) {
        rotationValue = parseInt(item?.rotationValue, 10) || 0;
      }
    });
    return rotationValue;
  };
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState('');
  const [isCollageActive, setCollageActiveStatus] = useState(true);
  const unGroupAssets = () => {
    const formatted = PlaygroundAssets.map((item) => {
      if (item?.type === 'collage') {
        return item?.data;
      }
      return { ...item };
    });
    const mergedArray = [].concat(...formatted);
    setPlaygroundAssets(mergedArray);
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
        copyAsset,
        unGroupAssets,
        updateCurrentVerticalForRecommendation,
        currentVerticalForRecommendations,
        fetchProductReplacement,
      }}
    >
      {children}
    </PlaygroundAssetsContext.Provider>
  );
};

export { PlaygroundAssetsContext, PlaygroundAssetsContextProvider };
