import React from "react";
import Card_info from "./components/Card_info";
import Card_footer from "./components/Card_footer";
import Link from "next/link";
function Card({ tip }) {
  const { title } = tip;
  // const slug = title.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="w-full lg:w-full overflow-hidden border-2 hover:border-gray-500 shadow-lg bg-white mx-auto my-2 cursor-pointer rounded-md ">
      <Card_info tip={tip} />
      <div className="p-2">
        {tip?.link ? (
          <a
            href={`${tip?.link?.source}`}
            target="_blank"
            className="text-xs ml-2 bg-teal-500 p-1 my-2 text-gray-100 font-semibold rounded-lg"
          >
            {tip?.link?.title}
          </a>
        ) : null}
        <Link href={`/tips/${tip._id}`}>
          <a>
            <h1 className="text-lg text-gray-900 hover:text-gray-800 font-semibold">
              {/* <img
              src="https://img.icons8.com/color/344/idea.png"
              alt=""
              className="h-6 w-6 hidden sm:inline-block ml-2 mx-1"
            /> */}
              <span className="text-lg sm:text-xl inline-block px-3">
                {tip.title}
              </span>
            </h1>
          </a>
        </Link>
        <h2 className="text-sm  text-green-900 inline-block lg:my-2 px-3">
          {tip.body.slice(0, 200)}...
        </h2>
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
      <Card_footer />
    </div>
  );
}

export default Card;
