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
import UnitAction from './UnitAction';

const FullRotationAngle = 360;

const BottomNav: React.FC = () => {
  const [, , deleteAsset, , moveAssetBehind, moveAssetForward, moveAssetTop, moveAssetLast, clearBoard] =
    useContext(PlaygroundAssetsContext);

  const [selectedId] = useContext(SelectedIdContext);

  const [rotationValue, setRotationValue] = useState(FullRotationAngle / 2);

  return (
    <div className="p-2 bg-white rounded-full shadow-sm mx-auto flex space-x-2">
      <UnitAction>
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
      </UnitAction>
      <Tween from={{ opacity: 0, scale: 0 }} to={{ opacity: 1, scale: 1 }} duration={1} stagger={0.5}>
        <div className="border border-r border-dashed" />
        <div>
          <UnitAction onClick={moveAssetLast} disabled={selectedId === ''}>
            <RewindIcon className="h-4 w-4 transform -rotate-90" />
          </UnitAction>
        </div>
        <div>
          <UnitAction onClick={moveAssetBehind} disabled={selectedId === ''}>
            <SortDescendingIcon className="h-4 w-4" />
          </UnitAction>
        </div>
        <div>
          <UnitAction onClick={moveAssetForward} disabled={selectedId === ''}>
            <SortAscendingIcon className="h-4 w-4" />
          </UnitAction>
        </div>
        <div>
          <UnitAction onClick={moveAssetTop} disabled={selectedId === ''}>
            <RewindIcon className="h-4 w-4 transform rotate-90" />
          </UnitAction>
        </div>
        <div className="border border-r border-dashed" />
        <div>
          <UnitAction onClick={deleteAsset} disabled={selectedId === ''}>
            <MinusCircleIcon className="h-4 w-4" />
          </UnitAction>
        </div>
        <div className="border border-r border-dashed" />
        <div>
          <UnitAction>
            <ColorSwatchIcon className="h-4 w-4" />
          </UnitAction>
        </div>
        <div className="border border-r border-dashed" />
        <div>
          <UnitAction onClick={clearBoard}>
            <TrashIcon className="h-4 w-4" />
          </UnitAction>
        </div>
      </Tween>
    </div>
  );
};

export default BottomNav;
