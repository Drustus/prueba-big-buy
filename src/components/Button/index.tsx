import BButton from "react-bootstrap/Button";
import Props from "./types";

const Button = ({ secondary, children }: Props) => {
  const variant = secondary ? "warning" : undefined;

  return <BButton variant={variant}>{children}</BButton>;
};

export default Button;
