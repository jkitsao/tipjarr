import React from "react";
import { firebase } from "../../../../configs/firebase";
import { useRouter } from "next/router";
function Dropdown() {
  const router = useRouter();
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        router.push("/auth/login");
      })
      .catch(function (error) {
        // An error happened.
        alert(JSON.stringify(error));
      });
  };
  return (
    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
      <div
        className="py-1 rounded-md bg-white shadow-xs"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <a
          href="#"
          className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
          role="menuitem"
        >
          Your Profile
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
          role="menuitem"
        >
          Settings
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
          role="menuitem"
          onClick={handleSignOut}
        >
          Sign out
        </a>
      </div>
    </div>
  );
}

export default Dropdown;
