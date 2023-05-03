import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const providerValue = {};

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
