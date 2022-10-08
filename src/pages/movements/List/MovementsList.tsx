import Pagination from "components/Pagination";
import Table from "components/Table";
import { FilterContext } from "contexts/filter/FilterContext";
import { PaginationContext } from "contexts/pagination/PaginationContext";
import { WalletContext } from "contexts/wallet/WalletContext";
import useColumnFilter from "hooks/columnFilter/useColumnFilter";
import { useContext } from "react";
import { dateToString, timeToString } from "utils/dateFormatter";
import numberWithPoint from "utils/numberWithPoint";
import Cell from "./Cell";
import Header from "./Header";
import { GetCellContentProps } from "./types";
import withHighlight from "./withHighlight";

const MovementsList = () => {
  const { movements } = useContext(WalletContext);
  const { currentPage, take } = useContext(PaginationContext);
  const { dateIni, dateEnd, textFilter } = useContext(FilterContext);
  const columns = useColumnFilter();

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
        concept.includes(parsedTextFilter) ||
        containsAmount ||
        containsLastBalance ||
        containsNextBalance ||
        containsDate ||
        containsTime
      );
    });
  }

  const initialMovement = (currentPage - 1) * take;
  const pageMovements = filteredMovements.slice(
    initialMovement,
    initialMovement + take
  );

  const getCellContent: GetCellContentProps = text => {
    return withHighlight(text, textFilter);
  };

  return (
    <>
      <Table>
        <Header />
        <tbody>
          {pageMovements.map(movement => (
            <tr key={movement.id}>
              {columns.showId && <Cell>{movement.id}</Cell>}
              {columns.showDate && (
                <Cell>
                  <div className="cell-date">
                    <div>{getCellContent(dateToString(movement.date))}</div>
                    <div>{getCellContent(timeToString(movement.date))}</div>
                  </div>
                </Cell>
              )}
              {columns.showConcept && (
                <Cell>
                  {movement.concept === 0
                    ? getCellContent("Ingreso")
                    : getCellContent("Retirada")}
                </Cell>
              )}
              {columns.showAmount && (
                <Cell>
                  {getCellContent(`${numberWithPoint(movement.amount)} €`)}
                </Cell>
              )}
              {columns.showLastBalance && (
                <Cell>
                  {getCellContent(`${numberWithPoint(movement.lastBalance)} €`)}
                </Cell>
              )}
              {columns.showNextBalance && (
                <Cell>
                  {getCellContent(`${numberWithPoint(movement.nextBalance)} €`)}
                </Cell>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination total={filteredMovements.length} />
    </>
  );
};

export default MovementsList;
