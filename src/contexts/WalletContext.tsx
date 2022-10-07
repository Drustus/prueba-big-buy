import { createContext, useState } from "react";
import { WalletContextProps, Props } from "./types";
import data from "assets/data.json";
import parseWallet from "utils/parseWallet";
import { MovementWithStatus, NewMovement } from "global";

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

  const onAddMovement: (movement: NewMovement) => void = movement => {
    let lastBalance = balance;
    let nextBalance = 0;
    if (movement.concept === 0) {
      nextBalance = balance + movement.amount;
    } else {
      nextBalance = balance - movement.amount;
    }

    setBalance(nextBalance);
    setMovements(currentMovements => [
      {
        id: Date.now(),
        amount: movement.amount,
        concept: movement.concept,
        date: new Date(),
        lastBalance,
        nextBalance
      },
      ...currentMovements
    ]);
  };

  return (
    <WalletContext.Provider value={{ movements, balance, onAddMovement }}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
