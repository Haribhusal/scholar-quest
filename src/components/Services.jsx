import React from "react";
import { BiBookBookmark } from "react-icons/bi";
import { IoSchoolSharp } from "react-icons/io";
import { GiStarProminences } from "react-icons/gi";

const Services = () => {
  return (
    <section className="services p-10 my-10">
      <div className="heading">
        <h3 className="text-center text-5xl font-bold text-green-700 mb-10">
          Prepare for your dream
        </h3>
        <p className="w-1/2 text-center mx-auto mb-10">
        Preparing for your dream destination is an exciting and rewarding journey. At ScholarQuest, we understand the significance of this endeavor, and we are here to support you every step of the way. From helping you choose the right course and university to assisting with the application process and visa requirements, we ensure a seamless experience. 
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
            At ScholarQuest, we recognize the importance of test preparation in unlocking your academic potential. Our Test Preparation Program is designed to equip you with the skills and knowledge needed to excel in standardized exams. With a team of highly qualified instructors and personalized coaching, we tailor our approach to suit your unique strengths and areas for improvement.            </p>
          </div>
        </div>
        <div className="item text-center">
          <div className="icon">
            <IoSchoolSharp className="text-5xl mx-auto text-green-700" />
            <h2 className=" my-5 font-bold text-slate-400 uppercase">
              Destination College
            </h2>
            <p className="">
            Preparing for your destination college is a thrilling and important milestone in your academic journey. At ScholarQuest, we are dedicated to helping you achieve this dream. Our team of experts will provide personalized guidance, assisting you in selecting the right college            </p>
          </div>
        </div>
        <div className="item text-center">
          <div className="icon">
            <GiStarProminences className="text-5xl mx-auto text-green-700" />
            <h2 className=" my-5 font-bold text-slate-400 uppercase">
              Expert Support
            </h2>
            <p className="">
            At ScholarQuest, we take immense pride in providing unmatched expert support to all our students. Our team of highly experienced consultants is committed to understanding your unique aspirations and guiding you towards the best academic opportunities. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
