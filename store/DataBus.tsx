import React, { useState } from 'react';

const DataBusContext = React.createContext([]);

const DataBusContextProvider: React.FC = ({ children }) => {
  const [src, setSrc] = useState<[]>([]);
  return <DataBusContext.Provider value={[src, setSrc]}>{children}</DataBusContext.Provider>;
};

export { DataBusContext, DataBusContextProvider };
