import { createContext, useContext, useState, useEffect } from "react";

const TrendingContext = createContext([]);

function useTrendingContext() {
  return useContext(TrendingContext);
}

function TrendingContextProvider({ children }) {
  const [coinData, setCoinData] = useState([]);
  const [activeCoin, setActiveCoin] = useState({});

  return (
    <TrendingContext.Provider
      value={{ coinData, setCoinData, activeCoin, setActiveCoin }}
    >
      {children}
    </TrendingContext.Provider>
  );
}

export { useTrendingContext, TrendingContextProvider };
