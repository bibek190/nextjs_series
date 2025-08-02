import Link from "next/link";

export const metadata = {
  title: "Services",
};

const Services = () => {
  return (
    <div>
      This is a service page
      <p>We offer a variety of services to cater to your needs.</p>
      <Link href="/services/webDev">Web Development</Link>
    </div>
  );
};

export default Services;
