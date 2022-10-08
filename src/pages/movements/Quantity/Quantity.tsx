import { SecondaryText } from "components/Text";
import { WalletContext } from "contexts/wallet/WalletContext";
import { useContext } from "react";
import numberWithPoint from "utils/numberWithPoint";
import "./styles.scss";

const Quantity = () => {
  const { balance } = useContext(WalletContext);
  return (
    <div className="quantity">
      <SecondaryText bold>Saldo actual:</SecondaryText>
      <SecondaryText>{`${numberWithPoint(balance)} €`}</SecondaryText>
    </div>
  );
};

export default Quantity;
