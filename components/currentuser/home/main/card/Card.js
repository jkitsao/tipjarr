import React from "react";
import Card_info from "./components/Card_info";
import Card_footer from "./components/Card_footer";
import Link from "next/link";
function Card({ tip }) {
  return (
    <div className="w-full lg:w-full overflow-hidden hover:border border-gray-700 shadow-lg bg-white mx-auto my-2 cursor-pointer rounded-md ">
      <Link href={`/tips/${tip._id}`}>
        <a>
          <Card_info tip={tip} />
          <div className="p-2">
            {tip?.link ? (
              <a
                href={`${tip?.link?.source}`}
                className="text-xs ml-2 bg-teal-500 p-1 my-2 text-gray-100 font-semibold rounded-lg"
              >
                {tip?.link?.title}
              </a>
            ) : null}
            <h1 className="text-lg text-gray-700 hover:text-gray-800 font-semibold">
              {/* <img
              src="https://img.icons8.com/color/344/idea.png"
              alt=""
              className="h-6 w-6 hidden sm:inline-block ml-2 mx-1"
            /> */}
              <span className="text-lg sm:text-xl inline-block px-3">
                {tip.title}
              </span>
            </h1>
            <h2 className="text-sm  text-gray-700 inline-block lg:my-2 px-3">
              {tip.body.slice(0, 200)}...
            </h2>
          </div>
        </a>
      </Link>
      {
        tip.imageData ? (
          <div>
            <img
              src={tip.imageData.secure_url}
              className="object-cover h-xl w-full lg:mx-2  rounded "
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
      <Card_footer />
    </div>
  );
}

export default Card;
