import { RawWaller, Wallet } from "global";

const parseWallet: (wallet: RawWaller) => Wallet = wallet => {
  const parsedWallet: Wallet = {
    balance: wallet.balance / 100,
    movements: []
  };

  const getLastBalance: (index: number) => number = index => {
    return (
      parsedWallet.movements[index - 1]?.nextBalance || parsedWallet.balance
    );
  };

  wallet.movements.forEach((movement, index) => {
    const lastBalance = getLastBalance(index);
    const amount = movement.amount / 100;

    let nextBalance;
    if (movement.concept === 0) {
      nextBalance = lastBalance + amount;
    } else {
      nextBalance = lastBalance - amount;
    }

    parsedWallet.movements.push({
      ...movement,
      date: new Date(movement.date),
      amount,
      lastBalance,
      nextBalance
    });

    parsedWallet.balance = parsedWallet.movements[0].nextBalance;
  });

  return parsedWallet;
};

export default parseWallet;
