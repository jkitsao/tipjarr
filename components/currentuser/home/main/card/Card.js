import React from "react";
import Card_info from "./components/Card_info";
import Card_footer from "./components/Card_footer";
import Link from "next/link";
import Linkify from "react-linkify";
function Card({ tip }) {
  const { title } = tip;
  // const slug = title.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="w-full lg:w-full overflow-hidden border hover:border-gray-500 shadow-sm bg-white mx-auto my-2 cursor-pointer rounded-md sm:pl-4">
      <Card_info tip={tip} />
      <div className="p-2">
        <Link href={`/tips/${tip._id}`}>
          <a>
            <h1 className="text-lg text-gray-900 sm:max-w-xl sm:whitespace-pre-wrap hover:text-gray-800 font-semibold ">
              {/* <img
              src="https://img.icons8.com/color/344/idea.png"
              alt=""
              className="h-6 w-6 hidden sm:inline-block ml-2 mx-1"
            /> */}
              <span className="text-lg sm:text-xl hover:underline inline-block px-3">
                {tip.title}
              </span>
            </h1>
          </a>
        </Link>
        {tip?.link ? (
          <div className="px-3 py-2 text-blue-500 rounded-sm">
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
              className=" underline text-xs inline-block "
            >
              {tip?.link?.title}
            </a>
          </div>
        ) : null}
        <div className="whitespace-pre-wrap">
          <Linkify>
            <p className="text-sm  text-green-900 inline-block lg:my-2 px-3">
              {tip.body.slice(0, 500)}
              {tip.body.length > 500 && "..."}
            </p>
          </Linkify>
        </div>
      </div>

      {
        tip?.imageData?.url ? (
          <div className="p-1">
            <img
              src={tip.imageData.secure_url}
              className="object-cover h-lg w-full lg:mx-2  rounded "
            />
          </div>
        ) : (
          <div></div>
        )
        // ) : (
        //   <div className="text-center">
        //     <iframe
        //       src="https://giphy.com/embed/SUj2bzYiaMcqIOCVRr"
        //       // width="100"
        //       // height="200"
        //       frameBorder="0"
        //       class="giphy-embed mx-auto w-full h-lg"
        //       allowFullScreen
        //     ></iframe>
        //   </div>
        // )
      }
      <hr />
      <Card_footer />
    </div>
  );
}

export default Card;
