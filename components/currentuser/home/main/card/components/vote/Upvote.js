import React, { useState, useEffect, useContext } from "react";
import { Icon } from "@chakra-ui/core";
import { motion } from "framer-motion";
import axios from "axios";
import useSWR, { trigger } from "swr";
import { UserInfo } from "../../../../../../../context/UserInfo";
// import axios from "axios";
function Upvote({ tip }) {
  const { userInfo } = useContext(UserInfo);
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    `/api/tips/${tip._id}`,
    fetcher(`/api/tips/${tip._id}`)
  );
  const v = tip.upvotes.length;

  const [votes, setVotes] = useState(v);
  const [voted, setVoted] = useState(false);
  const handleVote = () => {
    if (userInfo && tip) {
      const vote = {
        userid: userInfo?._id,
        tipid: tip?._id,
      };
      axios
        .post("/api/tips/upvote", { vote })
        .then((res) => {
          trigger(`/api/tips/${tip._id}`);
        })
        .catch((err) => {
          // alert(JSON.stringify(err))
          trigger(`/api/tips/${tip._id}`);
        });
    }
  };
  return data ? (
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
      <span className="block">{data.tip.upvotes.length}</span>
    </motion.div>
  ) : null;
}

export default Upvote;
