import AssetType from '@utils/types/AssetType';
import React, { useState } from 'react';

const DataBusContext = React.createContext([]);

const DataBusContextProvider: React.FC = ({ children }) => {
  const [busData, setBusData] = useState<AssetType>(null);

  return <DataBusContext.Provider value={[busData, setBusData]}>{children}</DataBusContext.Provider>;
};

export { DataBusContext, DataBusContextProvider };
