import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUp, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="pt-10">
      <section className="p-5 md:p-10 gap-10 flex flex-col md:flex-row justify-between">
        <div className="relative flex-1">
          <div className="item gap-3 items-center">
            <Image
              src="/logo-quest.png"
              height={50}
              width={100}
              alt="logo for the quest"
            />
            <div className="">
              <h3>Scholar Quest</h3>
              <p>Education Network</p>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="line h-[100px] w-[1px] bg-green-400 absolute right-16 top-0 "></div>

          <h4 className="subheading text-slate-800 font-bold">Our Services</h4>
          <ul className="text-slate-700 mt-3">
            <li>
              <Link href="/">Career Counseling</Link>
            </li>
            <li>
              <Link href="/">Student Visa Services</Link>
            </li>{" "}
            <li>
              <Link href="/">IELTS/PTE Preparation</Link>
            </li>{" "}
          </ul>
        </div>
        <div className="flex-1 relative">
          <div className="line h-[100px] w-[1px] bg-green-400 absolute right-16 top-0 "></div>

          <h4 className="subheading text-slate-800 font-bold">Our Services</h4>
          <ul className="text-slate-700 mt-3">
            <li>
              <Link href="/">Career Counseling</Link>
            </li>
            <li>
              <Link href="/">Student Visa Services</Link>
            </li>{" "}
            <li>
              <Link href="/">IELTS/PTE Preparation</Link>
            </li>{" "}
          </ul>
        </div>
        <div className="flex-1">
          <h4 className="subheading text-slate-800 font-bold">Our Services</h4>
          <ul className="text-slate-700 mt-3">
            <li>
              <Link href="/">Career Counseling</Link>
            </li>
            <li>
              <Link href="/">Student Visa Services</Link>
            </li>{" "}
            <li>
              <Link href="/">IELTS/PTE Preparation</Link>
            </li>{" "}
          </ul>
        </div>
      </section>
      <section className="px-10 bg-gray-700 text-white flex justify-between items-center">
        <p>
          Copyright &copy; Scholar <span>Quest</span> 2023
        </p>
        <div className=" flex items-center gap-3">
          <h4 className="subheading ">Let's get social</h4>
          <div className="icons flex gap-5 text-xl items-center my-5">
            <Link href="/">
              <BsFacebook />
            </Link>
            <Link href="/">
              <BsInstagram />
            </Link>
            <Link href="/">
              <BsLinkedin />
            </Link>
            <Link href={"/"} className="">
              <BsArrowUp />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
