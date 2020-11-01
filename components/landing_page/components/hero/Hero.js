import React from "react";
import Link from "next/link";
import Navbar from "../../../currentuser/navbar/Navbar";
function Hero() {
  return (
    <main className="main_hero">
      {/* <Navbar /> */}
      <div className="lg:w-1/2 mx-auto pt-32 text-center px-3">
        <h2 className="text-white font-semibold font-mono text-xl sm:text-2xl xl:text-5xl sm:text-center">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          enim deleniti at deserunt accusamus nam officia dolorum illum
          voluptate ea. */}
          A place to share tips,code,stories,new about web development and
          programming in General
        </h2>
        <div className="lg:w-1/4 mx-auto text-center pt-6">
          <Link href="/auth/login">
            <a className="text-white px-6 lg:px-10 py-2 lg:py-4 text-lg bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500  font-semibold  rounded">
              start now
            </a>
          </Link>
        </div>
      </div>
      {/* <span className="mx-2 my-2 text-sm bg-gray-200"> */}
      <span className="absolute bottom-0 opacity-50 left-0 mx-2 my-2 p-2 rounded text-xs sm:text-sm sm:bg-gray-700 text-gray-100 ">
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
