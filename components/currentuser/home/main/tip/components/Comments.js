import React from "react";
import CommentComp from "./CommentComp";
import { Spinner } from "@chakra-ui/core";
function Comments({ data, handleDelete, tip, userInfo }) {
  return (
    <>
      <div className="m-6">{!data && <Spinner size="md" />}</div>
      <div>
        {data && data?.comments?.length < 1 && (
          <h2 className="text-sm text-green-700 mx-2 my-3">No comments yet</h2>
        )}
      </div>
      <div>
        {data &&
          data.comments &&
          data.comments.map((comment) => (
            <CommentComp
              comment={comment}
              handleDelete={handleDelete}
              key={comment._id}
              tip={tip}
              userInfo={userInfo}
            />
          ))}
      </div>
    </>
  );
}

export default Comments;
