import React from "react";
import CommentComp from "./CommentComp";

function Comments({ data, handleDelete, tip, userInfo }) {
  return (
    <>
      <div>{!data && <h2>Loading.......</h2>}</div>
      <div>
        {data && data?.comments?.length < 1 && (
          <h2 className="text-sm text-green-700 my-3">No comments yet</h2>
        )}
      </div>
      <div>
        {data &&
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
