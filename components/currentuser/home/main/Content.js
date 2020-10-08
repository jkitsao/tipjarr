import React from "react";
import Card from "./card/Card";
// import MyComponent from "./select/Select";
import { PseudoBox } from "@chakra-ui/core";
import Link from "next/link";
import LeftNav from "./left-nav/LeftNav";
import Rightbar from "./left-nav/right-section/Rightbar";

function Content({ data, user }) {
  console.log({ data });
  return (
    <div className="sm:flex justify-center">
      {/* flex no-stretching flex-wrap justify-center */}
      <div className="px-6 mr-5">
        <LeftNav />
        {/* <LeftNav /> */}
      </div>
      <div className="lg:w-1/3 lg:py-6">
        <div className="text-center border-2 shadow-md my-3">
          <iframe
            src="https://giphy.com/embed/SUj2bzYiaMcqIOCVRr"
            width="100"
            height="200"
            frameBorder="0"
            class="giphy-embed mx-auto w-full h-48"
            allowFullScreen
          ></iframe>
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
        <Rightbar user={user} />
        {/* <Rightbar /> */}
      </div>
    </div>
  );
}

export default Content;
