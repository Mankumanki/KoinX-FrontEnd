import TrendingCoin from "./TrendingCoin";

function GetStarted() {
  return (
    <div className="flex flex-col justify-start gap-4 max-[768px]:flex-col max-[992px]:flex-row w-475px max-[992px]:w-full">
      <section id="Get_Started" className="w-full">
        <div
          className="flex flex-col p-8 justify-center text-center gap-6 rounded-md w-full"
          style={{ backgroundColor: "#0052FE" }}
        >
          <p className="text-white self-center px-2 text-2xl font-semibold ">
            Get Started with KoinX for FREE
          </p>
          <p className="text-slate-200 self-center text-sm">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports
          </p>
          <img
            src="https://www.koinx.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofessionsals.713ce706.png&w=256&q=75"
            alt="Logo"
            className="w-48 self-center"
          ></img>

          <button className="text-black font-semibold self-center bg-white px-6 py-3 rounded-md text-sm group">
            <div className="flex justify-center text-center gap-2">
              <p className="self-center">Get Started for FREE</p>
              <i className="transition-transform fa-solid fa-arrow-right self-center group-hover:translate-x-1"></i>
            </div>
          </button>
        </div>
      </section>
      <TrendingCoin />
    </div>
  );
}

export default GetStarted;
