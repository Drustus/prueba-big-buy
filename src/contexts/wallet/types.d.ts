import { NewMovement, MovementWithStatus } from "global";

export type WalletContextProps = {
  movements: MovementWithStatus[];
  onAddMovement: (movement: NewMovement) => void;
  balance: number;
};

export type Props = {
  children: React.ReactNode;
};
