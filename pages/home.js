import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Home from "../components/currentuser/home/Home";
import { UserContext } from "../context/UserContext";
// import useS from 'swr'
import useSWR from "swr";
// import { Spinner } from "@chakra-ui/core";
import Content_loader from "../components/currentuser/home/loaders/Content_loader";
import { UserInfoProvider } from "../context/UserInfo";
import { useRouter } from "next/router";
// import { UserContext } from "../context/UserContext";
import { UserInfo } from "../context/UserInfo";
import Head from "next/head";
function home() {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("/api/tips", fetcher("/api/tips"));
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const { userInfo } = useContext(UserInfo);
  const router = useRouter();
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   window.location.reload();
  // }, []);
  useEffect(() => {
    if (!currentUser) {
      router.push("/auth/signup");
    }

    // if (!userInfo && window) {
    //   window.location.reload();
    // }
  }, [currentUser]);

  // const contentLoad = data && data?.tips;
  // data && data?.tips && user
  return (
    <main className="  bg-gray-100 w-full">
      <Head>
        <title>homepage</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="The Programming & Web Development Tip Sharing Platform discover🔎 and share✅ Find best tips on programming and web development"
        />
        <meta
          name="keywords"
          content="HTML, CSS,react,python JavaScript web development tips and tricks "
        />
        {/* <meta name="author" content="John Doe"/> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      {currentUser ? (
        <section>
          {data && data.tips ? <Home data={data} /> : <Content_loader />}
          {/* {JSON.stringify(user)} */}
        </section>
      ) : (
        <Content_loader />
      )}
    </main>
  );
}
export default home;
