import Pagination from "components/Pagination";
import Table from "components/Table";
import { FilterContext } from "contexts/filter/FilterContext";
import { PaginationContext } from "contexts/pagination/PaginationContext";
import { WalletContext } from "contexts/wallet/WalletContext";
import useColumnFilter from "hooks/columnFilter/useColumnFilter";
import { useContext, useMemo } from "react";
import { dateToString, timeToString } from "utils/dateFormatter";
import numberWithPoint from "utils/numberWithPoint";
import Cell from "./Cell";
import filterMovements from "./filterMovements";
import Header from "./Header";
import { GetCellContentProps } from "./types";
import withHighlight from "./withHighlight";

const MovementsList = () => {
  const { movements } = useContext(WalletContext);
  const { currentPage, take } = useContext(PaginationContext);
  const { dateIni, dateEnd, textFilter } = useContext(FilterContext);
  const columns = useColumnFilter();

  const filteredMovements = useMemo(
    () =>
      filterMovements({
        movements,
        dateIni,
        dateEnd,
        textFilter
      }),
    [movements, dateIni, dateEnd, textFilter]
  );

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
