import { useEffect, useState } from "react";

export function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]), console.log("currency exchange rate", res);
      })
      .catch((error) => {
        console.log("fail to fetch exchange rate", error);
      });
  }, [currency]);
  return data;
}
