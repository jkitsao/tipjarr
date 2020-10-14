import React from "react";
// import { Skeleton } from "@chakra-ui/core";
function Content_loader({ msg }) {
  return (
    <div className="w-full h-screen">
      <div className="w-full lg:w-1/2 mx-auto pt-6 lg:pt-16 ">
        <div className="w-full mx-auto p-4  lg:p-10 lg:px-32">
          <div class="container">
            <div class="banner text-blue-500 ">
              {msg ? msg : "LOADING...."}
              <div class="banner-left"></div>
              <div class="banner-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content_loader;
