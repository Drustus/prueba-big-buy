import BTable from "react-bootstrap/Table";
import Header from "./Header";
import Row from "./Row";
import "./styles.scss";
import Props from "./types";

const Table = ({ children }: Props) => {
  return (
    <div className="content-table">
      <BTable className="table">{children}</BTable>
    </div>
  );
};

export default Table;
Table.Header = Header;
Table.Row = Row;
