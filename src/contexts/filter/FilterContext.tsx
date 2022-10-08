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
  onSelectedDateIni: () => {},
  onSelectedDateEnd: () => {},
  clearDateFilter: () => {}
};

export const FilterContext = createContext(params);

const FilterProvider = ({ children }: Props) => {
  const [dateFilters, setDateFilters] = useState<StateProps>(initialState);

  const onSelectedDateIni: SelectedDate = date => {
    setDateFilters(current => ({
      ...current,
      rawIni: date,
      ini: new Date(date)
    }));
  };

  const onSelectedDateEnd: SelectedDate = date => {
    setDateFilters(current => ({
      ...current,
      rawEnd: date,
      end: new Date(date)
    }));
  };

  const clearDateFilter = () => {
    setDateFilters(initialState);
  };

  return (
    <FilterContext.Provider
      value={{
        dateIni: dateFilters.ini,
        onSelectedDateIni,
        dateEnd: dateFilters.end,
        onSelectedDateEnd,
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
