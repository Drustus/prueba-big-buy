import "./styles.scss";
import Props from "./types";

const Title = ({ children }: Props) => {
  return <div className="title">{children}</div>;
};

export default Title;
