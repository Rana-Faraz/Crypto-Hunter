import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

function CryptoContext({ children }) {
  const [currency, setCurrency] = useState("usd");
  const [symbol, setSymbol] = useState("$");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (currency === "pkr") setSymbol("Rs");
    else if (currency === "usd") setSymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency, theme, setTheme }}>
      {children}
    </Crypto.Provider>
  );
}

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};