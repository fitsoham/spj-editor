import {
  ColorSwatchIcon,
  RewindIcon,
  SortAscendingIcon,
  SortDescendingIcon,
  TrashIcon,
} from '@heroicons/react/outline';
import React, { useContext } from 'react';
import { Tween } from 'react-gsap';
import { PlaygroundAssetsContext } from 'store/PlaygroundAssets';
import UnitActionButton from './UnitActionButton';

const BottomNav: React.FC = () => {
  const [, , deleteAsset, moveAssetBehind, moveAssetForward, moveAssetTop, moveAssetLast] =
    useContext(PlaygroundAssetsContext);

  return (
    <div className="p-2 bg-white rounded-full shadow-sm mx-auto flex space-x-2">
      <Tween
        from={{ opacity: 0, scale: 0 }}
        to={{ opacity: 1, scale: 1 }}
        duration={1}
        ease="back.out(1.7)"
        stagger={0.5}
      >
        <div>
          <UnitActionButton onClick={moveAssetLast}>
            <RewindIcon className="h-4 w-4 transform -rotate-90" />
          </UnitActionButton>
        </div>
        <div>
          <UnitActionButton onClick={moveAssetBehind}>
            <SortDescendingIcon className="h-4 w-4" />
          </UnitActionButton>
        </div>
        <div>
          <UnitActionButton onClick={moveAssetForward}>
            <SortAscendingIcon className="h-4 w-4" />
          </UnitActionButton>
        </div>
        <div>
          <UnitActionButton onClick={moveAssetTop}>
            <RewindIcon className="h-4 w-4 transform rotate-90" />
          </UnitActionButton>
        </div>
        <div className="border border-r border-dashed" />
        <div>
          <UnitActionButton onClick={deleteAsset}>
            <TrashIcon className="h-4 w-4 hover:text-red-500" />
          </UnitActionButton>
        </div>
        <div className="border border-r border-dashed" />
        <div>
          <UnitActionButton>
            <ColorSwatchIcon className="h-4 w-4" />
          </UnitActionButton>
        </div>
      </Tween>
    </div>
  );
};

export default BottomNav;
