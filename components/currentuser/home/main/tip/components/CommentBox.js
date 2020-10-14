import React, { useState, useContext } from "react";
// import axios from "axios";
// import { UserInfo } from "../../../../../../context/UserInfo";
// import useSwr, { mutate, trigger } from "swr";
function CommentBox({ setCommentValue, handleSubmit, commentValue, userInfo }) {
  return (
    <div>
      <div className="flex  items-center bg-gray-100 justify-center mx-auto lg:mt-10 shadow-md mt-5 border-2 mb-2 max-w-xl">
        <form
          className="w-full max-w-xl bg-gray-100 rounded-lg px-4 pt-2"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap -mx-3 mb-4">
            <h2 className="px-3 pt-2 pb-2 text-gray-700 text-sm">
              Add a new comment
              <span className="text-xs mx-5">~{userInfo.username}</span>
            </h2>
            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                className="bg-gray-100 rounded text-gray-700 border border-gray-400 leading-normal w-full  py-3 text-sm px-3   focus:outline-none focus:bg-white"
                name="body"
                placeholder="Type Your Comment"
                required
                value={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}
              ></textarea>
            </div>
            <div className="w-full md:w-full flex items-start  px-2">
              <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                <svg
                  fill="none"
                  className="w-5 h-5 text-gray-600 mr-1"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-xs  pt-px">keep it clean.</p>
              </div>
              <div className="-mr-1">
                <button
                  type="submit"
                  className="bg-white text-gray-700 font-medium py-1 px-3 border border-gray-400 text-sm rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                  value="Post Comment"
                >
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommentBox;
