import React from "react";
import Card from "../../../currentuser/home/main/card/Card";
import Jumbo from "./Jumbo";
import Tip_card from "./Tip_card";

function Landing_tips({ data }) {
  return (
    <section className="py-5 sm:px-16 lg:px-64">
      <div className="py-4">
        {/* <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-semibold">
          here are some top/latest tips & stories
        </h2> */}
        <Jumbo />
      </div>
      <div className=" lg:flex lg:flex-wrap">
        {/* <code>{JSON.stringify(data.tips, null, 2)}</code> */}
        {data.tips.map((tip) => (
          //   <Card tip={tip} />
          <Tip_card tip={tip} key={tip._id} />
        ))}
      </div>
    </section>
  );
}

export default Landing_tips;
