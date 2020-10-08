import React from "react";
import Profile from "../components/currentuser/profile/Profile";
import { useRouter } from "next/router";
function profile() {
  const router = useRouter();
  const { username } = router.query;
  return (
    <div>
      <Profile name={username} />
    </div>
  );
}

export default profile;
