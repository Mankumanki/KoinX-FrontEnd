import TradingViewWidget from "./TradingViewWidget";
import AboutSection from "./AboutSection";
import TokenNomics from "./TokeNomics";
import { useTrendingContext } from "../../Hooks/useTrendingContext";
import TeamSection from "./TeamSection";
import Performance from "./Performance";

function CoinChart() {
  const TrendingContext = useTrendingContext();
  const coinData = TrendingContext.coinData[TrendingContext.activeCoin];

  return (
    <section className="w-full">
      <div className="bg-white rounded-md">
        <div className="flex gap-9 px-4 py-8 max-[476px]:gap-4">
          <div className="flex gap-2 self-center">
            <img
              className="rounded-full w-10 self-center max-[476px]:w-7"
              src={coinData?.item?.small}
              alt="Coin Logo"
            ></img>
            <p className="self-center font-semibold text-lg max-[476px]:text-sm">
              {coinData?.item?.name}
            </p>
            <p className="text-slate-400 self-center text-xs font-semibold">
              {coinData?.item?.symbol}
            </p>
          </div>
          <p className="self-center text-white bg-gray-500 py-1 px-2 rounded-md text-sm max-[476px]:text-xs">
            Rank #{coinData?.item?.score + 1}
          </p>
        </div>
        <div className="flex gap-5 px-4 pt-4 pb-6 ">
          <p className="text-2xl font-semibold self-center max-[476px]:text-xl">
            {coinData?.item?.data?.market_cap}
          </p>
          <p
            className={`self-center text-center p-1 rounded-md ${
              coinData?.item?.data?.price_change_percentage_24h.usd >= 0
                ? "text-green-500 bg-green-100"
                : "text-red-500 bg-red-100"
            } text-xs`}
          >
            {coinData?.item?.data?.price_change_percentage_24h.usd >= 0
              ? "\u25B2"
              : "\u25BC"}{" "}
            {coinData?.item?.data?.price_change_percentage_24h.usd?.toFixed(2)}{" "}
            %
          </p>
          <p className="text-slate-400 self-center text-xs">(24H)</p>
        </div>
        <TradingViewWidget symbol={`MEXC:${coinData?.item?.symbol}USDT`} />
      </div>
      <Performance />
      <AboutSection />
      <TokenNomics />
      <TeamSection />
    </section>
  );
}

export default CoinChart;
