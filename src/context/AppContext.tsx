import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext<{
state: undefined,
setState: React.Dispatch<React.SetStateAction<undefined>>
} | undefined>(undefined);

const AppProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(undefined);
  const value = { state, setState };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useLocalState = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useLocalState must be used within a AppProvconst AppProvider');
  }

  return context;
};

export {
  AppProvider,
  useLocalState,
};
