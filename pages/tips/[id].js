import React, { useState } from "react";
// import Profile from "../components/currentuser/profile/Profile";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import Tip from "../../components/currentuser/home/main/tip/Tip";
import Content_loader from "../../components/currentuser/home/loaders/Content_loader";
import Navbar from "../../components/currentuser/navbar/Navbar";
function Singletip() {
  const router = useRouter();
  const { id } = router.query;
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(`/api/tips/${id}`, fetcher(`/api/tips/${id}`));
  return (
    <div className="bg-primary" style={{ minHeight: "100vh" }}>
      <div>
        <Navbar />
        {data && <Tip tip={data.tip} />}
      </div>
      <div>{!data && <Content_loader />}</div>
      <div>{error && <Content_loader msg={"network error"} />}</div>
    </div>
  );
}

export default Singletip;
