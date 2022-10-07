import { Movement, MovementWithStatus } from "global";

export type WalletContextProps = {
  movements: MovementWithStatus[];
  onAddMovement: (movement: Movement) => void;
  balance: number;
};

export type Props = {
  children: React.ReactNode;
};
