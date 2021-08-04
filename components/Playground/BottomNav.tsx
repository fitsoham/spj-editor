import { ColorSwatchIcon, EyeIcon, SortAscendingIcon, SortDescendingIcon, TrashIcon } from '@heroicons/react/outline';
import React from 'react';
import { Tween } from 'react-gsap';
import UnitActionButton from './UnitActionButton';

const BottomNav: React.FC = () => {
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
          <UnitActionButton>
            <SortDescendingIcon className="h-4 w-4" />
          </UnitActionButton>
        </div>
        <div>
          <UnitActionButton>
            <SortAscendingIcon className="h-4 w-4" />
          </UnitActionButton>
        </div>
        <div>
          <UnitActionButton>
            <EyeIcon className="h-4 w-4" />
          </UnitActionButton>
        </div>
        <div>
          <UnitActionButton>
            <TrashIcon className="h-4 w-4" />
          </UnitActionButton>
        </div>
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
