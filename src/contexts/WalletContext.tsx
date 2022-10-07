import { createContext, useEffect, useState } from "react";
import { WalletContextProps, Props } from "./types";
import data from "assets/data.json";
import parseWallet from "utils/parseWallet";
import { Movement, MovementWithStatus } from "global";

const parsedWallet = parseWallet(data);

const params: WalletContextProps = {
  movements: [],
  balance: 0,
  onAddMovement: () => {}
};

export const WalletContext = createContext(params);

const WalletProvider = ({ children }: Props) => {
  const [balance, setBalance] = useState<number>(parsedWallet.balance);
  const [movements, setMovements] = useState<MovementWithStatus[]>(
    parsedWallet.movements
  );

  useEffect(() => {}, [movements]);

  const onAddMovement = (movement: Movement) => {
    // setMovements(currentMovements => [movement, ...currentMovements]);
  };

  return (
    <WalletContext.Provider value={{ movements, balance, onAddMovement }}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
