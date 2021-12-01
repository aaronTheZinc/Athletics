import React, { createContext, useEffect, useState } from "react";
import { AppContextType, Sport } from "../interfaces";
import { loadSportData } from "../api";
import { createBrowserHistory } from "history";
export const AppContext = createContext<AppContextType>({
  sport: "basketball",
} as AppContextType);

export const AppProvider = ({ children }): JSX.Element => {
  const [sport, setSport] = useState<string>("b-basketball");
  useEffect(() => {
    console.log(`sport mutated to ${sport}`);
  }, [sport]);
  const { Provider } = AppContext;
  return <Provider value={{ sport, setSport }}>{children}</Provider>;
};
