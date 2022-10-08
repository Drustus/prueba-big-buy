import WalletProvider from "contexts/wallet/WalletContext";
import "./App.scss";
import Movements from "./movements";

function App() {
  return (
    <div className="app">
      <WalletProvider>
        <Movements />
      </WalletProvider>
    </div>
  );
}

export default App;
