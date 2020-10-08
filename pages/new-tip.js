import React from "react";
import Newtip from "../components/currentuser/home/main/tips/new/Newtip";
import Navbar from "../components/currentuser/navbar/Navbar";

function NewTip() {
  return (
    <main className="bg-gray-900 h-full">
      <div>
        <Navbar />
        <Newtip />
      </div>
    </main>
  );
}

export default NewTip;
