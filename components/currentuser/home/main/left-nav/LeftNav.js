import React from "react";
import Link from "next/link";

function LeftNav() {
  return (
    <section className=" lg:px-12  rounded-md  lg:my-3 border">
      <div className="flex lg:block py-2 sm:py-5 text-gray-800 font-semibold ">
        <span className="block py-2 px-3 my-2 cursor-pointer hover:bg-gray-300 hover:text-gray-800 rounded-md">
          Popular
        </span>
        <span className="block py-2 px-3 my-2 cursor-pointer hover:bg-gray-300 hover:text-gray-800 rounded-md">
          All
        </span>
        <span className="block py-2 px-3 my-2 cursor-pointer hover:bg-gray-300 hover:text-gray-800 rounded-md">
          Coding
        </span>
        <span className="block py-2 px-3 my-2 cursor-pointer hover:bg-gray-300 hover:text-gray-800 rounded-md">
          Newest
        </span>

        <button
          type="button"
          class="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold text-sm px-4 py-2 rounded"
        >
          <Link href="/new-tip">
            <a> Share tip</a>
          </Link>
        </button>
      </div>
    </section>
  );
}

export default LeftNav;
