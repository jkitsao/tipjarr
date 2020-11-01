import React from "react";

function Navigation() {
  return (
    <div className="flex flex-wrap  bg-transparent static top-0">
      <div className="w-full ">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-12 navbar-expand-lg bg-indigo-900">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
              <a
                className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                href="#pablo"
              >
                tipjarr.net
              </a>
              <button
                className="cursor-pointer text-xl leading-none px-3 py-2 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
              >
                <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              </button>
            </div>
            <div
              className="flex lg:flex-grow items-center"
              id="example-navbar-info"
            >
              <ul className="flex flex-col lg:flex-row list-none ml-auto">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    Discover
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
