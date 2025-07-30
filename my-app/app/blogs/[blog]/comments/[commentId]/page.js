const Comment = async ({ params }) => {
  const paramsObj = await params;
  const { blog, commentId } = paramsObj;
  console.log("params obj", await paramsObj);
  return (
    <div>
      <p>
        Comment No. <i>{commentId}</i> on blog <b>{blog}</b> page.
      </p>
    </div>
  );
};

export default Comment;
