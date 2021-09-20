import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ViewingModeContext = React.createContext([]);

const ViewingModeContextProvider: React.FC = ({ children }) => {
  const [currentMode, setCurrentMode] = useState('view');
  const router = useRouter();

  useEffect(() => {
    const {
      query: { cid = [] },
    } = router;
    const [, mode] = cid;
    if (!mode) {
      setCurrentMode('view');
    } else {
      setCurrentMode(mode);
    }
  }, [router?.asPath]);

  const updateRoute = (newMode) => {
    const {
      query: { cid },
    } = router;
    if (cid?.length) {
      const params = [...cid];
      params.splice(1, 1, newMode);
      router.push(
        {
          pathname: `/${router?.asPath?.split('/')[1]}/${params[0]}/${params[1]}`,
        },
        undefined,
        { shallow: true }
      );
    } else {
      setCurrentMode(newMode);
    }
  };
  return (
    <ViewingModeContext.Provider value={[currentMode, setCurrentMode, updateRoute]}>
      {children}
    </ViewingModeContext.Provider>
  );
};

export { ViewingModeContext, ViewingModeContextProvider };
