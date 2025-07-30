import React from "react";

const Post1 = async ({ params }) => {
  console.log(await params);
  const { allpost } = await params;
  return <div>Post of {allpost}</div>;
};

export default Post1;
