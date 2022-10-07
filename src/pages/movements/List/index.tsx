import useWallet from "hooks/wallet/useWallet";
import numberWithPoint from "utils/numberWithPoint";
import Cell from "./Cell";

const MovementsList = () => {
  const { movements } = useWallet();
  return (
    <tbody>
      {movements.map(movement => (
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
  );
};

export default MovementsList;
