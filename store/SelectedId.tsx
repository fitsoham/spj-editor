import React, { useState } from 'react';

const SelectedIdContext = React.createContext([]);

const SelectedIdContextProvider: React.FC = ({ children }) => {
  const [selectedId, setSelectedId] = useState<string>('');
  return <SelectedIdContext.Provider value={[selectedId, setSelectedId]}>{children}</SelectedIdContext.Provider>;
};

export { SelectedIdContext, SelectedIdContextProvider };
