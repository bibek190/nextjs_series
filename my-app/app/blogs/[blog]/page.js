import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { blog } = await params;
  return {
    title: `Blog - ${blog}`,
  };
}

const Blog1 = async ({ params }) => {
  console.log(await params);
  const { blog } = await params;

  if (!/^\d+$/.test(blog)) {
    notFound();
  }
  return (
    <div>
      <p>This is the content of {blog}</p>
    </div>
  );
};

export default Blog1;
