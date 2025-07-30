import React from "react";

const Comments = async ({ params }) => {
  console.log(await params);
  const { allpost } = await params;
  return <div>Post of {allpost}</div>;
};

export default Comments;
