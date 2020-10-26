import React, { useState, useContext } from "react";
import CommentBox from "./CommentBox";
import { Button, Collapse } from "@chakra-ui/core";
import Comments from "./Comments";
import useSWR, { trigger, mutate } from "swr";
import axios from "axios";
import { UserInfo } from "../../../../../../context/UserInfo";
import { Icon, useToast } from "@chakra-ui/core";
function ToggleComments({ tip }) {
  const [show, setShow] = React.useState(true);
  const [commentValue, setCommentValue] = useState("");
  const { userInfo } = useContext(UserInfo);
  const [isCommentOpen, setIsCommentOpen] = useState(true);
  const toast = useToast();

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
        toast({
          position: "bottom",
          title: "success",
          description: "comment has been submited ",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
        trigger(`/api/comments/${id}`);
      })
      .catch((err) => {
        // alert(JSON.stringify(err, null, 2));
        toast({
          position: "bottom",
          title: "failed",
          description: err.message,
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      });
  };
  const handleDelete = (commentId) => {
    axios
      .post(`/api/comments/delete`, { commentId })
      .then((res) => {
        // alert(JSON.stringify(res.data));
        trigger(`/api/comments/${id}`);
        toast({
          position: "bottom",
          title: "deleted successfully",
          description: "comment has been deleted ",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
      })
      .catch((err) => {
        // alert(JSON.stringify(err, null, 2));
        toast({
          position: "bottom",
          title: "failed",
          description: err.message,
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      });
    // alert(commentId);
  };
  const handleToggle = () => setShow(!show);
  return (
    <div className="ml-4 my-10">
      <button
        className="w-3/4 mx-auto py-3 bg-gray-400 text-gray-800 shadow rounded focus:outline-none "
        onClick={handleToggle}
      >
        {!show ? `comments` : "close comments"}
        {/* <Icon name="up-down" className="mx-1 inline-block h-2 w-2" /> */}
      </button>
      <Collapse mt={4} isOpen={show}>
        {userInfo && userInfo?.username && (
          <CommentBox
            tip={tip}
            handleSubmit={handleSubmit}
            commentValue={commentValue}
            setCommentValue={setCommentValue}
            userInfo={userInfo}
            isCommentOpen={isCommentOpen}
            setIsCommentOpen={setIsCommentOpen}
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
