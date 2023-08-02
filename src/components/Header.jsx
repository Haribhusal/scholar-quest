import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { destinations } from "../data/destinations";

const Header = () => {
  return (
    <header className=" flex flex-col md:flex-row justify-between items-center shadow-lg px-10 py-3">
      <div>
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-quest.png" width={100} alt="logo" height={40} />
          <div className="brand">
            <h1 className="text-green-700 font-bold md:text-2xl">
              Scholar <span className="text-blue-700 font-bold">Quest</span>
            </h1>
            <h4 className="text-blue-600 font-bold">Education Network</h4>
          </div>
        </Link>
      </div>

      <nav className="flex flex-col md:flex-row gap-3  items-center ">
        <div className="dropdown relative group cursor-pointer">
          <div className="title p-5">Study Abroad</div>
          <div className="destinations absolute shadow-md p-5 right-0 left-1/2 -translate-x-1/2 border-[1px] rounded-md z-30 bg-white w-64 hidden group-hover:block">
            <div className="items flex flex-col gap-3 ">
              {destinations &&
                destinations.map((item) => (
                  <Link
                    key={item.id}
                    href={`/study-abroad/${item.slug}`}
                    className="px-5 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-700 transition-all duration-300 hover:text-white whitespace-nowrap"
                  >
                    {item.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>

        <div className="dropdown relative group cursor-pointer">
          <div className="title p-5">Classes</div>
          <div className="destinations absolute shadow-md p-5 right-0 left-1/2 -translate-x-1/2 border-[1px] rounded-md z-30 bg-white w-64 hidden group-hover:block">
            <div className="items flex flex-col gap-3 ">
              {/* {destinations &&
                destinations.map((item) => (
                  <Link
                    href={"/study-abroad/study-in-australia"}
                    className="px-5 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-700 transition-all duration-300 hover:text-white whitespace-nowrap"
                  >
                    {item.title}
                  </Link>
                ))} */}

              <Link
                href={"/classes/ielts"}
                className="px-5 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-700 transition-all duration-300 hover:text-white whitespace-nowrap"
              >
                IELTS
              </Link>
              <Link
                href={"/classes/pte"}
                className="px-5 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-700 transition-all duration-300 hover:text-white whitespace-nowrap"
              >
                PTE
              </Link>
              <Link
                href={"/classes/sat"}
                className="px-5 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-700 transition-all duration-300 hover:text-white whitespace-nowrap"
              >
                SAT
              </Link>
            </div>
          </div>
        </div>
        <Link href="/" className="p-5">
          {" "}
          Testimonials
        </Link>
        <Link href="/" className="p-5">
          {" "}
          Contact
        </Link>
        <Link
          href="#enroll"
          className="bg-green-700 text-white px-10 flex items-center gap-3 py-2 rounded-md"
        >
          {" "}
          Enroll
          <BsArrowRight />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
