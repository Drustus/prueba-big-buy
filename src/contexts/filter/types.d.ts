export type FilterContextProps = {
  dateIni: Date | undefined;
  dateEnd: Date | undefined;
  onSelectedDateFilter: SelectedDate;
  rawIni: string | undefined;
  rawEnd: string | undefined;
  clearDateFilter: () => void;
  onFilterText: OnFilterTextProps;
  textFilter: string | undefined;
  filterColumns: Array<string>;
  onColumnFilter: OnFilterColumnsProps;
  clearColumnFilter: () => void;
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

export type OnFilterTextProps = (text: string) => void;
export type OnFilterColumnsProps = (text: Array<string>) => void;

export type Props = {
  children: React.ReactNode;
};
