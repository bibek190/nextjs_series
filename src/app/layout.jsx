import "./globals.css";
import Navigation from "./components/Navigation";

import { Roboto } from "next/font/google";
import { Noto_Sans } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const workSans = Noto_Sans({
  weight: "800",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <Navigation />
        <div className="mx-auto p-5">{children}</div>
      </body>
    </html>
  );
}
