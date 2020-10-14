import React, { createContext, useState, useEffect, useContext } from "react";
// import { firebase } from "../configs/firebase";
import { UserContext } from "./UserContext";
import axios from "axios";
export const UserInfo = createContext();
export function UserInfoProvider({ children }) {
  const [userInfo, setUserInfo] = useState();
  const [currentUser] = useContext(UserContext);
  // const [user, setUser] = useState({});
  useEffect(() => {
    if (currentUser) {
      axios
        .get(`/api/users/${currentUser.uid}`)
        .then((res) => {
          // setUser(res.data);
          let user = res.data;
          // console.log(res);
          setUserInfo(user);
        })
        .catch((err) => alert(err));
    }
  }, [currentUser]);
  return (
    <UserInfo.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfo.Provider>
  );
}
