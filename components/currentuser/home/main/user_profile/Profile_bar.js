import React from "react";

function Profile_bar({ userInfo }) {
  return (
    <section classNameName="relative py-16 border border-2 lg:px-32 bg-gray-100 ">
      <div className="w-full profile_bar mx-auto flex items-center justify-center px-5 py-10">
        <div
          className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-16 pb-10 text-gray-800"
          //   style="max-width: 500px"
          style={{ maxWidth: "700px" }}
        >
          <div className="w-full pt-1 pb-5">
            <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
              <img
                src={
                  userInfo?.profile_url?.secure_url ||
                  "https://img.icons8.com/color/344/test-account.png"
                }
                alt=""
              />
            </div>
          </div>
          <div className="w-full mb-10">
            <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
              “
            </div>
            <p className="text-sm text-gray-600 text-center px-5">
              {userInfo.bio}
            </p>
            <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
              ”
            </div>
          </div>
          <div className="w-full">
            <p className="text-md text-indigo-500 font-bold text-center">
              {userInfo.name}
            </p>
            <p className="text-xs text-gray-500 text-center">
              @{userInfo.username}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile_bar;
