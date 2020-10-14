import React, { useEffect, useState, useContext } from "react";
import Newtip from "../components/currentuser/home/main/tips/new/Newtip";
import Navbar from "../components/currentuser/navbar/Navbar";
import { UserContext } from "../context/UserContext";
import Content_loader from "../components/currentuser/home/loaders/Content_loader";
import axios from "axios";
import useSWR from "swr";

function NewTip() {
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (currentUser) {
      axios.get(`/api/users/${currentUser.uid}`).then((res) => {
        let user = res.data;
        setUser(user);
      });
    }
  }, [currentUser]);
  console.log({ user });
  console.log({ currentUser });

  return (
    <>
      {user ? (
        <main className=" min-h-full bg-gray-900">
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
