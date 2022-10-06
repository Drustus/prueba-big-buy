import BTable from "react-bootstrap/Table";
import Header from "./Header";
import Row from "./Row";
import "./styles.scss";
import Props from "./types";

const Table = ({ children }: Props) => {
  return (
    <BTable className="table">
      {children}
      {/* <tbody>
        <tr>
          <td>1234567</td>
          <td>13/08/21 15:51</td>
          <td>Retirada</td>
          <td>14,73€</td>
          <td>91,85€</td>
          <td>24,56€</td>
        </tr>
        <tr>
          <td>1234567</td>
          <td>13/08/21 15:51</td>
          <td>Retirada</td>
          <td>14,73€</td>
          <td>91,85€</td>
          <td>24,56€</td>
        </tr>
        <tr>
          <td>1234567</td>
          <td>13/08/21 15:51</td>
          <td>Retirada</td>
          <td>14,73€</td>
          <td>91,85€</td>
          <td>24,56€</td>
        </tr>
        <tr>
          <td>1234567</td>
          <td>13/08/21 15:51</td>
          <td>Retirada</td>
          <td>14,73€</td>
          <td>91,85€</td>
          <td>24,56€</td>
        </tr>
        <tr>
          <td>1234567</td>
          <td>13/08/21 15:51</td>
          <td>Retirada</td>
          <td>14,73€</td>
          <td>91,85€</td>
          <td>24,56€</td>
        </tr>
      </tbody> */}
    </BTable>
  );
};

export default Table;
Table.Header = Header;
Table.Row = Row;
