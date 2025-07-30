import Link from "next/link";

const Home = async () => {
  return (
    <div>
      Hello this is home
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/files">Files</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
