import WalletProvider from "contexts/wallet/WalletContext";
import FilterProvider from "contexts/filter/FilterContext";
import "./App.scss";
import Movements from "./movements";

function App() {
  return (
    <div className="app">
      <WalletProvider>
        <FilterProvider>
          <Movements />
        </FilterProvider>
      </WalletProvider>
    </div>
  );
}

export default App;
