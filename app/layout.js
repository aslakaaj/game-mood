import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import controller from "@/public/img/controller.webp";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GameMoods",
  description: "Find out what game to play next with the use of your emotion!",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="night" lang="en">
      <body className={inter.className}>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:70px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10"></div>
        <nav className="bg-neutral relative left-1/2 -translate-x-1/2 w-2/3 mt-5 py-3 px-4 rounded-xl md:w-50 flex justify-between items-center">
          <Link href="/" className="hover:bg-white hover:bg-opacity-20 p-2 rounded-lg">
            <Image
              src={controller}
              width={50}
              height={50}
              alt="controller logo"
            />
          </Link>
          <Link
            className="hover:bg-white hover:bg-opacity-20 p-2 rounded-lg"
            href="/"
          >
            <h1 className="font-bold text-lg">GameMoods</h1>
          </Link>
          <div className=" w-12"></div>
        </nav>
        {children}
      </body>
    </html>
  );
}
