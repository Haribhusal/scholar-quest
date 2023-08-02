import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative">
      <Image
        src="/graduation.jpeg"
        className="w-full h-[500px] object-cover"
        alt="Header"
        width={1000}
        height={500}
      />
      <div className="content absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        <h1 className="text-5xl font-bold mb-5">Your dream destination</h1>
        <p className="text-xl">
          Enroll to the perfect college around the world and fulfill your dream.
        </p>
      </div>
    </section>
  );
};

export default Hero;
