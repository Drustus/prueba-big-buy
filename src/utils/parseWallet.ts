import { Movement, RawWaller, Wallet } from "global";
import round from "./round";

const orderByDate: (a: Movement, b: Movement) => number = (a, b) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

const parseWallet: (wallet: RawWaller) => Wallet = wallet => {
  const parsedWallet: Wallet = {
    balance: round(wallet.balance / 100),
    movements: []
  };

  const getLastBalance: () => number = () => {
    return parsedWallet.movements[0]?.nextBalance || parsedWallet.balance;
  };

  const orderedMovements = wallet.movements.sort(orderByDate);

  for (let index = orderedMovements.length - 1; index >= 0; index--) {
    const movement = orderedMovements[index];

    const lastBalance = getLastBalance();
    const amount = round(movement.amount / 100);

    let nextBalance;
    if (movement.concept === 0) {
      nextBalance = lastBalance + amount;
    } else {
      nextBalance = lastBalance - amount;
    }

    parsedWallet.movements.unshift({
      ...movement,
      date: new Date(movement.date),
      amount,
      lastBalance,
      nextBalance
    });
  }

  parsedWallet.balance = round(parsedWallet.movements[0].nextBalance);

  return parsedWallet;
};

export default parseWallet;
