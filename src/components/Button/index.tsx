import Props from "./types";
import "./styles.scss";

const Button = ({ secondary, children }: Props) => {
  const className = secondary ? "secondary-button" : "primary-button";
  return (
    <button className={`${className} btn`}>
      <div className={`${className}-text`}>{children}</div>
    </button>
  );
};

export default Button;
