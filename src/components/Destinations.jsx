"use client";

import React, { useState } from "react";
import { BsArrowRight, BsBriefcase } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { destinations } from "./../data/destinations";

const Destinations = () => {
  const [activeDestination, setActiveDestination] = useState(1);
  console.log(destinations);
  return (
    <section className="destinations   ">
      <div className="heading">
        <h3 className="text-center text-5xl font-bold text-green-600 mb-10">
          Where are you thinking of studying?{" "}
        </h3>
        <p className="w-1/2 text-center mx-auto mb-5 text-green-700">
        Start your overseas education journey with the best Study Abroad education consultant
        </p>
      </div>
      <div className="wrap flex gap-10 bg-green-50 p-10 ">
        <div className="left flex-1 bg-white p-10 rounded-md">
          <h4 className="text-xl font-bold text-green-700">
            Desired Destinations
          </h4>
          <p className="py-5 text-slate-600">
            Your study abroad partner for your desired destination. Personalized
            guidance from course selection to visa assistance. Your success
            begins here!
          </p>
          <ul className=" flex flex-col gap-3">
            {destinations &&
              destinations.map((item) => (
                <li>
                  <button
                    onClick={() => setActiveDestination(item.id)}
                    className="bg-green-200 flex items-center gap-3 text-left w-full text-green-700 px-5 py-3 rounded-md font-bold hover:bg-green-700 hover:text-white transition-all"
                  >
                    <span>
                      <BsBriefcase />
                    </span>{" "}
                    {item.title}
                  </button>
                </li>
              ))}
          </ul>
        </div>

        <div className="content flex-[2]">
          <h3 className="font-bold text-4xl text-green-700">
            Study in Australia
          </h3>
          <p className="py-5 text-slate-600">
            We are your dedicated companions on the path to studying in
            Australia. Our team of experts is committed to providing
            personalized guidance tailored to your academic and career goals.
            From helping you select the right course and university to assisting
            with the application process and visa requirements, we ensure a
            smooth and hassle-free transition to studying in Australia. Our
            extensive knowledge of the Australian education system, coupled with
            valuable insights on campus life and accommodation, allows us to
            support you in every aspect of your study abroad journey. At
            ScholarQuest, we strive to make your dream of studying in Australia
            a reality, where academic excellence and personal growth come
            together for an enriching experience. Get ready to embark on an
            extraordinary educational adventure with ScholarQuest!
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-green-700 text-white px-5 py-3 rounded "
          >
            More information
            <BsArrowRight />
          </Link>
        </div>
        <div className="image flex-1">
          {destinations &&
            destinations.map(
              (item) =>
                item.id === activeDestination && (
                  <Image
                    src={`/destinations/destination-${item.id}.jpeg`}
                    height={400}
                    width={200}
                    className="w-full rounded-md"
                    alt="Study in Australia"
                  />
                )
            )}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
