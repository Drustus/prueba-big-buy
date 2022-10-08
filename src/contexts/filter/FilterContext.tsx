import { createContext, useState } from "react";
import {
  FilterContextProps,
  OnFilterColumnsProps,
  OnFilterTextProps,
  Props,
  SelectedDate,
  StateProps
} from "./types";

const initialState = {
  rawIni: undefined,
  ini: undefined,
  rawEnd: undefined,
  end: undefined
};

const params: FilterContextProps = {
  dateIni: undefined,
  dateEnd: undefined,
  rawIni: undefined,
  rawEnd: undefined,
  textFilter: undefined,
  onSelectedDateFilter: () => {},
  clearDateFilter: () => {},
  onFilterText: () => {},
  filterColumns: [],
  onColumnFilter: () => {},
  clearColumnFilter: () => {}
};

export const FilterContext = createContext(params);

const FilterProvider = ({ children }: Props) => {
  const [dateFilters, setDateFilters] = useState<StateProps>(initialState);
  const [textFilter, setTextFilter] = useState<string>("");
  const [filterColumns, setFilterColumns] = useState<Array<string>>([]);

  const onSelectedDateFilter: SelectedDate = dateFilter => {
    setDateFilters({
      rawIni: dateFilter.ini,
      rawEnd: dateFilter.end,
      ini: new Date(dateFilter.ini),
      end: new Date(dateFilter.end)
    });
  };

  const clearDateFilter = () => {
    setDateFilters(initialState);
  };

  const onFilterText: OnFilterTextProps = text => {
    setTextFilter(text);
  };

  const onColumnFilter: OnFilterColumnsProps = columns => {
    setFilterColumns(columns);
  };

  const clearColumnFilter = () => {
    console.log("clear");
    setFilterColumns([]);
  };

  return (
    <FilterContext.Provider
      value={{
        dateIni: dateFilters.ini,
        dateEnd: dateFilters.end,
        onSelectedDateFilter,
        rawIni: dateFilters.rawIni,
        rawEnd: dateFilters.rawEnd,
        clearDateFilter,
        onFilterText,
        textFilter,
        filterColumns,
        onColumnFilter,
        clearColumnFilter
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
