import { createContext, useState } from "react";
import { FilterContextProps, Props, SelectedDate, StateProps } from "./types";

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
  onSelectedDateFilter: () => {},
  clearDateFilter: () => {}
};

export const FilterContext = createContext(params);

const FilterProvider = ({ children }: Props) => {
  const [dateFilters, setDateFilters] = useState<StateProps>(initialState);

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

  return (
    <FilterContext.Provider
      value={{
        dateIni: dateFilters.ini,
        dateEnd: dateFilters.end,
        onSelectedDateFilter,
        rawIni: dateFilters.rawIni,
        rawEnd: dateFilters.rawEnd,
        clearDateFilter
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
