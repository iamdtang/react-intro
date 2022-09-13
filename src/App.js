import "./App.css";
import BitcoinPrices from "./BitcoinPrices";
import Coordinates from "./Coordinates";
import SelectCoin from "./SelectCoin";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

function App() {
  return (
    <div className="App">
      <h1>React Examples</h1>
      <div>
        <a
          href="https://itp404-react-intro.surge.sh/"
          target="_blank"
          rel="noreferrer"
        >
          https://itp404-react-intro.surge.sh
        </a>
      </div>
      <div>
        <h2>1. Counter 1 - useState</h2>
        <Counter1 />
      </div>
      <div>
        <h2>
          2. Counter 2 - useState and useEffect without a Dependency Array
        </h2>
        <Counter2 />
      </div>
      <div>
        <h2>3. Coordinates - useEffect with an Empty Dependency Array</h2>
        <Coordinates />
      </div>
      <div>
        <h2>
          4. Bitcoin Prices - useEffect with an Empty Dependency Array and a
          Loading Indicator
        </h2>
        <BitcoinPrices />
      </div>
      <div>
        <h2>5. Select a Coin - useEffect with a Dependency Array</h2>
        <SelectCoin />
      </div>
    </div>
  );
}

export default App;
