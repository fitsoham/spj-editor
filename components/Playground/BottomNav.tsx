import {
  ColorSwatchIcon,
  MinusCircleIcon,
  RewindIcon,
  SortAscendingIcon,
  SortDescendingIcon,
  TrashIcon,
} from '@heroicons/react/outline';
import React, { useContext } from 'react';
import { Tween } from 'react-gsap';
import { PlaygroundAssetsContext } from 'store/PlaygroundAssets';
import { SelectedIdContext } from 'store/SelectedId';
import UnitActionButton from './UnitActionButton';

const BottomNav: React.FC = () => {
  const [, , deleteAsset, moveAssetBehind, moveAssetForward, moveAssetTop, moveAssetLast, clearBoard] =
    useContext(PlaygroundAssetsContext);

  const [selectedId] = useContext(SelectedIdContext);

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
          <UnitActionButton onClick={moveAssetLast} disabled={selectedId === ''}>
            <RewindIcon className="h-4 w-4 transform -rotate-90" />
          </UnitActionButton>
        </div>
        <div>
          <UnitActionButton onClick={moveAssetBehind} disabled={selectedId === ''}>
            <SortDescendingIcon className="h-4 w-4" />
          </UnitActionButton>
        </div>
        <div>
          <UnitActionButton onClick={moveAssetForward} disabled={selectedId === ''}>
            <SortAscendingIcon className="h-4 w-4" />
          </UnitActionButton>
        </div>
        <div>
          <UnitActionButton onClick={moveAssetTop} disabled={selectedId === ''}>
            <RewindIcon className="h-4 w-4 transform rotate-90" />
          </UnitActionButton>
        </div>
        <div className="border border-r border-dashed" />
        <div>
          <UnitActionButton onClick={deleteAsset} disabled={selectedId === ''}>
            <MinusCircleIcon className="h-4 w-4" />
          </UnitActionButton>
        </div>
        <div className="border border-r border-dashed" />
        <div>
          <UnitActionButton>
            <ColorSwatchIcon className="h-4 w-4" />
          </UnitActionButton>
        </div>
        <div className="border border-r border-dashed" />
        <div>
          <UnitActionButton onClick={clearBoard}>
            <TrashIcon className="h-4 w-4" />
          </UnitActionButton>
        </div>
      </Tween>
    </div>
  );
};

export default BottomNav;
