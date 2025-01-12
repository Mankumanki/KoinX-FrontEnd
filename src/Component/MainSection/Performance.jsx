function Performance() {
  return (
    <div className="mt-4 flex flex-col">
      <div className="flex gap-6 text-center items-center text-sm font-medium text-[#3E424A] py-4 flex-wrap">
        <a
          role="button"
          className="transition-all hover:border-b-4 hover:border-b-blue-600 hover:text-blue-600"
        >
          Overview
        </a>
        <a
          role="button"
          className="transition-all hover:border-b-4 hover:border-b-blue-600 hover:text-blue-600"
        >
          Fundamentals
        </a>
        <a
          role="button"
          className="transition-all hover:border-b-4 hover:border-b-blue-600 hover:text-blue-600 "
        >
          News Insights
        </a>
        <a
          role="button"
          className="transition-all hover:border-b-4 hover:border-b-blue-600 hover:text-blue-600 "
        >
          Sentiments
        </a>
        <a
          role="button"
          className="transition-all hover:border-b-4 hover:border-b-blue-600 hover:text-blue-600 "
        >
          Team
        </a>
        <a
          role="button"
          className="transition-all hover:border-b-4 hover:border-b-blue-600 hover:text-blue-600 "
        >
          Technicals
        </a>
        <a
          role="button"
          className="transition-all hover:border-b-4 hover:border-b-blue-600 hover:text-blue-600"
        >
          Tokenomics
        </a>
      </div>

      <section id="Performance_Section">
        <div className="bg-white mt-5 rounded-lg p-6 h-fit">
          <div>
            <div className="text-2xl font-semibold text-[#0F1629]">
              Performance
            </div>
            <div className="py-4 mt-2">
              <div className="flex justify-between gap-14 max-[768px]:gap-6">
                <div className="text-start">
                  <div className="text-sm text-[#44475B] font-normal p-1 max-[576px]:text-xs">
                    Today’s Low
                  </div>
                  <div className="text-[#44475B] text-lg font-medium p-1 max-[576px]:text-sm">
                    46,930.22
                  </div>
                </div>

                <div className="w-full flex">
                  <div className="relative w-full h-2 self-center bg-gradient-to-r from-red-500 via-orange-500 to-green-500 rounded-2xl">
                    <div className="absolute top-full left-3/4 max-[576px]:left-1/2">
                      <svg
                        viewBox="0 0 100 100"
                        className="lg:w-3 w-2 fill-current text-black ml-7"
                      >
                        <polygon points="0,100 50,0 100,100"></polygon>
                      </svg>
                      <span className="text-[#44475B] text-sm font-normal max-[576px]:text-xs">
                        $48,637.83
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-end">
                  <div className="text-sm text-[#44475B] font-normal p-1 max-[576px]:text-xs ">
                    Today’s High
                  </div>
                  <div className="text-[#44475B] text-lg font-medium p-1 max-[576px]:text-sm">
                    49,343.83
                  </div>
                </div>
              </div>

              <div className="flex justify-between gap-14 mt-4 max-[768px]:gap-6">
                <div className="text-start">
                  <div className="text-sm text-[#44475B] font-normal p-1 max-[576px]:text-xs">
                    52W Low
                  </div>
                  <div className="text-[#44475B] text-lg font-medium p-1 max-[576px]:text-sm">
                    16,930.22{" "}
                  </div>
                </div>

                <div className="w-full flex">
                  <div className="relative w-full h-2 self-center bg-gradient-to-r from-red-500 via-orange-500 to-green-500 rounded-2xl"></div>
                </div>

                <div className="text-end">
                  <div className="text-sm text-[#44475B] font-normal p-1 max-[576px]:text-xs">
                    52W High{" "}
                  </div>
                  <div className="text-[#44475B] text-lg font-medium p-1 max-[576px]:text-sm">
                    49,743.83{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center">
                <div className="text-[#44475B] font-semibold text-xl">
                  Fundamentals
                </div>
                <div className="">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-[#ABB9BF] text-lg ml-2"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm21 312h-42V235h42v125zm0-166h-42v-42h42v42z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex mb-8 max-[1200px]:flex-col justify-between w-full">
                <div className="w-1/2 max-[1200px]:w-full lg:mr-10 mt-3  ">
                  <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                    <div className="text-[#768396] text-sm font-semibold max-[576px]:text-xs">
                      Bitcoin Price
                    </div>
                    <div className="text-[#111827] text-sm font-semibold min-[576px]:mr-4 max-[576px]:text-xs">
                      $16,815.46
                    </div>
                  </div>
                  <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                    <div className="text-[#768396] text-sm font-semibold max-[576px]:text-xs">
                      24h Low / 24h High{" "}
                    </div>
                    <div className="text-[#111827] text-sm font-semibold min-[576px]:mr-4 max-[576px]:text-xs">
                      $16,382.07 / $16,874.12
                    </div>
                  </div>
                  <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                    <div className="text-[#768396] text-sm font-semibold max-[576px]:text-xs">
                      7d Low / 7d High
                    </div>
                    <div className="text-[#111827] text-sm font-semibold min-[576px]:mr-4 max-[576px]:text-xs">
                      $16,382.07 / $16,874.12
                    </div>
                  </div>
                  <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                    <div className="text-[#768396] text-sm font-semibold max-[576px]:text-xs">
                      Trading Volume
                    </div>
                    <div className="text-[#111827] text-sm font-semibold min-[576px]:mr-4 max-[576px]:text-xs">
                      $23,249,202,782
                    </div>
                  </div>
                  <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                    <div className="text-[#768396] text-sm font-semibold max-[576px]:text-xs">
                      Market Cap Rank
                    </div>
                    <div className="text-[#111827] text-sm font-semibold min-[576px]:mr-4 max-[576px]:text-xs">
                      #1
                    </div>
                  </div>
                </div>

                <div className="max-[1200px]:w-full w-1/2 max-[1200px]:m-0 mt-3">
                  <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                    <div className="text-[#768396] text-sm font-semibold max-[576px]:text-xs">
                      Market Cap
                    </div>
                    <div className="text-[#111827] text-sm font-semibold min-[576px]:mr-4 max-[576px]:text-xs">
                      $323,507,290,047
                    </div>
                  </div>
                  <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                    <div className="text-[#768396] text-sm font-semibold max-[576px]:text-xs">
                      Market Cap Dominance
                    </div>
                    <div className="text-[#111827] text-sm font-semibold min-[576px]:mr-4 max-[576px]:text-xs">
                      38.343%
                    </div>
                  </div>
                  <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                    <div className="text-[#768396] text-sm font-semibold max-[576px]:text-xs">
                      Volume / Market Cap
                    </div>
                    <div className="text-[#111827] text-sm font-semibold min-[576px]:mr-4 max-[576px]:text-xs">
                      0.0718
                    </div>
                  </div>
                  <div className="flex justify-between py-3 border-b-2 border-[#D3E0E6] items-center">
                    <div className="text-[#768396] text-sm font-semibold max-[576px]:text-xs ">
                      All-Time High
                    </div>
                    <div className="text-[#111827] text-sm font-semibold min-[576px]:mr-4 max-[576px]:text-xs -p-2">
                      <div className="text-end">
                        $69,044.77 <span className="text-red-500">-75.6%</span>
                      </div>
                      <div className="text-xs font-normal">
                        Nov 10, 2021 (about 1 year)
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between py-3 border-b-2 border-[#D3E0E6] items-center">
                    <div className="text-[#768396] text-sm font-semibold max-[576px]:text-xs">
                      All-Time Low
                    </div>
                    <div className="text-[#111827] text-sm font-semibold min-[576px]:mr-4 max-[576px]:text-xs -p-2">
                      <div className="text-end">
                        $67.81 <span className="text-green-500">24729.1%</span>
                      </div>
                      <div className="text-xs font-normal">
                        Jul 06, 2013 (over 9 years)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Performance;
