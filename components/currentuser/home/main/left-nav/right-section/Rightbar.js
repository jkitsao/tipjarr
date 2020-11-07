import React from "react";
// import useSwr from 'swr'
import useSWR from "swr";
import axios from "axios";
import { PushSpinner, FlapperSpinner, RotateSpinner } from "react-spinners-kit";
import parse from "html-react-parser";

import Link from "next/link";
function Rightbar() {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("/api/tips", fetcher);

  return (
    <div
      className="hidden mt-8 py-10 lg:flex justify-center h-full"
      style={{ maxHeight: "75vh" }}
    >
      <div className="w-full pl-4  h-full flex flex-col">
        <div className="bg-white text-lg text-gray-700 font-bold px-5 py-3 shadow border-b border-gray-300">
          Top tips today (summary)
        </div>

        <div
          className="w-full h-full overflow-auto overflow-x-hidden whitespace-pre-wrap shadow bg-white"
          id="journal-scroll"
        >
          <table className="w-full">
            <tbody className="">
              {data && data.tips ? (
                data.tips.slice(0, 10).map((tip) => (
                  <tr
                    className="relative 
                 text-sm py-1 border-b-2 border-blue-100 cursor-default
    
                bg-green-200 bg-opacity-25 overflow-y-hidden"
                  >
                    <td
                      className="pl-3 w-16 pr-3"
                      style={{ maxHeight: "5rem", maxWidth: "90%" }}
                    >
                      <div className="text-gray-400">
                        <img
                          src={
                            tip?.user?.profile_url?.secure_url ||
                            "https://img.icons8.com/color/344/test-account.png"
                          }
                          className="h-8 w-8 object-cover rounded-full"
                        />
                      </div>
                    </td>

                    <td className="px-2 py-2 ">
                      <div className="leading-5 text-green-800 font-medium">
                        {tip?.user?.username}
                      </div>
                      <div className="leading-5 font-semibold text-gray-900">
                        <Link
                          href={`/tips/${tip._id}`}

                          // onClick={onOpen}
                        >
                          <a>{tip.title.slice(0, 100)}</a>
                        </Link>
                        <a
                          className="text-blue-500 block hover:underline"
                          href={`${tip?.link?.source}`}
                        ></a>
                      </div>
                      <div className="leading-5 text-gray-700">
                        {parse(tip.body)}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <div className="w-3/4 mx-auto mt-48 pl-12">
                  <PushSpinner
                    size={50}
                    color="#20ffa0"
                    loading={true}
                    className="w-full"
                  />
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
