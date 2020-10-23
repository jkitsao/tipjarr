import React from "react";
import Head from "next/head";
import { Icon } from "@chakra-ui/core";
// import Tipbar from "./components/Tipbar";
// import TipEditor from "./components/Editor";
import ToggleCodeImg from "./components/ToggleCodeImg";
import Link from "next/link";
import CommentBox from "./components/CommentBox";
import ToggleComments from "./components/ToggleComments";
import Linkify from "react-linkify";
import Upvote from "../card/components/vote/Upvote";

function Tip({ tip }) {
  console.log({ tip });
  return (
    <div className="">
      <Head>
        {tip && <title>{tip?.title}</title>}
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      <div className="">{/* <Tipbar /> */}</div>
      <div className="flex flex-col justify-center ">
        <div className="lg:w-1/2 lg:mx-auto bg-white  sm:shadow-lg sm:rounded-md lg:pb-12">
          <div className="p-4 sticky top-0 w-full bg-secondary border-b-4 border-yellow-500 z-50">
            <span>
              <Link href="/home">
                <a className="text-sm text-gray-200">
                  <Icon name="arrow-back" />
                  back{" "}
                </a>
              </Link>
            </span>
            <span className="mx-3 transition duration-500 ease-in-out bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white  px-4 py-2 rounded">
              <Link href="/new-tip">
                <a className="">share tip </a>
              </Link>
            </span>
          </div>
          <div className="p-4 lg:px-10 lg:py-6 lg:w-full lg:mx-auto relative">
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 w-1/2">
              {tip?.title}
            </h2>

            {/* <Upvote /> */}
          </div>
          {tip?.link ? (
            <div
              className="p-3 bg-gray-100 w-3/4 lg:w-1/2 whitespace-pre-wrap text-blue-500 mx-6 rounded-sm"
              title={tip?.link?.title}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 inline-block mx-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <a
                href={`${tip?.link?.source}`}
                target="_blank"
                className=" underline text-sm inline-block "
              >
                {tip?.link?.source}
              </a>
            </div>
          ) : null}
          <div className="px-5 bg-gray-100  py-3  border-l-4 border-gray-400 max-h-xl lg:mx-6 whitespace-pre-wrap ">
            <Linkify style={{ color: "blue" }}>
              <p className="text-gray-700 text-sm  lg:text-lg">{tip?.body}</p>
            </Linkify>
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
