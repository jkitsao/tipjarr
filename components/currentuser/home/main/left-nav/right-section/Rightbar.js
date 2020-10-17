import React from "react";
// import useSwr from 'swr'
import useSWR from "swr";
import axios from "axios";
function Rightbar() {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("/api/users/recent", fetcher);
  return (
    <div className="max-w-sm rounded">
      <div className="flex justify-center">
        <div className="my-3">
          <button className=" block rounded-md bg-white p-2 focus:outline-none">
            <svg
              className="h-5 w-5 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>

          <div
            className="  mt-2 bg-white rounded-md shadow-lg  w-full "
            // style={{ width: "20rem" }}
          >
            <div className="py-2 px-3">
              {/* <a
                href="#"
                className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
              >
                <img
                  className="h-8 w-8 rounded-full object-cover mx-1"
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  alt="avatar"
                />
                <p className="text-gray-600 text-sm mx-2">
                  <span className="font-bold">Slick Net</span> start following
                  you . 45m
                </p>
              </a> */}
              {data &&
                data.map((user) => (
                  <a
                    href="#"
                    className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
                  >
                    <img
                      className="h-8 w-8 rounded-full object-cover mx-1"
                      src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                      alt="avatar"
                    />
                    <p className="text-gray-600 text-sm mx-2">
                      <span className="font-bold">{user.name}</span> joined
                      tipjarr . 45m
                    </p>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
