import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <>
      <header className="grid grid-cols-2 bg-amber-900 p-5">
        <div className="">Bibek Logo</div>
        <nav>
          <ul className="flex gap-6 ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/service">Service</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
