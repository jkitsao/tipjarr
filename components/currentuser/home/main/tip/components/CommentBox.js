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
  const pic =
    userInfo?.profile_url?.secure_url ||
    "https://images.unsplash.com/photo-1603989166244-3e8d9580204d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=152&q=80";
  return (
    <div className="">
      <div className="flex relative items-center bg-white lg:mt-10 shadow-md mt-5 border-2 mb-2 max-w-xl ">
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
      {/* <form onSubmit={handleSubmit}> */}
      {/* <div>
          <img
            src="https://images.unsplash.com/photo-1603989166244-3e8d9580204d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=152&q=80"
            className="object-cover w-8 h-8 rounded-full inline-block"
          />
        </div> */}
      {/* <div className="mt-6 w-1/2 border p-2 rounded-md border-gray-400  pt-4 flex justify-between">
          <div>
            <img
              src={pic}
              className="object-cover w-8 h-8 rounded-full inline-block"
            />
          </div>
          <input
            placeholder="Add comment"
            className="placeholder-gray-500 w-5/7 text-gray-700 focus:outline-none"
            type="text"
            name="body"
            // placeholder="Type Your Comment"
            required
            value={commentValue}
            onChange={(e) => setCommentValue(e.target.value)}
          />
          <div className="flex">
            <button className="mr-2 hover:opacity-75">
              <i>
                <svg
                  className="fill-current text-gray-500 w-6 h-6"
                  height="512pt"
                  viewBox="-96 0 512 512"
                  width="512pt"
                >
                  <path d="M160 512C71.766 512 0 440.234 0 352V128c0-11.797 9.559-21.332 21.332-21.332 11.777 0 21.336 9.535 21.336 21.332v224c0 64.684 52.629 117.332 117.332 117.332S277.332 416.684 277.332 352V117.332c0-41.172-33.492-74.664-74.664-74.664-41.176 0-74.668 33.492-74.668 74.664v213.336c0 17.64 14.355 32 32 32s32-14.36 32-32V128c0-11.797 9.559-21.332 21.332-21.332 11.777 0 21.336 9.535 21.336 21.332v202.668c0 41.172-33.496 74.664-74.668 74.664s-74.668-33.492-74.668-74.664V117.332C85.332 52.652 137.961 0 202.668 0 267.371 0 320 52.652 320 117.332V352c0 88.234-71.766 160-160 160zm0 0" />
                </svg>
              </i>
            </button>
            <button className="hover:opacity-75">
              <i>
                <svg
                  className="fill-current text-gray-300 w-6 h-6"
                  viewBox="0 0 477.867 477.867"
                >
                  <path d="M238.933 0C106.974 0 0 106.974 0 238.933s106.974 238.933 238.933 238.933 238.933-106.974 238.933-238.933C477.726 107.033 370.834.141 238.933 0zm0 443.733c-113.108 0-204.8-91.692-204.8-204.8s91.692-204.8 204.8-204.8 204.8 91.692 204.8 204.8c-.122 113.058-91.742 204.678-204.8 204.8z" />
                  <circle cx="153.6" cy="204.8" r="34.133" />
                  <circle cx="324.267" cy="204.8" r="34.133" />
                  <path d="M304.287 296.61c-5.637-7.554-16.331-9.108-23.885-3.47a17.07 17.07 0 00-.953.766c-24.135 17.628-56.898 17.628-81.033 0-7.131-6.164-17.909-5.379-24.072 1.752-6.164 7.131-5.379 17.909 1.752 24.072.308.267.626.522.953.766 36.531 27.922 87.236 27.922 123.767 0 7.555-5.638 9.109-16.332 3.471-23.886z" />
                </svg>
              </i>
            </button>
          </div>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-400 to-blue-500 focus:from-pink-500 focus:outline-none focus:to-orange-500 text-white  px-4 py-1 rounded-lg text-sm"
            value="Post Comment"
          >
            Post Comment
          </button>
        </div>
      </form> */}
    </div>
  );
}

export default CommentBox;
