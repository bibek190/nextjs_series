const SingleProfilePost = async (props) => {
  const user = await props.params;
  console.log(user);
  return (
    <>
      <h1>user = {user.username} </h1>
      <h1>user = {user.postId} </h1>
    </>
  );
};

export default SingleProfilePost;
