import React, { useState, useContext } from "react";
import Dropdown from "./dropdown/Dropdown";
import Link from "next/link";
import { motion } from "framer-motion";
import { UserInfo } from "../../../context/UserInfo";
function Navbar() {
  const { userInfo } = useContext(UserInfo);
  const [toggleDrop, setToggleDrop] = useState(false);
  const [togglemenu, setToggleMenu] = useState(false);
  const profile_image =
    userInfo?.profile_url?.secure_url ||
    "https://img.icons8.com/color/344/test-account.png";
  return (
    <nav
      className=" bg-primary sticky top-0 border-b-4 border-yellow-500 shadow-md lg:px-64"
      // style={{ zIndex: "10000" }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={() => setToggleMenu(!togglemenu)}
            >
              {/* <!-- Icon when menu is closed. -->
                <!--
                  Heroicon name: menu
      
                  Menu open: "hidden", Menu closed: "block"
                --> */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* <!-- Icon when menu is open. -->
                <!--
                  Heroicon name: x
      
                  Menu open: "block", Menu closed: "hidden"
                --> */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            {/* <div className="flex-shrink-0">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
                alt="Workflow logo"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-on-dark.svg"
                alt="Workflow logo"
              />
            </div> */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                <Link href="/home">
                  <a
                    href="#"
                    className="px-3 py-2 rounded-md text-lg font-medium leading-5 text-gray-200  focus:outline-none focus:text-gray-700 focus:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    Tipjarr.net
                  </a>
                </Link>
                <Link href="/new-tip">
                  <a
                    href="#"
                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-yellow-500 "
                  >
                    hi there {userInfo.username}
                  </a>
                </Link>
                <Link href="/new-tip">
                  <a
                    href="#"
                    className="ml-4 px-3 py-2 uppercase rounded-md text-sm font-medium leading-5 text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    Share tip
                  </a>
                </Link>
                <Link href="#">
                  <a
                    href="#"
                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    About
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              className="p-1 border-2 border-transparent text-gray-700 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              aria-label="Notifications"
            >
              {/* <!-- Heroicon name: bell --> */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            {/* <!-- Profile dropdown --> */}
            <div className="ml-3 relative">
              <div>
                <button
                  className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                  onClick={() => setToggleDrop(!toggleDrop)}
                >
                  <img
                    className="h-8 w-8 object-cover rounded-full"
                    src={profile_image}
                    alt=""
                  />
                </button>
              </div>
              {/* <!--
                  Profile dropdown panel, show/hide based on dropdown state.
      
                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                --> */}
              {toggleDrop && <Dropdown />}
            </div>
          </div>
        </div>
      </div>

      {/* <!--
          Mobile menu, toggle classNamees based on menu state.
      
          Menu open: "block", Menu closed: "hidden"
        --> */}
      <motion.div
        className={`${!togglemenu ? "hidden" : "block"} sm:hidden`}
        initial={{ y: -300, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="px-2 pt-2 pb-3">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Team
          </a>
          <a
            href="#"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Projects
          </a>
          <a
            href="#"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Calendar
          </a>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
