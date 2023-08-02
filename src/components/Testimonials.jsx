"use client";
import React, { useState } from "react";
import testiData from "../data/testimonials.js";

const Testimonials = () => {
  const [activeTesti, setActiveTest] = useState(3);
  return (
    <section className="bg-green-50 p-10">
      <div className="heading">
        <h3 className="text-3xl font-bold text-green-700 mb-10">
          Student Testimonials
        </h3>
      </div>
      {testiData &&
        testiData.map(
          (item) =>
            item.id === activeTesti && (
              <div className="flex" key={item.id}>
                <div className="flex-[3]">
                  <p>{item.message}</p>
                  <h3>{item.personName}</h3>
                </div>
                <div className="flex-1">
                  <img src={item.personImage} alt="dasdasd" width="100%" />
                </div>
              </div>
            )
        )}
      <div className="">
        <div
          className=""
          onClick={() => setActiveTest(1)}
          style={{ backgroundColor: activeTesti === 1 ? "#004AAE" : "" }}
        ></div>
        <div
          className=""
          onClick={() => setActiveTest(2)}
          style={{ backgroundColor: activeTesti === 2 ? "#004AAE" : "" }}
        ></div>
        <div
          className=""
          onClick={() => setActiveTest(3)}
          style={{ backgroundColor: activeTesti === 3 ? "#004AAE" : "" }}
        ></div>
      </div>
    </section>
  );
};

export default Testimonials;
