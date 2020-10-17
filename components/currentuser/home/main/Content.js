import React from "react";
import Card from "./card/Card";
// import MyComponent from "./select/Select";
import { PseudoBox, Select } from "@chakra-ui/core";
// import Link from "next/link";
import LeftNav from "./left-nav/LeftNav";
import Rightbar from "./left-nav/right-section/Rightbar";
// import Userbar from "./top_user_bar/Userbar";

function Content({ data }) {
  console.log({ data });
  return (
    <div className="lg:flex py-2 justify-center">
      {/* flex no-stretching flex-wrap justify-center */}
      <div className=" hidden sm:block  px-6 mr-5">
        <LeftNav />
        {/* <LeftNav /> */}
      </div>
      <div className="w-full sm:w-1/2 lg:w-p-card lg:py-6">
        {/* <div className="">
          <Userbar />
        </div> */}
        {/* <div className="w-3/4 z-0">
          <Select placeholder="Filter" zIndex="0" className="z-0">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </div> */}
        <div className="no-stretching">
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
