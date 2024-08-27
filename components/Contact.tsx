'use client';

import React, { useState } from "react";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Importing phone and envelope icons
import ContactForm from "./ContactForm";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = { fullName: "", email: "", message: "" };

    if (!formData.fullName) {
      formIsValid = false;
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email) {
      formIsValid = false;
      newErrors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message) {
      formIsValid = false;
      newErrors.message = "Please enter your message.";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission, e.g., send form data to a server
      console.log("Form submitted successfully:", formData);
      setFormData({ fullName: "", email: "", message: "" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact" className="py-20 px-10 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Let’s Connect</h2>
        <p className="mb-8 text-sm leading-relaxed tracking-wide">
          Feel free to reach out for collaborations, job opportunities, or just to say hi!
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="p-4 lg:py-8 text-start relative lg:w-1/2">
            <Image
              src="/profile.jpg"
              alt="profile image"
              width={300}
              height={200}
              className="rounded-lg border"
            />
            <div className="mt-2">
              <h3 className="text-lg font-bold mt-4">Sixtus Aondoakaa</h3>
              <p className="text-sm">Software Engineer</p>
              <div className="mt-4">
                <h4 className="py-2 font-bold tracking-wide">Contact me</h4>
                <p className="inline-flex tracking-wide py-1 items-center text-sm">
                  <FaPhoneAlt className="mr-2" /> +2349022048105
                </p><br />
                <p className="inline-flex items-center tracking-wider text-sm">
                  <FaEnvelope className="mr-2" /> sixtusushrey@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* <form onSubmit={handleSubmit} className="p-4 justify-start items-start space-y-4 w-full">
            <div>
              <label htmlFor="fullName" className="block text-start py-2 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={handleChange}
                className="text-sm w-full p-2 lg:p-3 rounded-lg border bg-secondary"
              />
              {errors.fullName && <p className="text-red-500 text-start text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-start py-2 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
                className="text-sm w-full p-2 lg:p-3 rounded-lg border bg-secondary"
              />
              {errors.email && <p className="text-red-500 text-start text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-start py-2 text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                className="text-sm w-full p-2 lg:p-3 border rounded-lg bg-secondary"
                rows={4}
              ></textarea>
              {errors.message && <p className="text-red-500 text-start text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="border cursor-pointer hover:bg-blue-800 rounded-lg bg-blue-600 text-white p-2 lg:p-3 w-full"
            >
              Send Message
            </button>
          </form> */}
          <div className="p-4 justify-start items-start space-y-4 w-full">

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;







