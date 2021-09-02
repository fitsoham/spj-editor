import BgSelector from '@components/Playground/BgSelector';
import Drawer from '@components/Shared/Drawer';
import InputRange from '@components/Shared/InputRange';
import Modal from '@components/Shared/Modal';
import PublishForm from '@components/Shared/PublishForm';
import {
  ColorSwatchIcon,
  EyeIcon, RewindIcon,
  SortAscendingIcon,
  SortDescendingIcon,
  TrashIcon
} from '@heroicons/react/outline';
import React, { useContext, useState } from 'react';
import { Tween } from 'react-gsap';
import { PlaygroundAssetsContext } from 'store/PlaygroundAssets';
import { SelectedIdContext } from 'store/SelectedId';
import UnitAction from './UnitAction';

const BottomNav: React.FC = () => {
  const {
    deleteAsset,
    moveAssetBehind,
    moveAssetForward,
    moveAssetTop,
    moveAssetLast,
    clearBoard,
    rotateAndSaveRotation,
    getRotationValue,
    PlaygroundAssets
  } = useContext(PlaygroundAssetsContext);

  const [selectedId] = useContext(SelectedIdContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isPublishFormOpen, setPublishFormOpen] = useState(false);

  function closeFormDrawer() {
    setPublishFormOpen(false);
  }

  function openFormDrawer() {
    setPublishFormOpen(true);
  }
    
  function closeDrawer() {
    setIsOpen(false);
  }

  function openDrawer() {
    setIsOpen(true);
  }
  return (
    <div className="p-2 bg-white rounded-full shadow-sm mx-auto flex space-x-2">
      {selectedId && selectedId?.length && (
        <div>
          <UnitAction>
            <small className="text-xs text-gray-900 mr-4">Rotate</small>
            <div className="-mt-1 relative">
              <div
                className="h-1 bg-gray-700 rounded absolute top-0"
                style={{ width: `${getRotationValue(selectedId)}%`, top: '13px' }}
              />
              <InputRange updateProductRotation={rotateAndSaveRotation} value={getRotationValue(selectedId)} />
            </div>
          </UnitAction>
        </div>
      )}
      <Tween from={{ opacity: 0, scale: 0 }} to={{ opacity: 1, scale: 1 }} duration={1} stagger={0.5}>
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
          <UnitAction onClick={openDrawer}>
            <ColorSwatchIcon className="h-4 w-4" />
          </UnitAction>
          <Drawer isOpen={isOpen} cb={closeDrawer}>
            <Drawer.Header
              title="Apply Background"
              description="You can change 10 free backgrounds, Unlock 1000+ more background with $5.00"
            />
            <Drawer.Body>
              <BgSelector />
            </Drawer.Body>
          </Drawer>
        </div>
        <div className="border border-r border-dashed" />
        <div>
          <Modal onCloseCallback={clearBoard} disabled={!PlaygroundAssets?.length}>
            <Modal.Button>
              <UnitAction>
                <svg height="16" width="16" viewBox="0 0 79.707 79.707">
                  <path d="M67.239 79.707l-8.41-28.273c-.207-7.525-4.795-13.963-11.309-16.849V7.667C47.52 3.439 44.081 0 39.853 0c-4.227 0-7.666 3.439-7.666 7.667v26.918c-6.513 2.886-11.099 9.323-11.306 16.844l-8.413 28.275h54.771v.003zm-12.81-6l-3.431-12.806a1.994 1.994 0 00-2.449-1.413 1.997 1.997 0 00-1.414 2.448l3.152 11.771h-8.436v-12.29a2 2 0 00-4 0v12.287h-7.435l3.153-11.771a2 2 0 00-3.863-1.035l-3.431 12.806H20.51l5.579-18.75h27.527l5.575 18.75h-4.763l.001.003zM38.187 7.667c0-.919.748-1.667 1.666-1.667a1.67 1.67 0 011.667 1.667V33.04c-.55-.048-1.104-.084-1.666-.084s-1.117.036-1.667.084V7.667zm1.667 31.289c6.135 0 11.275 4.276 12.637 10H27.217c1.36-5.725 6.503-10 12.637-10z" />
                </svg>
              </UnitAction>
            </Modal.Button>
            <Modal.Header>Confirm</Modal.Header>
            <Modal.Body>
              Are you sure you want to clear this board? <br /> This action cannot be undone.
            </Modal.Body>
          </Modal>
        </div>
        <div className="border border-r border-dashed" />
        <div>
          <UnitAction onClick={openFormDrawer} disabled={!PlaygroundAssets?.length}>
            <EyeIcon className="h-4 w-4" />
          </UnitAction>
          <Drawer isOpen={isPublishFormOpen} cb={closeFormDrawer}>
            <Drawer.Header
              title="Publish Your Collage"
              description=""
            />
            <Drawer.Body>
                <PublishForm/>
            </Drawer.Body>
          </Drawer>
        </div>
      </Tween>
    </div>
  );
};

export default BottomNav;
