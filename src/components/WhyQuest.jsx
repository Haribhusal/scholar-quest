import React from "react";
import { BiMap } from "react-icons/bi";

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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem quae nihil quos dolorem, a eaque.
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
            <BiMap />
          </div>
          <h4 className="font-bold mt-3">Located in 15+ Countries</h4>
        </div>
        <div className="item text-center shadow-lg p-10 rounded-md">
          <div className="icon mx-auto bg-green-100  rounded-full text-green-700 h-16 w-16 flex justify-center items-center text-3xl">
            <BiMap />
          </div>
          <h4 className="font-bold mt-3">Located in 15+ Countries</h4>
        </div>
        <div className="item text-center shadow-lg p-10 rounded-md">
          <div className="icon mx-auto bg-green-100  rounded-full text-green-700 h-16 w-16 flex justify-center items-center text-3xl">
            <BiMap />
          </div>
          <h4 className="font-bold mt-3">Located in 15+ Countries</h4>
        </div>
        <div className="item text-center shadow-lg p-10 rounded-md">
          <div className="icon mx-auto bg-green-100  rounded-full text-green-700 h-16 w-16 flex justify-center items-center text-3xl">
            <BiMap />
          </div>
          <h4 className="font-bold mt-3">Located in 15+ Countries</h4>
        </div>
      </div>
    </section>
  );
};

export default WhyQuest;
