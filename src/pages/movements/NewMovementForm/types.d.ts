import { MovementType } from "global";

type Props = {
  onSubmit: (quantity: number) => void;
  type: MovementType | null;
};

export type OnChangeType = (event: any) => void;
export type OnSubmitHandlerType = (event?: any) => void;

export default Props;
