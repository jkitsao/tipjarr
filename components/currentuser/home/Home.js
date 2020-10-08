import { Select } from "@chakra-ui/core";
import React from "react";
import Navbar from "../navbar/Navbar";
import Content from "./main/Content";
// import MyComponent from "./main/select/Select";
// import Link from "next/link";
// import MyComponent from "./main/select/Select";
// import Filter from "./main/select/Select";
function Home({ data, user }) {
  return (
    <div>
      <section className="sticky inset-0">
        <Navbar />
      </section>
      <div className="px-5 lg:px-16">
        <section className="">
          <Content data={data} user={user} />
          {/* <Content data={data} /> */}
        </section>
      </div>
    </div>
  );
}

export default Home;
