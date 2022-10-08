export type FilterContextProps = {
  dateIni: Date | undefined;
  dateEnd: Date | undefined;
  onSelectedDateFilter: SelectedDate;
  rawIni: string | undefined;
  rawEnd: string | undefined;
  clearDateFilter: () => void;
};

export type SelectedDate = (dateFilter: NewDateFilter) => void;

export type StateProps = {
  ini: Date | undefined;
  end: Date | undefined;
  rawIni: string | undefined;
  rawEnd: string | undefined;
};

export type NewDateFilter = {
  ini: string;
  end: string;
};

export type Props = {
  children: React.ReactNode;
};
