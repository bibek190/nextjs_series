const Blog1 = async ({ params }) => {
  console.log(await params);
  const { blog } = await params;
  return (
    <div>
      <p>This is the content of {blog}</p>
    </div>
  );
};

export default Blog1;
