import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
function Card_info({ tip }) {
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
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    },
  });
  const date = dayjs(tip.createdAt); //.format("DD/MM/YYYY");
  const mydate = dayjs();
  const c = mydate.from(date);
  return (
    <div className="mb-2 bg-blue-900 py-3">
      <div className="flex px-2 justify-between">
        <div className="inline-block">
          <img
            src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80"
            alt=""
            className="h-8 w-8 rounded-full object-cover border-2 border-gray-600 inline"
          />
          <span className="inline-block mx-3 text-xs text-gray-300 font-semibold">
            Kitsao
          </span>
        </div>
        <div>
          <span className="text-xs text-gray-300 font-semibold">{c} ago</span>
        </div>
      </div>
    </div>
  );
}

export default Card_info;
