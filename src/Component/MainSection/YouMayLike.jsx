import { useState } from "react";
import { useTrendingContext } from "../../Hooks/useTrendingContext";
import { useViewport } from "react-viewport-hooks";

function YouMayLike() {
  const { vw, vh } = useViewport();
  const TrendingContext = useTrendingContext();
  const coinData = TrendingContext.coinData;
  const coins = coinData.slice(3, coinData.length);
  const [idx, setIdx] = useState(0);

  function setCarouselEndPoint() {
    if (vw >= 1400) {
      setIdx(idx + 1 > 6 ? 0 : idx + 1);
    } else if (vw < 1400 && vw >= 992) {
      setIdx(idx + 1 > 8 ? 0 : idx + 1);
    } else if (vw < 992 && vw >= 768) {
      setIdx(idx + 1 > 9 ? 0 : idx + 1);
    } else if (vw < 768 && vw >= 496) {
      setIdx(idx + 1 > 10 ? 0 : idx + 1);
    } else if (vw < 496) {
      setIdx(idx + 1 > 11 ? 0 : idx + 1);
    }
  }

  return (
    <section
      id="You_May_Like"
      className="bg-white px-10 py-16 max-[768px]:p-4 mt-10 "
    >
      <div className="pb-5">
        <p className="text-xl font-semibold">You May Also Like</p>
      </div>
      <div id="coins-wrapper" className="relative overflow-hidden">
        <div className="w-8 h-8 flex justify-center z-30 absolute top-1/2 -translate-y-1/2 right-0 p-3 rounded-full border border-gray-400 bg-slate-100">
          <a
            className="self-center"
            role="button"
            onClick={() => {
              setCarouselEndPoint();
            }}
          >
            <i className="my-auto text-center text-black text-sm fa-solid fa-angle-right"></i>
          </a>
        </div>

        <div
          className="flex gap-2"
          style={{
            width:
              vw < 1400 && vw >= 992
                ? "300%"
                : vw < 992 && vw >= 768
                ? "400%"
                : vw < 768 && vw >= 496
                ? "600%"
                : vw < 496
                ? "1200%"
                : "200%",
          }}
        >
          {coins.map((coin) => {
            return (
              <div
                className="flex flex-col gap-2 border w-full border-gray-300 rounded-md p-3 transition-transform delay-100"
                key={coin?.item?.symbol}
                style={{
                  transform: `translateX(calc(${-idx * 100}% - ${idx}*0.5rem))`,
                }}
              >
                <div className="flex gap-2">
                  <img
                    className="rounded-full w-8 self-center"
                    alt={coin?.item?.symbol}
                    src={coin?.item?.small}
                  ></img>
                  <p className="text-sm self-center">{coin?.item?.symbol}</p>
                  <p
                    className={`self-center text-center p-1 rounded-md ${
                      coin?.item?.data?.price_change_percentage_24h.usd >= 0
                        ? "text-green-500 bg-green-100"
                        : "text-red-500 bg-red-100"
                    } text-xs`}
                  >
                    {coin?.item?.data?.price_change_percentage_24h.usd >= 0
                      ? "\u25B2"
                      : "\u25BC"}{" "}
                    {coin?.item?.data?.price_change_percentage_24h.usd?.toFixed(
                      2
                    )}{" "}
                    %
                  </p>
                </div>
                <p className="font-semibold">
                  ${coin?.item?.data?.price.toFixed(6)}
                </p>
                <img
                  className="w-52 self-center px-5"
                  alt={coin?.item?.name}
                  src={coin?.item?.data?.sparkline}
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default YouMayLike;
