import "./styles.scss";
import Props from "./types";

const Cell = ({ children }: Props) => {
  return (
    <td>
      <div className="cell">{children}</div>
    </td>
  );
};

export default Cell;
