import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import { Icon } from "@chakra-ui/core";
function CommentComp({ comment, handleDelete, userInfo, tip }) {
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
      d: "a day ago",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    },
  });
  const date = dayjs(comment.createdAt); //.format("DD/MM/YYYY");
  const mydate = dayjs();
  const c = mydate.from(date);
  console.log({ userInfo });
  return (
    <div className="max-w-xxl  my-2 lg:pl-16 lg:px-16">
      <div className="p-2 shadow rounded-sm lg:py-10 relative ">
        <section className="flex">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
            alt=""
            className="h-8 w-8 mx-3 mt-1 border-2 border-gray-400 rounded-full object-cover"
          />
          <div className=" whitespace-pre-wrap leading-normal">
            <p className="text-sm text-gray-700 leading-normal">
              {comment?.body}
            </p>
          </div>
        </section>
        <section className="flex pl-10 mt-2">
          <span className="text-xs font-semibold mx-3 text-teal-800">
            ~ {comment?.user?.username}
          </span>
          <span className="text-xs text-gray-700">{c}</span>
        </section>
        {comment?.user?._id == userInfo?._id && (
          <span
            className="text-xs absolute right-0 mr-6  mb-10 hover:bg-gray-300 text-gray-700"
            onClick={() => handleDelete(comment._id)}
          >
            <Icon name="delete" className="cursor-pointer " />
          </span>
        )}
      </div>
    </div>
  );
}

export default CommentComp;
