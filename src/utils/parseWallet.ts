import { RawWaller, Wallet } from "global";

const parseWallet: (wallet: RawWaller) => Wallet = wallet => {
  const parsedWallet: Wallet = {
    balance: wallet.balance / 100,
    movements: []
  };

  const getLastBalance: (index: number) => number = index => {
    return parsedWallet.movements[0]?.nextBalance || parsedWallet.balance;
  };

  const orderedMovements = wallet.movements.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  for (let index = orderedMovements.length - 1; index >= 0; index--) {
    const movement = orderedMovements[index];

    const lastBalance = getLastBalance(index);
    const amount = movement.amount / 100;

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

  parsedWallet.balance = parsedWallet.movements[0].nextBalance;

  return parsedWallet;
};

export default parseWallet;
