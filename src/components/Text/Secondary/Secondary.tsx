import Props from "./types";
import "./styles.scss";

const Secondary = ({ children, bold }: Props) => {
  const boldClass = bold ? " bold" : "";
  return <div className={`secondary${boldClass}`}>{children}</div>;
};

export default Secondary;
