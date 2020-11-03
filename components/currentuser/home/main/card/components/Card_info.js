import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import Upvote from "./vote/Upvote";
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
      dd: "%d days ago",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    },
  });
  const date = dayjs(tip.createdAt); //.format("DD/MM/YYYY");
  const mydate = dayjs();
  const c = mydate.from(date);
  const pic =
    tip?.user?.profile_url?.secure_url ||
    "https://img.icons8.com/color/344/test-account.png";
  return (
    <div className="mb-2 px-2 py-3 relative">
      <div className="flex px-2">
        <div className="inline-block">
          <img
            src={pic}
            alt=""
            className="h-8 w-8 rounded-full object-cover inline"
          />
          <span className="inline-block mx-3 text-xs text-gray-800 font-semibold">
            {tip?.user?.username ? tip?.user?.username : "tipjarr"}
          </span>
        </div>
        <div>
          <div className="text-xs text-gray-800 font-semibold pt-2">
            {c} ago
          </div>
        </div>
        <div>
          <Upvote tip={tip} />
        </div>
      </div>
    </div>
  );
}

export default Card_info;
