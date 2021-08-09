import React, { useContext } from 'react';
import { NavSelectContext } from 'store/NavSelect';
import CollagePanel from './CollagePanel';
import StorePanel from './StorePanel';

const NavPanel: React.FC = () => {
  const [nav] = useContext(NavSelectContext);
  if (nav === 'store') {
    return <StorePanel />;
  }
  if (nav === 'collages') {
    return <CollagePanel />;
  }
  return null;
};

export default NavPanel;
