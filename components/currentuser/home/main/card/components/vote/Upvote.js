import React, { useState, useEffect } from "react";
import { Icon } from "@chakra-ui/core";
import { motion } from "framer-motion";
// import axios from "axios";
function Upvote() {
  const [votes, setVotes] = useState(0);
  const [voted, setVoted] = useState(false);
  const handleVote = () => {
    if (!voted) {
      setVotes(votes + 1);
      setVoted(true);
    } else if (votes > 0) {
      setVotes(votes - 1);
      setVoted(false);
    }
  };
  return (
    <motion.div
      className={`absolute hover:bg-gray-300 right-0 mx-2 focus:bg-day select-none transition-all duration-300 ${
        voted ? "text-red-600" : "text-gray-800"
      } text-xs font-semibold px-4 text-center p-1 border rounded-md`}
      onClick={handleVote}
      title={"upvote"}
      // whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
    >
      <Icon name="triangle-up" className="z-0" />
      <span className="block">{votes}</span>
    </motion.div>
  );
}

export default Upvote;
