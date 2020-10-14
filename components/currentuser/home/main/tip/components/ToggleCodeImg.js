import React, { useState, useEffect } from "react";
import TipEditor from "./Editor";
function ToggleCodeImg({ tip }) {
  const [isCodeOpen, setIsCodeOpen] = useState(true);
  const [isImageOpen, setisImageOpen] = useState(false);

  //functions to handle opening and closing code and image
  const handleShowCode = () => {
    setIsCodeOpen(true);
    setisImageOpen(false);
  };
  const handleShowImage = () => {
    setisImageOpen(true);
    setIsCodeOpen(false);
  };

  //   if (!tip?.code && !tip?.imageData) {
  //     setIsCodeOpen(false);
  //     setisImageOpen(false);
  //   }

  return (
    <div className="w-full p-3 h-full">
      <span>
        {!tip?.code && (
          <p className="text-xs text-red-700">* code is not available</p>
        )}
        {!tip?.imageData && (
          <p className="text-xs text-red-700">* image is not available</p>
        )}
      </span>
      <div className="flex my-2 lg:my-5 lg:px-10">
        <button
          className="w-1/2 py-2 bg-green-700 text-gray-300 rounded-md border  text-center font-semibold"
          //   onClick={() => setIsCodeOpen(!isCodeOpen)}
          onClick={handleShowCode}
        >
          {isCodeOpen ? "code" : "show code"}
        </button>
        <button
          className="w-1/2 py-2 bg-green-700 text-gray-300 rounded-md border  text-center font-semibold"
          //   onClick={() => setisImageOpen(!isImageOpen)}
          onClick={handleShowImage}
        >
          {isImageOpen ? "image" : "show image"}
        </button>
      </div>
      {(tip?.code && isCodeOpen) || !tip?.imageData ? (
        <div className="sm:px-3 mx-auto w-full">
          <TipEditor tip={tip} />
        </div>
      ) : (
        ""
      )}
      {(tip?.imageData && isImageOpen) || !tip?.code ? (
        <div className="lg:px-3 lg:mx-auto w-full h-full lg:w-full lg:h-xxl">
          <img
            src={tip?.imageData?.secure_url}
            alt={tip?.title}
            className="w-full  object-cover lg:h-xxl"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ToggleCodeImg;
