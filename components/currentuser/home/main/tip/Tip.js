import React from "react";
import Head from "next/head";
import { Icon } from "@chakra-ui/core";
// import Tipbar from "./components/Tipbar";
// import TipEditor from "./components/Editor";
import ToggleCodeImg from "./components/ToggleCodeImg";
import Link from "next/link";
import CommentBox from "./components/CommentBox";
import ToggleComments from "./components/ToggleComments";
function Tip({ tip }) {
  console.log({ tip });
  return (
    <div className="">
      <Head>
        {tip && <title>{tip?.title}</title>}
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      <div className="">{/* <Tipbar /> */}</div>
      <div className="flex flex-col justify-center pt-3">
        <div className="lg:w-1/2 lg:mx-auto   sm:shadow-lg sm:rounded-md lg:pb-12">
          <div className="p-4 sticky top-0 w-full bg-gray-800 z-50">
            <span>
              <Link href="/home">
                <a className="text-sm text-gray-200">
                  <Icon name="arrow-back" />
                  back{" "}
                </a>
              </Link>
            </span>
            <span className="mx-3 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white  px-4 py-2 rounded">
              <Link href="/new-tip">
                <a className="">share tip </a>
              </Link>
            </span>
          </div>
          <div className="p-4 lg-px-6 lg:w-full lg:mx-auto">
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-800">
              {tip?.title}
            </h2>
          </div>
          <div className="px-5 bg-gray-100 my-2 py-3  border-l-4 border-gray-400 max-h-xl lg:mx-6 ">
            <h3 className="text-gray-700 text-sm sm:text-lg ">{tip?.body}</h3>
          </div>
          <div>
            {/* toggle goes here */}
            {!tip?.code && !tip?.imageData?.url ? (
              ""
            ) : (
              <ToggleCodeImg tip={tip} />
            )}
            <ToggleComments tip={tip} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tip;
