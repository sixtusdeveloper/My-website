"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact" className="py-20 px-4 lg:px-14 bg-secondary">
      <div className="max-w-6xl mx-auto text-start md:text-center">
        <h2 className="font-bold text-start md:text-center text-[2rem] lg:text-[2.5rem] leading-snug tracking-wide mb-8">
          <strong>
            Let’s{" "}
            <span className="bg-gradient-to-r from-purple-800 via-blue-500 to-yellow-600 bg-clip-text text-transparent">
              Connect
            </span>
          </strong>
        </h2>
        <p className="mb-8 text-md leading-relaxed tracking-wide">
          Feel free to reach out for collaborations, job opportunities, or just
          to say hi!
        </p>
        <div className="flex flex-col md:flex-row justify-between items-start md:gap-6 lg:gap-8 gap-2 w-full">
          <div className="border shadow-md rounded-lg p-4 md:p-4 w-full md:text-start relative md:w-1/2">
            <Image
              src="/profile.jpg"
              alt="profile image"
              width={300}
              height={200}
              className="rounded-lg border shadow-md contact-img"
              style={{ width: "auto", height: "auto" }}
            />
            <div className="mt-2">
              <h3 className="text-lg font-bold mt-4">Sixtus Aondoakaa</h3>
              <p className="text-base font-medium">Software Engineer</p>
              <div className="mt-4">
                <h4 className="py-2 text-lg font-bold">
                  <strong>Contact Me</strong>
                </h4>
                <div className="inline-flex py-2 items-center border rounded-lg p-2 w-full my-1">
                  <Image
                    src="/location.webp"
                    alt="Location"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <p className="text-sm py-1 mb-0">
                    Plot 39, Awolowo Road, Ikoyi, Lagos
                  </p>
                </div>
                <br />
                <div className="inline-flex py-2 items-center border rounded-lg p-2 w-full my-1">
                  <Image
                    src="/phone.png"
                    alt="Phone"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <p className="text-sm py-1 mb-0">
                    +234&nbsp;902&nbsp;2048&nbsp;105
                  </p>
                </div>
                <br />
                <div className="inline-flex items-center border rounded-lg p-2 w-full my-1">
                  <Image
                    src="/Gmail.png"
                    alt="Mail"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <p className="text-sm tracking-wide py-1 mb-0">
                    contact@sixtusdev.net
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border shadow-md p-4 sm:p-8 lg:p-16 rounded-lg justify-start items-start space-y-4 w-full">
            {/* Contact form component imported here */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
