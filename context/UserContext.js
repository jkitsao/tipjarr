import React, { createContext, useState, useEffect } from "react";
import { firebase } from "../configs/firebase";
export const UserContext = createContext();
export function UsercontextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    const unSubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) setCurrentUser(user);
      setCurrentUser(false);
    });
    return () => unSubscribe();
  }, []);
  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>
      {children}
    </UserContext.Provider>
  );
}
