import React from "react";

function Profile_bar({ userInfo }) {
  return (
    <section className="relative py-16 lg:px-32 bg-gray-100 profile_bar">
      <div className=" mx-auto px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-xl rounded-lg">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div className="relative pt-5 my-3">
                  <img
                    alt="..."
                    src={
                      userInfo?.profile_url?.url ||
                      "https://images.unsplash.com/photo-1601574465779-76d6dbb88557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
                    }
                    className="shadow-xl rounded-full h-32 w-32 align-middle border-4 object-cover border-gray-600 absolute -m-16 -ml-20 lg:-ml-16"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
              </div>
              {/* <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                <div className="py-6 px-3 mt-32 sm:mt-0">
                  <button
                    className="bg-gray-700 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                  >
                    follow
                  </button>
                </div>
              </div> */}
              {/* <div className="w-full lg:w-4/12 px-4 lg:order-1">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-500">
                      22
                    </span>
                    <span className="text-sm text-gray-300">Friends</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-500">
                      10
                    </span>
                    <span className="text-sm text-gray-300">Photos</span>
                  </div>
                  <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-500">
                      89
                    </span>
                    <span className="text-sm text-gray-300">Comments</span>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="text-center mt-12">
              <h3 className="text-2xl lg:text-4xl font-semibold leading-normal  text-blue-500 mb-2">
                hello {userInfo.name}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-gray-300 ">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-300"></i>{" "}
                @{userInfo.username}
              </div>
              {/* <div className="mb-2 text-gray-500 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-300"></i>
                    Solution Manager - Creative Tim Officer
                  </div> */}
              {/* <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-300"></i>
                    University of Computer Science
                  </div> */}
            </div>
            <div className="mt-10 py-10 border-t border-gray-300 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-sm lg:text-lg leading-relaxed text-gray-100">
                    {userInfo.bio}
                  </p>
                  <a
                    href="#pablo"
                    className="font-normal text-blue-500"
                    onClick={(e) => e.preventDefault()}
                  >
                    Show more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile_bar;
