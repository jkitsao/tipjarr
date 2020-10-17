import React, { useState, useContext } from "react";
// import axios from "axios";
// import { UserInfo } from "../../../../../../context/UserInfo";
// import useSwr, { mutate, trigger } from "swr";
import { Icon } from "@chakra-ui/core";
function CommentBox({
  setCommentValue,
  handleSubmit,
  commentValue,
  userInfo,
  setIsCommentOpen,
  isCommentOpen,
}) {
  return (
    <div className="">
      <div className="flex relative items-center bg-white justify-center mx-auto lg:mt-10 shadow-md mt-5 border-2 mb-2 max-w-xl ">
        <span
          className="m-1 absolute right-0 top-0 p-1  cursor-pointer rounded-full hover:bg-gray-300"
          onClick={setIsCommentOpen(false)}
        >
          <Icon name="small-close" />
        </span>
        <form
          className="w-full max-w-xl bg-white rounded-lg px-4 pt-2"
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
                  className="bg-gradient-to-r from-teal-400 to-blue-500 focus:from-pink-500 focus:outline-none focus:to-orange-500 text-white  px-4 py-1 rounded-lg text-sm"
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
