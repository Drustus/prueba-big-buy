import { createContext, useState } from "react";
import WalletContextProps from "./types";
import data from "assets/data.json";
import { Movement } from "global";

const params: WalletContextProps = {
  movements: [],
  onAdd: () => {}
};

const WalletContext = createContext(params);

const WalletProvider = ({ children }) => {
  const [balance, setBalance] = useState<number>(data.balance);
  const [movements, setMovements] = useState<Movement[]>(data.movements);

  return (
    <WalletContext.Provider value={{ movements }}>
      {children}
    </WalletContext.Provider>
  );
};

export default WallerProvider;
