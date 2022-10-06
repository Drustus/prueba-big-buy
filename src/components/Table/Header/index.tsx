import "./styles.scss";

import Props from "./types";

const Header = ({ headers }: Props) => {
  return (
    <thead>
      <tr className="table__header">
        {headers.map(header => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};

export default Header;
