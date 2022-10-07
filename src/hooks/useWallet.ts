import { WalletContext } from "contexts/WalletContext";
import { useContext, useEffect } from "react";

const useWallet = () => {
  const { movements, balance } = useContext(WalletContext);

  return { movements, balance };
};

export default useWallet;
