import { SecondaryText } from "components/Text";
import useWallet from "hooks/useWallet";
import numberWithPoint from "utils/numberWithPoint";
import "./styles.scss";

const Quantity = () => {
  const { balance } = useWallet();
  return (
    <div className="quantity">
      <SecondaryText bold>Saldo actual:</SecondaryText>
      <SecondaryText>{`${numberWithPoint(balance)} €`}</SecondaryText>
    </div>
  );
};

export default Quantity;
