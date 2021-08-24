import {
  ColorSwatchIcon,
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
        <small className="text-xs text-gray-900 mr-4">Rotate</small>
        <div className="-mt-1 relative">
          <div
            className="h-1 bg-gray-700 rounded absolute top-0"
            style={{ width: `${100 / (FullRotationAngle / rotationValue)}%`, top: '13px' }}
          />
          <input
            className="rounded appearance-none bg-gray-300 h-1 w-48"
            type="range"
            min="1"
            max="360"
            step="1"
            value={rotationValue}
            onChange={(e) => setRotationValue(parseInt(e?.currentTarget?.value))}
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
            <TrashIcon className="h-4 w-4" />
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
            <svg height="16" width="16" viewBox="0 0 79.707 79.707">
              <path d="M67.239 79.707l-8.41-28.273c-.207-7.525-4.795-13.963-11.309-16.849V7.667C47.52 3.439 44.081 0 39.853 0c-4.227 0-7.666 3.439-7.666 7.667v26.918c-6.513 2.886-11.099 9.323-11.306 16.844l-8.413 28.275h54.771v.003zm-12.81-6l-3.431-12.806a1.994 1.994 0 00-2.449-1.413 1.997 1.997 0 00-1.414 2.448l3.152 11.771h-8.436v-12.29a2 2 0 00-4 0v12.287h-7.435l3.153-11.771a2 2 0 00-3.863-1.035l-3.431 12.806H20.51l5.579-18.75h27.527l5.575 18.75h-4.763l.001.003zM38.187 7.667c0-.919.748-1.667 1.666-1.667a1.67 1.67 0 011.667 1.667V33.04c-.55-.048-1.104-.084-1.666-.084s-1.117.036-1.667.084V7.667zm1.667 31.289c6.135 0 11.275 4.276 12.637 10H27.217c1.36-5.725 6.503-10 12.637-10z" />
            </svg>
          </UnitAction>
        </div>
      </Tween>
    </div>
  );
};

export default BottomNav;
