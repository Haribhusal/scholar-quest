"use client";
import React, { useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";

const EnrollForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobileNumber: "",
    age: "",
    educationLevel: "",
    courses: "",
    destination: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the email using EmailJS
      const serviceId = "service_qmdpvfp";
      const templateId = "template_3hj5ize";
      const userId = "GzTVN0IGLbHfkHJJGw2Zx";

      await emailjs.send(serviceId, templateId, formData, userId);

      // Handle successful submission (show a confirmation message, clear the form, etc.)
    } catch (error) {
      // Handle errors during submission
    }
  };

  return (
    <section
      className="p-10 pb-0 bg-blue-100 flex justify-between items-end"
      id="enroll"
    >
      <div className="formwrapper flex-1">
        <form action="" className="" onSubmit={handleSubmit}>
          <h3 className="title text-5xl font-bold text-blue-700 mb-5">
            Get in touch
          </h3>
          <p>
          Let us know your inquiry. Lets start your application, kindly please fill the form and one of our adviser will contact you via email or call in less than 24 hours.
          </p>

          <div className="fields text-gray-800 my-10">
            <div className="row flex gap-5 justify-between mb-3">
              <div className="field flex-1">
                <input
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  type="text"
                  placeholder="Full Name"
                  className="bg-white px-5 w-full ring-0 py-2 rounded focus:ring-0 focus:shadow-none focus:border-none"
                />
              </div>
              <div className="field flex-1">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter Email"
                  className="bg-white px-5 w-full ring-0 py-2 rounded focus:ring-0 focus:shadow-none focus:border-none"
                />
              </div>
            </div>
            <div className="row flex gap-5 justify-between mb-3">
              <div className="field flex-1">
                <input
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  type="text"
                  placeholder="Mobile Number"
                  className="bg-white px-5 w-full ring-0 py-2 rounded focus:ring-0 focus:shadow-none focus:border-none"
                />
              </div>
              <div className="field flex-1">
                <input
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  type="num"
                  placeholder="Your age"
                  className="bg-white px-5 w-full ring-0 py-2 rounded focus:ring-0 focus:shadow-none focus:border-none"
                />
              </div>
            </div>
            <div className="row flex gap-5 justify-between mb-3">
              <div className="field flex-1">
                <select
                  name="educationLevel"
                  onChange={handleChange}
                  defaultValue={"education Level"}
                  id=""
                  className="bg-white px-5 w-full h-auto ring-0 py-2 rounded focus:ring-0 focus:shadow-none focus:border-none"
                >
                  <option value="">Select Education Level </option>
                  <option value="plustwo">+2</option>
                  <option value="bachelors">Bachelors</option>
                  <option value="masters">Masters</option>
                </select>
              </div>
              <div className="field flex-1">
                <select
                  defaultValue={"Courses"}
                  name="courses"
                  onChange={handleChange}
                  id=""
                  className="bg-white px-5 w-full h-auto ring-0 py-2 rounded focus:ring-0 focus:shadow-none focus:border-none"
                >
                  <option value="">Select Courses</option>
                  <option value="science">Science</option>
                  <option value="management">Management</option>
                  <option value="hotel-management">Hotel Management</option>
                </select>
              </div>
              <div className="field flex-1">
                <select
                  defaultValue={"Destination"}
                  name="destination"
                  onChange={handleChange}
                  id=""
                  className="bg-white px-5 w-full h-auto ring-0 py-2 rounded focus:ring-0 focus:shadow-none focus:border-none"
                >
                  <option value="">Select your destination</option>
                  <option value="australia">Australia</option>
                  <option value="newzealand">New Zealand</option>
                  <option value="canada">Canada</option>
                  <option value="japan">Japan</option>
                </select>
              </div>
            </div>

            <div className="row flex gap-5 justify-between mb-3">
              <div className="field flex-1">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  id=""
                  cols=""
                  placeholder="Enter your message"
                  className="bg-white px-5 w-full h-auto ring-0 py-2 rounded focus:ring-0 focus:shadow-none focus:border-none"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="row flex gap-5 justify-between mb-3">
              <button
                type="submit"
                className="bg-blue-700 text-white rounded-md px-5 py-3"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="image flex-1 flex justify-end">
        <Image src="/user.png" height={500} width={400} alt="text" />
      </div>
    </section>
  );
};

export default EnrollForm;
