import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
});

const Home = () => {
  return (
    <div>
      <h1>Home </h1>
      <h1>Best dev in town </h1>
      <Image
        src="/image1.jpg"
        width={300}
        height={300}
        alt="Picture of the author"
        className="rounded"
      />
    </div>
  );
};

export default Home;
