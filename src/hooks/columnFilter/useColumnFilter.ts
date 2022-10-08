import { FilterContext } from "contexts/filter/FilterContext";
import { useContext } from "react";
import useColumnFilterProps from "./types";

const useColumnFilter: useColumnFilterProps = () => {
  const { filterColumns } = useContext(FilterContext);
  const showId = filterColumns.indexOf("id") === -1;
  const showDate = filterColumns.indexOf("date") === -1;
  const showConcept = filterColumns.indexOf("concept") === -1;
  const showAmount = filterColumns.indexOf("amount") === -1;
  const showLastBalance = filterColumns.indexOf("lastBalance") === -1;
  const showNextBalance = filterColumns.indexOf("nextBalance") === -1;

  return {
    showId,
    showDate,
    showConcept,
    showAmount,
    showLastBalance,
    showNextBalance
  };
};

export default useColumnFilter;
