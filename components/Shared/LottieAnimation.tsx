import empty from '@public/lotties/empty.json';
import room from '@public/lotties/room.json';
import wip from '@public/lotties/work-in-progress.json';
import Lottie from 'lottie-react-web';
import React from 'react';

interface LottieAnimation {
  animation: string;
  loop?: boolean;
}

const getAnimation = (animation: string) => {
  switch (animation) {
    case 'empty':
      return empty;
    case 'wip':
      return wip;
    case 'room':
      return room;
    default:
      return empty;
  }
};

const LottieAnimation: React.FC<LottieAnimation> = ({ animation, loop = false }) => {
  return (
    <Lottie
      ariaLabel="Lottie"
      ariaRole="present"
      options={{
        loop: loop,
        animationData: getAnimation(animation),
      }}
    />
  );
};

export default React.memo(LottieAnimation);
