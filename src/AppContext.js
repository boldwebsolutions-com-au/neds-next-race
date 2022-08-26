import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [raceType, setRaceType] = useState("all");

  function toggleRaceType(type) {
    setRaceType(type);
  }

  return (
    <AppContext.Provider value={{ toggleRaceType, raceType }}>
      {children}
    </AppContext.Provider>
  );
}
