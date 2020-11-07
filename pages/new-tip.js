import React, { useEffect, useState, useContext } from "react";
import Newtip from "../components/currentuser/home/main/tips/new/Newtip";
import Navbar from "../components/currentuser/navbar/Navbar";
import { UserContext } from "../context/UserContext";
import Content_loader from "../components/currentuser/home/loaders/Content_loader";
import axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import Head from "next/head";
function NewTip() {
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (currentUser) {
      axios.get(`/api/users/${currentUser.uid}`).then((res) => {
        let user = res.data;
        setUser(user);
      });
    }
    if (currentUser === null && !user) router.push("/auth/signup");
  }, [currentUser]);
  console.log({ user });
  console.log({ currentUser });

  return (
    <>
      <Head>
        <title>share your tip | share with others</title>
        <meta charset="UTF-8" />
        <meta name="description" content="share tips with others" />
        <meta
          name="keywords"
          content="javascript, html, css webdevelopment,share tips "
        />
        {/* <meta name="author" content={data?.tip?.user?.username} /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>

      {user ? (
        <main
          className=" min-h-full bg-gray-200"
          style={{ minHeight: "100vh" }}
        >
          <div>
            <Navbar />
            <Newtip user={user} />
          </div>
        </main>
      ) : (
        <Content_loader />
      )}
    </>
  );
}

export default NewTip;
