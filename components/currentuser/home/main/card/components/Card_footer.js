import React, { useState } from "react";

function Card_footer() {
  const [like, setLikes] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const handleLike = () => {
    if (userLiked && like > 0) {
      setUserLiked(like - 1);
      setUserLiked(false);
    }
    if (!userLiked) {
      setLikes(like + 1);
      setUserLiked(true);
    }
  };
  return (
    <div className="py-3  rounded px-2 hidden sm:block ">
      <div className="flex px-2 justify-between">
        <div class="px-6">
          <span class="inline-block rounded-full px-1 py-1 text-sm font-semibold text-blue-600 hover:text-blue-500 mb-2">
            #javascript
          </span>
          <span class="inline-block rounded-full px-1 py-1 text-sm font-semibold text-blue-600 hover:text-blue-500 mb-2">
            #Html
          </span>
          <span class="inline-block rounded-full px-1 py-1 text-sm font-semibold text-blue-600 hover:text-blue-500 mb-2">
            #css
          </span>
        </div>
        <div className="flex justify-between">
          <div>
            <span className="text-xs text-gray-700 font-semibold hover:bg-gray-300 p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className=" w-5 h-6 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <span className="mx-1">0</span>
            </span>
          </div>
          <div>
            <span
              className="text-xs text-gray-700 font-semibold hover:bg-gray-300 p-2 rounded"
              onClick={handleLike}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className=" w-5 h-6 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="mx-1">{like}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card_footer;
