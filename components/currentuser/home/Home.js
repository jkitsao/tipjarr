import React, { useContext, useEffect } from "react";
import { Select } from "@chakra-ui/core";
import Navbar from "../navbar/Navbar";
import Content from "./main/Content";
// import MyComponent from "./main/select/Select";
// import Link from "next/link";
// import MyComponent from "./main/select/Select";
// import Filter from "./main/select/Select";
import { UserInfo } from "../../../context/UserInfo";
function Home({ data }) {
  const { userInfo } = useContext(UserInfo);
  useEffect(() => {
    console.log({ userInfo });
  }, [userInfo]);
  return (
    <div>
      <section className="sticky inset-0 z-50">
        <Navbar />
      </section>
      <div className="px-2  lg:px-16">
        <section className="">
          <Content data={data} />
          {/* <Content data={data} /> */}
        </section>
      </div>
    </div>
  );
}

export default Home;
