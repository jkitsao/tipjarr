import React from "react";
import { Skeleton } from "@chakra-ui/core";
function Content_loader() {
  return (
    <div className="w-full h-screen">
      <div className="w-full lg:w-1/2 mx-auto pt-6 lg:pt-16 ">
        <div className="w-full mx-auto p-4  lg:p-10 lg:px-32">
          <Skeleton height="130px" my="10px" />
          <Skeleton height="220px" my="10px" />
          <Skeleton height="150px" my="10px" />
          <Skeleton height="100px" my="10px" />
          <Skeleton height="150px" my="10px" />
          <Skeleton height="100px" my="10px" />
        </div>
      </div>
    </div>
  );
}

export default Content_loader;
