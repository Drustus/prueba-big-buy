type Wallet = {
  balance: number;
  movements: Array<MovementWithStatus>;
};

type RawWaller = {
  balance: number;
  movements: Array<Movement>;
};

interface MovementWithStatus extends Movement {
  lastBalance: number;
  nextBalance: number;
  date: Date;
}

type Movement = {
  id: number;
  date: string;
  concept: MovementType;
  amount: number;
};

type NewMovement = {
  concept: MovementType;
  amount: number;
};

enum MovementType {
  Add = 0,
  Extract = 1
}

export {
  Wallet,
  Movement,
  MovementType,
  MovementWithStatus,
  RawWaller,
  NewMovement
};
