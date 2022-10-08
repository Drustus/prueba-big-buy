import BButton from "react-bootstrap/Button";
import Props from "./types";

const Button = ({ disabled, secondary, children, onClick }: Props) => {
  const variant = secondary ? "warning" : undefined;

  return (
    <BButton variant={variant} onClick={onClick} disabled={disabled}>
      {children}
    </BButton>
  );
};

export default Button;
