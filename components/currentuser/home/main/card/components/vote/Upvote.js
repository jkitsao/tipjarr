import React, { useState, useEffect } from "react";
import { Icon } from "@chakra-ui/core";
import axios from "axios";
function Upvote() {
  const [votes, setVotes] = useState(0);
  const handleVote = () => {
    setVotes(votes + 1);
  };
  return (
    <div
      className={`absolute hover:bg-gray-300 right-0 mx-2 focus:bg-day select-none transition-all duration-300 ${
        votes > 0 ? "text-red-600" : "text-gray-800"
      } text-xs font-semibold px-4 text-center p-1 border rounded-md`}
      onClick={handleVote}
      title={"upvote"}
    >
      <Icon name="triangle-up" className="z-0" />
      <span className="block">{votes}</span>
    </div>
  );
}

export default Upvote;
