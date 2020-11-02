import React from "react";
import Link from "next/link";
import Navbar from "../../../currentuser/navbar/Navbar";
import Navigation from "../navbar/Navigation";
function Hero() {
  return (
    <main className="main_hero shadow-lg">
      {/* <Navbar /> */}
      {/* <Navigation /> */}
      <div className="lg:w-1/2 mx-auto pt-16 text-center px-3">
        <h2 className="text-white font-semibold font-mono text-xl sm:text-2xl xl:text-4xl sm:text-center">
          A micro-blogging platform enabling you to{" "}
          <span className="p-1 m-1 bg-yellow-200 text-gray-700">
            discover🔎
          </span>{" "}
          and{" "}
          <span className="p-1 m-1 bg-green-300 text-gray-800">share✅</span>{" "}
          tips on web design and development
        </h2>
        <div className="lg:w-1/4 mx-auto text-center pt-10">
          <Link href="/auth/signup">
            <button
              className="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style={{ transition: "all .15s ease" }}
            >
              share tips
            </button>
          </Link>
        </div>
      </div>
      {/* <span className="mx-2 my-2 text-sm bg-gray-200"> */}
      <span className="absolute bottom-0 opacity-50 left-0 mx-2 my-2 p-2 rounded text-xs sm:text-sm  text-gray-100 ">
        Photo by{" "}
        <a
          href="https://unsplash.com/@sam_truong?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          className="text-blue-400"
        >
          Sam Dan Truong
        </a>{" "}
        on{" "}
        <a
          href="https://unsplash.com/s/photos/tip-jar?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          className="text-blue-400"
        >
          Unsplash
        </a>
      </span>
      {/* </span> */}
    </main>
  );
}

export default Hero;
