import instance from "../utils/CoingeckoApiInst";
import { useEffect, useState } from "react";

function useTrendingItem() {
  const [coinArr, setCoinArr] = useState([]);
  useEffect(() => {
    instance
      .get("/search/trending")
      .then((response) => {
        setCoinArr(response.data.coins);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return coinArr;
}

export default useTrendingItem;
