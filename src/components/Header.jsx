import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {
  return (
    <header className=" flex flex-col md:flex-row justify-between items-center shadow-lg px-10 py-3">
      <div>
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-quest.png" width={100} alt="logo" height={40} />
          <div className="brand">
            <h1 className=" text-green-700 font-bold md:text-2xl">
              Scholar <span>Quest</span>
            </h1>
            <h4>Education Network</h4>
          </div>
        </Link>
      </div>
      <nav className="flex flex-col md:flex-row gap-3 md:gap-10 items-center ">
        <Link href="/"> Study Abroad</Link>
        <Link href="/"> Classes</Link>
        <Link href="/"> Testimonials</Link>
        <Link href="/"> Contact</Link>
        <Link
          href="/"
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
