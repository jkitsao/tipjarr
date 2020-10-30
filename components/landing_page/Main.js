import React from "react";
import Hero from "./components/hero/Hero";
import Landing_tips from "./components/tips/Landing_tips";

function Main_page({ data }) {
  return (
    <div>
      <Hero />
      {/* <code>{JSON.stringify(data)}</code> */}
      <Landing_tips data={data} />
    </div>
  );
}

export default Main_page;
