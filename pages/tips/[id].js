import React, { useState } from "react";
// import Profile from "../components/currentuser/profile/Profile";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import Tip from "../../components/currentuser/home/main/tip/Tip";
function Singletip() {
  const router = useRouter();
  const { id } = router.query;
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(`/api/tips/${id}`, fetcher(`/api/tips/${id}`));
  return (
    <div>
      <div>{data && <Tip tip={data.tip} />}</div>
      <h2>{!data && "Loading please wait"}</h2>
      <h2>{error && "there was an error"}</h2>
    </div>
  );
}

export default Singletip;
