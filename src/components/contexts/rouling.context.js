import React, { createContext } from 'react';
import { useRoulingFilter } from '../hooks/use-rouling-filter';
import { useRoulingFetch } from '../hooks/use-rouling-list';

const RoulingContext = createContext();

const RoulingProvider = ({ children }) => {
  const {
    defaultLayout,
    layout,
    setLayout,
    RESULT_LAYOUTS,
  } = useRoulingFilter();
  const { 
    results, 
    updateVote,
  } = useRoulingFetch();

  return (
    <RoulingContext.Provider value={{
      defaultLayout,
      layout,
      setLayout,
      RESULT_LAYOUTS,
      results,
      updateVote,
    }}>
      {children}
    </RoulingContext.Provider>
  );
};

export { RoulingContext, RoulingProvider };