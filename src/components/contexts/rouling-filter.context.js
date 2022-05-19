import React, { createContext } from 'react';
import { useRoulingFilter } from '../hooks/use-rouling-filter';

const RoulingFilterContext = createContext();

const RoulingFilterProvider = ({ children }) => {
  const {
    defaultLayout,
    layout,
    setLayout,
    RESULT_LAYOUTS,
  } = useRoulingFilter();
  return (
    <RoulingFilterContext.Provider
      value={{
        defaultLayout,
        layout,
        setLayout,
        RESULT_LAYOUTS,
      }}
    >
      {children}
    </RoulingFilterContext.Provider>
  );
};

export { RoulingFilterContext, RoulingFilterProvider };