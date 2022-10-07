import { MovementType } from "global";

type Props = {
  onSubmit: (quantity: number) => void;
  type: MovementType | null;
};

export default Props;
