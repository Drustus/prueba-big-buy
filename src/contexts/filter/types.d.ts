export type FilterContextProps = {
  dateIni: Date | undefined;
  dateEnd: Date | undefined;
  onSelectedDateIni: SelectedDate;
  onSelectedDateEnd: SelectedDate;
  rawIni: string | undefined;
  rawEnd: string | undefined;
  clearDateFilter: () => void;
};

export type SelectedDate = (date: string) => void;

export type StateProps = {
  ini: Date | undefined;
  end: Date | undefined;
  rawIni: string | undefined;
  rawEnd: string | undefined;
};

export type Props = {
  children: React.ReactNode;
};
