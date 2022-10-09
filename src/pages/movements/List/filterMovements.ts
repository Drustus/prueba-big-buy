import { dateToString, timeToString } from "utils/dateFormatter";
import numberWithPoint from "utils/numberWithPoint";
import { FilterMovementsProps } from "./types";

const filterMovements: FilterMovementsProps = ({
  movements,
  dateIni,
  dateEnd,
  textFilter
}) => {
  let filteredMovements = movements;

  if (dateIni && dateEnd) {
    filteredMovements = filteredMovements.filter(movement => {
      movement.date.setUTCHours(0, 0, 0, 0);
      dateIni.setUTCHours(0, 0, 0, 0);
      dateEnd.setUTCHours(0, 0, 0, 0);
      return movement.date >= dateIni && movement.date <= dateEnd;
    });
  }

  if (textFilter) {
    const parsedTextFilter = textFilter.replaceAll(" ", "");
    filteredMovements = filteredMovements.filter(movement => {
      const concept = movement.concept === 0 ? "Ingreso" : "Retirada";
      const amount = numberWithPoint(movement.amount) + "€";
      const lastBalance = numberWithPoint(movement.lastBalance) + "€";
      const nextBalance = numberWithPoint(movement.nextBalance) + "€";
      const date = dateToString(movement.date);
      const time = timeToString(movement.date);

      const containsAmount = amount.includes(parsedTextFilter);
      const containsLastBalance = lastBalance.includes(parsedTextFilter);
      const containsNextBalance = nextBalance.includes(parsedTextFilter);
      const containsDate = date.includes(parsedTextFilter);
      const containsTime = time.includes(parsedTextFilter);

      return (
        concept.toLowerCase().includes(parsedTextFilter.toLowerCase()) ||
        containsAmount ||
        containsLastBalance ||
        containsNextBalance ||
        containsDate ||
        containsTime
      );
    });
  }

  return filteredMovements;
};

export default filterMovements;
