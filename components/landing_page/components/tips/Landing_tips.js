import React from "react";
import Card from "../../../currentuser/home/main/card/Card";
import Rightbar from "../../../currentuser/home/main/left-nav/right-section/Rightbar";
import Jumbo from "./Jumbo";
import Tip_card from "./Tip_card";

function Landing_tips({ data }) {
  return (
    <section className="py-5 sm:px-16 lg:pl-64 flex bg-gray-100">
      <div className="mx-auto lg:w-1/4 lg:pt-4">
        <Rightbar />
      </div>
      <div className="lg:w-3/4 lg:mx-6">
        <div className="py-4">
          <h2 className="text-center lg:text-left text-xl sm:text-2xl lg:text-3xl font-semibold">
            here are some top/latest tips & stories
          </h2>
          {/* <Jumbo /> */}
        </div>
        <div>
          {data.tips.map((tip) => (
            <Tip_card tip={tip} key={tip._id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Landing_tips;
