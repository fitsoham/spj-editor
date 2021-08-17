import React, { useContext } from 'react';
import { NavSelectContext } from 'store/NavSelect';
import CollagePanel from './CollagePanel';
import PinterestPanel from './PinterestPanel';
import StorePanel from './StorePanel';

const NavPanel: React.FC = () => {
  const [nav] = useContext(NavSelectContext);
  if (nav === 'store') {
    return <StorePanel />;
  }
  if (nav === 'collages') {
    return <CollagePanel />;
  }
  if (nav === 'pinterest') {
    return <PinterestPanel />;
  }
  return null;
};

export default NavPanel;
