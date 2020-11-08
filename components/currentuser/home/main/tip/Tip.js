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
import parse from "html-react-parser";
// import Tipmodal from "./Tipmmodal";
import Content_loader from "../../loaders/Content_loader";
import axios from "axios";
import useSWR from "swr";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import urlSlug from "url-slug";
function Tip({ tip }) {
  // console.log({ tip });
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    `/api/tips/${tip._id}`,
    fetcher(`/api/tips/${tip._id}`)
  );
  dayjs.extend(relativeTime);
  dayjs.extend(updateLocale);
  dayjs.updateLocale("en", {
    relativeTime: {
      future: " %s",
      past: "%s ago",
      s: "a few seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days ago",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    },
  });
  const date = dayjs(data?.tip?.createdAt).format("DD/MM/YYYY");
  // const mydate = dayjs();
  // const c = mydate.from(date);
  return (
    <motion.div
      className="bg-teal-100 w-full py-2 sm:py-5 h-full  tip_gradient"
      // style={{ backgroundImage: `url(${data?.tip?.imageData?.url || null})` }}
      initial={{ opacity: 0.7 }}
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
        <meta charset="UTF-8" />
        <meta name="description" content={data?.tip?.body} />
        <meta name="keywords" content={data?.tip?.title} />
        <meta name="author" content={data?.tip?.user?.username} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      {/* <div className="">
        <Tipmodal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </div> */}
      <div className="flex flex-col justify-center sm:py-5">
        <div className="lg:w-1/2 rounded-xl lg:mx-auto bg-white  sm:rounded-md lg:pb-12 sm:pt-12 px-1">
          <div className="p-1 sm:p-4 lg:px-10 lg:py-6 lg:w-full lg:mx-auto relative mt-10 lg:mt-3 pt-3">
            <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 leading-tight ">
              {data?.tip?.title}
            </h2>

            {/* <Upvote /> */}
          </div>

          <div
            className=" my-1 text-blue-500 lg:mx-6 rounded-sm"
            title={data?.tip?.link?.title}
          >
            <div className="text-sm text-gray-800 font-bold inline mx-6">
              <img
                src={
                  tip?.user?.profile_url?.secure_url ||
                  "https://img.icons8.com/color/344/test-account.png"
                }
                alt=""
                className="w-6 h-6 mx-1 inline rounded-full object-cover"
              />
              {data?.tip?.user?.username}
              <span className="font-normal mx-3">{date}</span>
            </div>
            {data?.tip?.link ? (
              <div className="block ml-5 my-2 lg:inline">
                <span className="text-gray-700 w-1/4 font-semibold mx-1">
                  source
                </span>
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
                  className=" underline text-sm text-blue-500 inline-block "
                >
                  {data?.tip?.link?.title}
                </a>
              </div>
            ) : null}
          </div>

          <div className="px-2 sm:px-5  py-3 max-h-xl lg:mx-6 whitespace-pre-wrap  ">
            <Linkify style={{ color: "blue" }}>
              {data && data.tip ? (
                <article className="prose prose-xl max-w-none">
                  {parse(data?.tip?.body, { trim: true })}
                </article>
              ) : null}
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
