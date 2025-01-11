import { useEffect } from "react";
import Header from "../Component/Header/Header";
import "../../public/CSS/App.css";
import CoinChart from "../Component/MainSection/CoinChart";
import GetStarted from "../Component/MainSection/GetStarted";
import { useTrendingContext } from "../Hooks/useTrendingContext";
import useTrendingItem from "../Hooks/useTrendingItem";
import YouMayLike from "../Component/MainSection/YouMayLike";

function Home() {
  const TrendingContext = useTrendingContext();
  const data = useTrendingItem();

  useEffect(() => {
    console.log(data);
    TrendingContext.setCoinData(data);
    TrendingContext.setActiveCoin(0);
  }, [data]);

  const coinData = TrendingContext.coinData[TrendingContext.activeCoin];

  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="flex flex-col mx-10 my-3 max-[768px]:mx-4">
          <p className="text-sm text-slate-500 mb-3">
            Cryptocurrencies <i className="fa-solid fa-angle-right text-xs"></i>
            <i className="fa-solid fa-angle-right text-xs"></i>
            <span className="font-semibold text-black">
              {" "}
              {coinData?.item?.name}
            </span>
          </p>
          <div className="flex gap-4 max-[992px]:flex-col">
            <CoinChart />
            <GetStarted />
          </div>
        </div>
        <YouMayLike />
      </main>
    </>
  );
}
export default Home;
