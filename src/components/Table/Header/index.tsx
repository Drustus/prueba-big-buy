import "./styles.scss";

import Props from "./types";

const Header = ({ children }: Props) => {
  return <th>{children}</th>;
};

export default Header;
