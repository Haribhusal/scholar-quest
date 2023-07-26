import React from "react";
import { BiBookBookmark } from "react-icons/bi";

const Services = () => {
  return (
    <section className="services p-10 my-10">
      <div className="heading">
        <h3 className="text-center text-5xl font-bold text-green-700 mb-10">
          Prepare for your dream
        </h3>
        <p className="w-1/2 text-center mx-auto mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur
          ipsa, dolores omnis molestiae quia. Recusandae eum voluptatibus earum,
          labore perferendis hic iste, quo nam ex fugiat, dolorem ut officiis?
        </p>
      </div>
      <div className="items flex gap-10">
        <div className="item text-center">
          <div className="icon">
            <BiBookBookmark className="text-5xl mx-auto text-green-700" />
            <h2 className=" my-5 font-bold text-slate-400 uppercase">
              Test Preparation
            </h2>
            <p className="">
              At ScholarQuest, we take pride in offering a comprehensive Test
              Preparation Program that equips you with the skills and knowledge
              needed to excel in your standardized exams.
            </p>
          </div>
        </div>
        <div className="item text-center">
          <div className="icon">
            <BiBookBookmark className="text-5xl mx-auto text-green-700" />
            <h2 className=" my-5 font-bold text-slate-400 uppercase">
              Test Preparation
            </h2>
            <p className="">
              At ScholarQuest, we take pride in offering a comprehensive Test
              Preparation Program that equips you with the skills and knowledge
              needed to excel in your standardized exams.
            </p>
          </div>
        </div>
        <div className="item text-center">
          <div className="icon">
            <BiBookBookmark className="text-5xl mx-auto text-green-700" />
            <h2 className=" my-5 font-bold text-slate-400 uppercase">
              Test Preparation
            </h2>
            <p className="">
              At ScholarQuest, we take pride in offering a comprehensive Test
              Preparation Program that equips you with the skills and knowledge
              needed to excel in your standardized exams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
