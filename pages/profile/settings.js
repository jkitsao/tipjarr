import React, { useState, useContext, useEffect } from "react";
import Settings from "../../components/settings/Settings";
import { UserContext } from "../../context/UserContext";
import { Spinner } from "@chakra-ui/core";

function SettingsPage() {
  // const [currentUser, setCurrentUser] = useContext(UserContext);
  // //   console.log({ currentUser });
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   if (currentUser) setUser(currentUser);
  // }, [currentUser]);
  return (
    <div className="h-full bg-gray-900">
      <Settings />

      {/* <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        /> */}
    </div>
  );
}

export default SettingsPage;
