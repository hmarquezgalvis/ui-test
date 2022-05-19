import { createContext } from "react";

const RoulingListContext = createContext();

const RoulingListProvider = ({ children, items = [] }) => {
  return (
    <RoulingListContext.Provider value={{
      items
    }}>
      {children}
    </RoulingListContext.Provider>
  )
}

export { RoulingListContext, RoulingListProvider };