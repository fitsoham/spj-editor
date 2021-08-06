import React, { useState } from 'react';

const NavSelectContext = React.createContext([]);

const NavSelectContextProvider: React.FC = ({ children }) => {
  const [nav, setNav] = useState<string>('store');
  return <NavSelectContext.Provider value={[nav, setNav]}>{children}</NavSelectContext.Provider>;
};

export { NavSelectContext, NavSelectContextProvider };
