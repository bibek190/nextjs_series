const File = async ({ params }) => {
  console.log(await params);
  const { filePath } = await params;

  return (
    <div>
      <p>
        File <i>/{filePath?.join("/")} </i>
      </p>
    </div>
  );
};

export default File;
