import React, { useState } from 'react';

const SelectedIndexContext = React.createContext([]);

const SelectedIndexContextProvider: React.FC = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <SelectedIndexContext.Provider value={[selectedIndex, setSelectedIndex]}>{children}</SelectedIndexContext.Provider>
  );
};

export { SelectedIndexContext, SelectedIndexContextProvider };
