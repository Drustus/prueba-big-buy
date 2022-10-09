import { MovementWithStatus } from "global";

type Props = {
  children: React.ReactNode;
};

export type DateFilterFormProps = {
  closeFilter: () => void;
};

export type WithHighlightProps = (
  text: string,
  filter: string | undefined
) => React.ReactNode;

export type GetCellContentProps = (text: string) => React.ReactNode;

export type FilterMovementsProps = (
  params: FilterMovementsParams
) => MovementWithStatus[];

type FilterMovementsParams = {
  movements: MovementWithStatus[];
  dateIni: Date | undefined;
  dateEnd: Date | undefined;
  textFilter: string | undefined;
};

export default Props;
