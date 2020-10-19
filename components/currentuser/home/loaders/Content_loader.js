import React from "react";
// import { Skeleton } from "@chakra-ui/core";
import { PushSpinner, FlapperSpinner, RotateSpinner } from "react-spinners-kit";
function Content_loader() {
  return (
    <div className="w-full bg-gray-900 h-screen">
      <div className="text-center  pt-32 push_spinner">
        <RotateSpinner
          size={50}
          color="#00ff00"
          loading={true}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Content_loader;
