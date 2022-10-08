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
  const { dateIni, dateEnd } = useContext(FilterContext);

  const filteredMovements =
    dateIni && dateEnd
      ? movements.filter(movement => {
          return movement.date >= dateIni && movement.date <= dateEnd;
        })
      : movements;
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
