const Comments = async ({ params }) => {
  const paramsObj = await params;
  const { blog } = paramsObj;
  console.log("params obj", await paramsObj);
  return (
    <div>
      <p>
        All Comments on <b>{blog}</b> page.
      </p>
    </div>
  );
};

export default Comments;
