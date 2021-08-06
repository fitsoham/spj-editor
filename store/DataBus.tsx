import React, { useState } from 'react';

type DataBus = {
  type: 'asset' | 'collage';
  id: string;
  src: string;
  data?: {
    x: number;
    y: number;
    id: string;
    src: string;
    width: number;
    height: number;
    price: string;
  };
};

const DataBusContext = React.createContext([]);

const DataBusContextProvider: React.FC = ({ children }) => {
  const [busData, setBusData] = useState<DataBus>(null);

  return <DataBusContext.Provider value={[busData, setBusData]}>{children}</DataBusContext.Provider>;
};

export { DataBusContext, DataBusContextProvider };
