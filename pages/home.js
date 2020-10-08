import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Home from "../components/currentuser/home/Home";
import { UserContext } from "../context/UserContext";
// import useS from 'swr'
import useSWR from "swr";
// import { Spinner } from "@chakra-ui/core";
import Content_loader from "../components/currentuser/home/loaders/Content_loader";
function home() {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("/api/tips", fetcher("/api/tips"));
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (currentUser) {
      axios
        .get(`/api/users/${currentUser.uid}`)
        .then((res) => {
          // setUser(res.data);
          let user = res.data;
          // console.log(res);
          setUser(user);
        })
        .catch((err) => alert(err));
    }
    console.log({ user });
  }, [currentUser, user]);

  return (
    <main className="bg-gray-100 w-full">
      <section>
        {data && data?.tips ? (
          <Home data={data} user={user} />
        ) : (
          <Content_loader />
        )}
        {/* {JSON.stringify(user)} */}
      </section>
    </main>
  );
}
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`/api/users/${}`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { user } }
// }
export default home;
