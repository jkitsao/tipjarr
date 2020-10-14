import React, { useState, useContext } from "react";
import CommentBox from "./CommentBox";
import { Button, Collapse } from "@chakra-ui/core";
import Comments from "./Comments";
import useSWR, { trigger, mutate } from "swr";
import axios from "axios";
import { UserInfo } from "../../../../../../context/UserInfo";
function ToggleComments({ tip }) {
  const [show, setShow] = React.useState(false);
  const [commentValue, setCommentValue] = useState("");
  const { userInfo } = useContext(UserInfo);
  //comments fetcher function
  const id = tip?._id;
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    `/api/comments/${id}`,
    fetcher(`/api/comments/${id}`)
  );
  console.log({ data });
  //comments add function
  const handleSubmit = (e) => {
    e.preventDefault();

    const comment = { body: commentValue, tipId: tip._id, user: userInfo };

    axios
      .post(`/api/comments/comment`, { comment })
      .then((res) => {
        setCommentValue("");

        trigger(`/api/comments/${id}`);
      })
      .catch((err) => {
        alert(JSON.stringify(err, null, 2));
      });
  };
  const handleDelete = (commentId) => {
    axios
      .post(`/api/comments/delete`, { commentId })
      .then((res) => {
        alert(JSON.stringify(res.data));
        trigger(`/api/comments/${id}`);
      })
      .catch((err) => {
        alert(JSON.stringify(err, null, 2));
      });
    // alert(commentId);
  };
  const handleToggle = () => setShow(!show);
  return (
    <div className="ml-4 my-10">
      <button
        className="w-1/2 mx-auto py-3 bg-blue-600 text-white shadow rounded focus:outline-none border-3 focus:border-yellow-500 "
        onClick={handleToggle}
      >
        {!show ? `comments` : "close comments"}
      </button>
      <Collapse mt={4} isOpen={show}>
        {userInfo && (
          <CommentBox
            tip={tip}
            handleSubmit={handleSubmit}
            commentValue={commentValue}
            setCommentValue={setCommentValue}
            userInfo={userInfo}
          />
        )}

        <div className="mt-10">
          <hr />
          <Comments
            tip={tip}
            handleDelete={handleDelete}
            userInfo={userInfo}
            data={data}
          />
        </div>
      </Collapse>
    </div>
  );
}

export default ToggleComments;
