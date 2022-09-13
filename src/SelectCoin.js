import { useEffect, useState } from "react";

export default function SelectCoin() {
  const [coin, setCoin] = useState("BTC");
  const [usd, setUsd] = useState();

  function fetchPrice(coin) {
    return fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=USD`
    ).then((response) => {
      return response.json();
    });
  }

  // Coin is updating but not the price
  useEffect(() => {
    fetchPrice(coin).then((data) => {
      setUsd(data.USD);
    });
  }, []);

  return (
    <div>
      <div className="mb-5">
        ${usd} for {coin}
      </div>

      <button
        onClick={() => {
          setCoin("BTC");
        }}
      >
        BTC
      </button>

      <button
        onClick={() => {
          setCoin("ETH");
        }}
      >
        ETH
      </button>
    </div>
  );
}
