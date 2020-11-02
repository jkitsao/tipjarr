import React from "react";
import Link from "next/link";
function Navigation() {
  return (
    <div className="flex flex-wrap  bg-transparent static top-0">
      <div className="w-full ">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-4 navbar-expand-lg  border-b-2 border-yellow-500 bg-indigo-900">
          <div className=" px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
              <Link href="/">
                <a
                  className="text-xl  font-bold leading-relaxed inline-block mr-4 py-2  text-white"
                  // href="#pablo"
                >
                  tipjarr.net
                </a>
              </Link>
              {/* <button
                className="cursor-pointer text-xl leading-none px-3 py-2 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
              >
                <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              </button> */}
            </div>
            <div
              className="flex  overflow-x-scroll sm:overflow-hidden items-center"
              id="example-navbar-info"
            >
              <ul className="flex w-full lg:flex-row list-none overflow-x-scroll sm:overflow-hidden ml-auto">
                <li className="nav-item">
                  <Link href="/auth/signup">
                    <a
                      className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                      //   href="#pablo"
                    >
                      register
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/new-tip">
                    <a
                      className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                      //   href="#pablo"
                    >
                      tip
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    // href="#pablo"
                  >
                    About
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
