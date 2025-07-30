import React from "react";

const Comments = ({ params }) => {
  console.log(params);
  const { allpost, allComments } = params;
  return (
    <div>
      Post of {allpost} on {allComments}
    </div>
  );
};

export default Comments;
