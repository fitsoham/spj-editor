import {
  ChatAltIcon,
  EmojiHappyIcon,
  LightBulbIcon,
  LockClosedIcon,
  ShareIcon,
  SparklesIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';
import UnitActionButton from './UnitActionButton';

const MoreActions: React.FC = () => {
  return (
    <div className="bg-gray-100 w-20 p-4 flex-col space-y-2">
      <div className="rounded-full bg-white p-2 flex-col space-y-2 shadow-sm">
        <UnitActionButton>
          <LockClosedIcon className="h-4 w-4" />
        </UnitActionButton>
        <UnitActionButton>
          <ShareIcon className="h-4 w-4" />
        </UnitActionButton>
        <UnitActionButton>
          <SparklesIcon className="h-4 w-4" />
        </UnitActionButton>
      </div>
      <div className="rounded-full bg-white p-2 flex-col space-y-2 shadow-sm">
        <UnitActionButton>
          <LightBulbIcon className="h-4 w-4" />
        </UnitActionButton>
        <UnitActionButton>
          <EmojiHappyIcon className="h-4 w-4" />
        </UnitActionButton>
        <div className="next-image-fix">
          <Image
            src="https://res.cloudinary.com/spacejoy/image/upload/w_70/v1628138169/spj-v2/DIY/emojis/angry_i0zybg.png"
            alt="angry"
            height="35"
            width="35"
          />
        </div>
        <div className="next-image-fix">
          <Image
            src="https://res.cloudinary.com/spacejoy/image/upload/w_70/v1628138185/spj-v2/DIY/emojis/okay_yjadc4.png"
            alt="angry"
            height="35"
            width="35"
          />
        </div>
        <div className="next-image-fix">
          <Image
            src="https://res.cloudinary.com/spacejoy/image/upload/w_70/v1628138205/spj-v2/DIY/emojis/good_bqckuq.png"
            alt="angry"
            height="35"
            width="35"
          />
        </div>
        <div className="next-image-fix">
          <Image
            src="https://res.cloudinary.com/spacejoy/image/upload/w_70/v1628138169/spj-v2/DIY/emojis/awesome_hsitft.png"
            alt="angry"
            height="35"
            width="35"
          />
        </div>
      </div>
      <div className="rounded-full bg-white p-2 flex-col space-y-2 shadow-sm">
        <UnitActionButton>
          <ChatAltIcon className="h-4 w-4" />
        </UnitActionButton>
      </div>
    </div>
  );
};

export default MoreActions;
