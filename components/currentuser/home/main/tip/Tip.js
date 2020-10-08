import React from "react";
import Head from "next/head";
function Tip({ tip }) {
  console.log({ tip });
  return (
    <div className="flex justify-center py-5 sm:py-16 ">
      <Head>
        <title>{tip?.title}</title>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      <div className="lg:w-1/2 lg:mx-auto border-t border-green-600 rounded-md shadow-md p-6">
        <div className="p-4 lg:w-3/4 lg:mx-auto">
          <div className="w-1/4 mx-auto">
            <img
              src="https://img.icons8.com/color/344/idea.png"
              alt=""
              className="h-16 w-16 hidden sm:inline-block ml-2 mx-1"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">{tip?.title}</h2>
        </div>
        <div></div>
        <div className="px-3 lg:px-32 py-2 lg:pb-3">
          <h3 className="text-gray-700 text-lg">{tip?.body}</h3>
        </div>
        {tip.imageData && (
          <div className="px-3 mx-auto w-full lg:w-3/4">
            <img
              src={tip?.imageData.secure_url}
              alt={tip?.title}
              className="w-full object-cover lg:h-xl"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Tip;
