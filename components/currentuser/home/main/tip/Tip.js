import React from "react";
import Head from "next/head";
import { Icon } from "@chakra-ui/core";
import ToggleCodeImg from "./components/ToggleCodeImg";
import Link from "next/link";
import CommentBox from "./components/CommentBox";
import ToggleComments from "./components/ToggleComments";
import Linkify from "react-linkify";
import Upvote from "../card/components/vote/Upvote";
// import { useDisclosure } from "@chakra-ui/core";
// import Tipmodal from "./Tipmmodal";
import Content_loader from "../../loaders/Content_loader";
import axios from "axios";
import useSWR from "swr";
import { motion } from "framer-motion";
function Tip({ tip }) {
  // console.log({ tip });
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    `/api/tips/${tip._id}`,
    fetcher(`/api/tips/${tip._id}`)
  );
  return (
    <motion.div
      className="bg-teal-100 w-full py-2 sm:py-5 h-full  tip_gradient"
      // style={{ backgroundImage: `url(${data?.tip?.imageData?.url || null})` }}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {/* <div>{data && <Tip tip={data.tip} />}</div> */}
      <div>{!data && <Content_loader />}</div>
      <Head>
        {data && <title>{data?.tip?.title}</title>}
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      {/* <div className="">
        <Tipmodal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </div> */}
      <div className="flex flex-col justify-center py-5">
        <div className="lg:w-1/2 rounded-xl lg:mx-auto bg-white  sm:shadow-lg sm:rounded-md lg:pb-12 pt-12 px-1">
          <div className="p-1 sm:p-4 lg:px-10 lg:py-6 lg:w-full lg:mx-auto relative">
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 ">
              {data?.tip?.title}
            </h2>

            {/* <Upvote /> */}
          </div>
          {data?.tip?.link ? (
            <div
              className="p-3  w-3/4  text-blue-500 lg:mx-6 rounded-sm"
              title={data?.tip?.link?.title}
            >
              <span className="text-gray-700 font-semibold mx-1">source</span>
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
                href={`${data?.tip?.link?.source}`}
                target="_blank"
                className=" underline text-sm inline-block "
              >
                {data?.tip?.link?.title}
              </a>
            </div>
          ) : null}
          <div className="px-2 sm:px-5 bg-gray-100  py-3  border-l-4 border-gray-400 max-h-xl lg:mx-6 whitespace-pre-wrap lg:pr-5 ">
            <Linkify style={{ color: "blue" }}>
              <p className="text-gray-700 text-sm  lg:text-sm">
                {data?.tip?.body}
              </p>
            </Linkify>
          </div>
          <div>
            {/* toggle goes here */}
            {!data?.tip?.code && !data?.tip?.imageData?.url ? (
              ""
            ) : (
              <ToggleCodeImg tip={data?.tip} />
            )}
            <ToggleComments tip={data?.tip} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Tip;
