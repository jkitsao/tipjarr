import React from "react";
import Card from "./card/Card";
// import MyComponent from "./select/Select";
import { PseudoBox } from "@chakra-ui/core";
import Link from "next/link";
import LeftNav from "./left-nav/LeftNav";
import Rightbar from "./left-nav/right-section/Rightbar";
import Userbar from "./top_user_bar/Userbar";

function Content({ data }) {
  console.log({ data });
  return (
    <div className="sm:flex justify-center">
      {/* flex no-stretching flex-wrap justify-center */}
      <div className="px-6 mr-5">
        <LeftNav />
        {/* <LeftNav /> */}
      </div>
      <div className="lg:w-1/3 lg:py-6">
        <div className="">
          <Userbar />
        </div>
        <div className="no-stretching ">
          {data.tips.map((data) => (
            <Card tip={data} key={data._id} />
          ))}
        </div>
      </div>
      <div
        className="lg:w-1/4 py-4 px-3"
        // style={{ position: "-webkit-sticky" }}
      >
        <Rightbar />
        {/* <Rightbar /> */}
      </div>
    </div>
  );
}

export default Content;
