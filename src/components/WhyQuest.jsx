import React from "react";
import { BiMap } from "react-icons/bi";
import {PiArrowsLeftRightDuotone} from "react-icons/pi";
import { FaUniversity, FaUserFriends } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";

const WhyQuest = () => {
  return (
    <section className="why p-10">
      <div className="heading flex gap-10 justify-between items-center">
        <h3 className="text-3xl text-green-700 font-bold">
          Why
          <span className="block">
            Scholar <span className="text-blue-700">Quest?</span>
          </span>
        </h3>
        <p className="w-2/4 text-slate-600">
        Choose ScholarQuest for a successful study abroad journey. We offer personalized guidance, expert support, and a commitment to making your academic aspirations a reality. Your dreams matter to us.
        </p>
      </div>
      <div className="icons flex gap-10 my-10 justify-between">
        <div className="item text-center shadow-lg p-10 rounded-md">
          <div className="icon mx-auto bg-green-100  rounded-full text-green-700 h-16 w-16 flex justify-center items-center text-3xl">
            <BiMap />
          </div>
          <h4 className="font-bold mt-3">Located in 15+ Countries</h4>
        </div>
        <div className="item text-center shadow-lg p-10 rounded-md">
          <div className="icon mx-auto bg-green-100  rounded-full text-green-700 h-16 w-16 flex justify-center items-center text-3xl">
            <PiArrowsLeftRightDuotone />
          </div>
          <h4 className="font-bold mt-3">End to End Services</h4>
        </div>
        <div className="item text-center shadow-lg p-10 rounded-md">
          <div className="icon mx-auto bg-green-100  rounded-full text-green-700 h-16 w-16 flex justify-center items-center text-3xl">
            <FaUniversity />
          </div>
          <h4 className="font-bold mt-3">100s of partner institution</h4>
        </div>
        <div className="item text-center shadow-lg p-10 rounded-md">
          <div className="icon mx-auto bg-green-100  rounded-full text-green-700 h-16 w-16 flex justify-center items-center text-3xl">
            <FaUserFriends />
          </div>
          <h4 className="font-bold mt-3">Student friendly preparation classes</h4>
        </div>
        <div className="item text-center shadow-lg p-10 rounded-md">
          <div className="icon mx-auto bg-green-100  rounded-full text-green-700 h-16 w-16 flex justify-center items-center text-3xl">
            <GrAchievement />
          </div>
          <h4 className="font-bold mt-3">High Visa Success Rate</h4>
        </div>
      </div>
    </section>
  );
};

export default WhyQuest;
