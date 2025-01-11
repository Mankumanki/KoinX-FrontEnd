import { Link } from "react-router";
import navBarConfig from "../../Config/nav-bar.json";
import { Fade, Fade as Hamburger } from "hamburger-react";
import { useViewport } from "react-viewport-hooks";
import { useState } from "react";

function Header() {
  const { vw, vh } = useViewport();

  return vw > 900 ? <DesktopHeader /> : <MobileHeader />;
}

function DesktopHeader() {
  return (
    <header className="flex justify-between px-3 bg-white shadow-md w-full h-20 fixed z-10">
      <div className="px-10 self-center">
        <Link to="/" className="outline-none">
          <img
            src="https://www.koinx.com/_next/static/media/Logo.99e6a1dc.svg"
            className="w-32"
            alt="KoinX company logo"
          ></img>
        </Link>
      </div>
      <div className="flex gap-10 text-center self-center px-10">
        <div className="flex gap-8 text-center self-center font-semibold">
          {navBarConfig.header_links.map((link) => {
            return (
              <div key={link.title} className="group">
                <Link
                  to={link.url}
                  className="group-hover:border-b-2 group-hover:border-gray-700 py-1"
                >
                  <span>{link.title}</span>
                </Link>
              </div>
            );
          })}
        </div>
        <Link
          to="/"
          className="transition-colors bg-blue-600 hover:bg-blue-900 flex w-32 h-9 rounded-md group justify-center"
        >
          <span className="text-white font-semibold self-center">
            Get Started
          </span>
        </Link>
      </div>
    </header>
  );
}

function MobileHeader() {
  const [isOpen, setOpen] = useState(-1);
  function checkToggling(toggle) {
    if (toggle) {
      setOpen(1);
    } else {
      setOpen(0);
    }
  }
  return (
    <header className="flex justify-between px-6 bg-white shadow-md w-full h-20 fixed z-10">
      <div className="self-center">
        <Link to="/" className="outline-none">
          <img
            src="https://www.koinx.com/_next/static/media/Logo.99e6a1dc.svg"
            className="w-24"
          ></img>
        </Link>
      </div>
      <div className="self-center ">
        <Fade
          onToggle={(toggle) => {
            checkToggling(toggle);
          }}
          size={26}
          color="black"
          label="Show menu"
        />
      </div>

      <div
        className={`absolute left-0 w-full h-64 top-20 bg-gray-800 overflow-hidden shadow-md shadow-gray-600 ${
          isOpen == 1
            ? "animate-slideDown"
            : isOpen == 0
            ? "animate-slideUp forward"
            : "hidden"
        }`}
      >
        <div className="flex flex-col w-full gap-10 self-center p-5">
          <div className="flex flex-col w-full gap-4 self-center font-semibold">
            {navBarConfig.header_links.map((link) => {
              return (
                <div
                  key={link.title}
                  className="w-full border-b-2 border-b-slate-500"
                >
                  <Link
                    to={link.url}
                    className="group-hover:border-b-2 py-1 block w-full group"
                  >
                    <span className="text-slate-300 group-hover:text-white">
                      {link.title}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
          <Link
            to="/"
            className=" self-center transition-colors bg-blue-600 hover:bg-blue-700 flex w-32 h-9 rounded-md group justify-center"
          >
            <span className="text-white font-semibold self-center">
              Get Started
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
