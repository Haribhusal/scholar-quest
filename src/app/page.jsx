import React from "react";
import TestimonialsCarousel from "./../components/TestimonialCarousel";
import WhyQuest from "./../components/WhyQuest";
import Destinations from "./../components/Destinations";
import Services from "./../components/Services";
import Hero from "./../components/Hero";
import EnrollForm from "./../components/EnrollForm";
import ContactForm from "./../components/ContactForm";

const Home = () => {
  return (
    <main className="text-slate-500 leading-relaxed">
      <Hero />
      <Services />
      <Destinations />
      <WhyQuest />
      <TestimonialsCarousel />
      <ContactForm />
      <EnrollForm />
    </main>
  );
};

export default Home;
