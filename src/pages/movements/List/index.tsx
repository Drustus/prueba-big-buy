import Pagination from "components/Pagination";
import Table from "components/Table";
import { FilterContext } from "contexts/filter/FilterContext";
import { PaginationContext } from "contexts/pagination/PaginationContext";
import { WalletContext } from "contexts/wallet/WalletContext";
import { useContext } from "react";
import numberWithPoint from "utils/numberWithPoint";
import Cell from "./Cell";
import Header from "./Header";

const MovementsList = () => {
  const { movements } = useContext(WalletContext);
  const { currentPage, take } = useContext(PaginationContext);
  const { dateIni, dateEnd, textFilter } = useContext(FilterContext);

  let filteredMovements = movements;

  if (dateIni && dateEnd) {
    filteredMovements = filteredMovements.filter(
      movement => movement.date >= dateIni && movement.date <= dateEnd
    );
  }

  if (textFilter) {
    filteredMovements = filteredMovements.filter(movement => {
      const concept = movement.concept === 0 ? "Ingreso" : "Retirada";
      const amount = numberWithPoint(movement.amount);
      const lastBalance = numberWithPoint(movement.lastBalance);
      const nextBalance = numberWithPoint(movement.nextBalance);
      const containsAmount = amount.includes(textFilter);
      const containsLastBalance = lastBalance.includes(textFilter);
      const containsNextBalance = nextBalance.includes(textFilter);

      return (
        concept.includes(textFilter) ||
        containsAmount ||
        containsLastBalance ||
        containsNextBalance
      );
    });
  }

  const initialMovement = (currentPage - 1) * take;
  const pageMovements = filteredMovements.slice(
    initialMovement,
    initialMovement + take
  );

  return (
    <>
      <Table>
        <Header />
        <tbody>
          {pageMovements.map(movement => (
            <tr key={movement.id}>
              <Cell>{movement.id}</Cell>
              <Cell>
                <div className="cell-date">
                  <div>
                    {movement.date.toLocaleDateString("es-es", {
                      month: "2-digit",
                      day: "2-digit",
                      year: "2-digit"
                    })}
                  </div>
                  <div>
                    {movement.date.toLocaleTimeString("es-es", {
                      hour: "2-digit",
                      minute: "2-digit"
                    })}
                  </div>
                </div>
              </Cell>
              <Cell>{movement.concept === 0 ? "Ingreso" : "Retirada"}</Cell>
              <Cell>{`${numberWithPoint(movement.amount)} €`}</Cell>
              <Cell>{`${numberWithPoint(movement.lastBalance)} €`}</Cell>
              <Cell>{`${numberWithPoint(movement.nextBalance)} €`}</Cell>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination total={filteredMovements.length} />
    </>
  );
};

export default MovementsList;
