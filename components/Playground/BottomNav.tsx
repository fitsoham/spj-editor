import {
  ColorSwatchIcon,
  MinusCircleIcon,
  RewindIcon,
  SortAscendingIcon,
  SortDescendingIcon,
  TrashIcon,
} from '@heroicons/react/outline';
import React, { useContext, useState } from 'react';
import { Tween } from 'react-gsap';
import { PlaygroundAssetsContext } from 'store/PlaygroundAssets';
import { SelectedIdContext } from 'store/SelectedId';
import UnitActionButton from './UnitActionButton';

const FullRotationAngle = 360;

const BottomNav: React.FC = () => {
  const [, , deleteAsset, , moveAssetBehind, moveAssetForward, moveAssetTop, moveAssetLast, clearBoard] =
    useContext(PlaygroundAssetsContext);

  const [selectedId] = useContext(SelectedIdContext);

  const [rotationValue, setRotationValue] = useState(FullRotationAngle / 2);

  return (
    <div className="p-2 bg-white rounded-full shadow-sm mx-auto flex space-x-2">
      <Tween from={{ opacity: 0, scale: 0 }} to={{ opacity: 1, scale: 1 }} duration={1} stagger={0.5}>
        <div className="rounded-full h-8 px-4 bg-gray-100 text-gray-900 flex items-center justify-center">
          <small className="text-xs mr-4">Rotate</small>
          <div className="-mt-1 relative">
            <div
              className="h-1 bg-gray-700 rounded absolute top-0"
              style={{ width: `${100 / (FullRotationAngle / rotationValue)}%`, top: '13px' }}
            />
            <input
              className="rounded appearance-none bg-gray-300 h-1 w-128"
              type="range"
              min="1"
              max="360"
              step="15"
              value={rotationValue}
              onChange={(e) => setRotationValue(parseInt(e.currentTarget.value))}
            />
          </div>
        </div>
        <div className="border border-r border-dashed" />
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
