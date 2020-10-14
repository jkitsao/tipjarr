import React, { createContext, useState, useEffect } from "react";
import { firebase } from "../configs/firebase";
import axios from "axios";
export const UserContext = createContext();
export function UsercontextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState({});
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>
      {!loading && children}
    </UserContext.Provider>
  );
}
