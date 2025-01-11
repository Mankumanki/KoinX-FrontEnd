import { useEffect, useState } from "react";
import { useTrendingContext } from "../../Hooks/useTrendingContext";

function TrendingCoin({}) {
  const TrendingContext = useTrendingContext();
  const coin = TrendingContext.coinData.slice(0, 3);

  return (
    <section className="w-full" id="Trending_Coins_Widget">
      <div className="flex flex-col justify-center bg-white p-4 rounded-md w-full gap-3">
        <p className="text-lg font-semibold mb-2">Trending Coins (24h)</p>

        {coin.map((coinVal, idx) => {
          return (
            <a
              role="button"
              className="flex justify-between"
              key={coinVal?.item?.symbol}
              onClick={() => {
                TrendingContext.setActiveCoin(idx);
              }}
            >
              <div className="flex self-center gap-2">
                <img
                  className="self-center w-7 rounded-full"
                  src={coinVal?.item?.small}
                ></img>
                <p className="self-center text-xs font-medium">
                  {coinVal?.item?.name} ({coinVal?.item?.symbol})
                </p>
              </div>
              <p
                className={`self-center text-center p-1 rounded-md ${
                  coinVal?.item?.data?.price_change_percentage_24h.usd >= 0
                    ? "text-green-500 bg-green-100"
                    : "text-red-500 bg-red-100"
                } text-xs`}
              >
                {coinVal?.item?.data?.price_change_percentage_24h.usd >= 0
                  ? "\u25B2"
                  : "\u25BC"}{" "}
                {coinVal?.item?.data?.price_change_percentage_24h.usd?.toFixed(
                  2
                )}{" "}
                %
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default TrendingCoin;
