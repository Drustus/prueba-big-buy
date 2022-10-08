import { createContext, useState } from "react";
import {
  FilterContextProps,
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
  onFilterText: () => {}
};

export const FilterContext = createContext(params);

const FilterProvider = ({ children }: Props) => {
  const [dateFilters, setDateFilters] = useState<StateProps>(initialState);
  const [textFilter, setTextFilter] = useState<string>("");

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
        textFilter
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
