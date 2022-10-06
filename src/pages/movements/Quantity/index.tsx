import { SecondaryText } from "components/Text";
import "./styles.scss";

const Quantity = () => {
  return (
    <div className="quantity">
      <SecondaryText bold>Saldo actual:</SecondaryText>
      <SecondaryText>1234€</SecondaryText>
    </div>
  );
};

export default Quantity;
