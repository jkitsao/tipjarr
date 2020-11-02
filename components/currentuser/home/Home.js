import React, { useContext, useEffect } from "react";
import { Select } from "@chakra-ui/core";
import Navbar from "../navbar/Navbar";
import Content from "./main/Content";
import UserNav from "./main/top_user_bar/UserNav";
// import MyComponent from "./main/select/Select";
// import Link from "next/link";
// import MyComponent from "./main/select/Select";
// import Filter from "./main/select/Select";
import { UserInfo } from "../../../context/UserInfo";
import Profile_bar from "./main/user_profile/Profile_bar";
import Navigation from "../../landing_page/components/navbar/Navigation";
// import Userbar from "../../settings/Userbar";
function Home({ data }) {
  const { userInfo } = useContext(UserInfo);
  useEffect(() => {
    console.log({ userInfo });
  }, [userInfo]);
  return (
    <div>
      <section className="sticky inset-0 " style={{ zIndex: "10000" }}>
        {/* <Navbar /> */}
        {/* <Navigation /> */}
        {/* <Userbar /> */}
        <UserNav />
      </section>
      <div>
        {/* <h3 className="text-3xl">hello there</h3> */}
        <Profile_bar userInfo={userInfo} />
      </div>
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
