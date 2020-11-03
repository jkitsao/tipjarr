import React from "react";
import Rightbar from "../currentuser/home/main/left-nav/right-section/Rightbar";
import Hero from "./components/hero/Hero";
import Landing_tips from "./components/tips/Landing_tips";

function Main_page({ data }) {
  return (
    <div>
      <Hero />
      {/* <code>{JSON.stringify(data)}</code> */}
      <section className="">
        <Landing_tips data={data} />
      </section>
    </div>
  );
}

export default Main_page;
