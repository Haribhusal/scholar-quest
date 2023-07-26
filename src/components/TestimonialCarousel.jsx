"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "./../data/testimonials.js";

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="p-10">
      <div className="heading text-center">
        <h3 className="text-3xl font-bold">
          Testimonials by <span className="text-green-700">our students</span>
        </h3>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-10">
            <div className="bg-white rounded-lg shadow-lg p-10">
              <p className="text-gray-700 mb-5">{testimonial.text}</p>
              <div className="by flex items-center gap-3">
                <Image
                  src="/hill.jpeg"
                  className="h-16 w-16 object-cover rounded-full"
                  height={100}
                  width={100}
                  alt="kk"
                />
                <div className="info">
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 mb-1">{testimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialCarousel;
