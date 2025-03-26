"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

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
    <section id="contact" className="py-10 px-2 lg:px-14 bg-secondary">
      <div className="max-w-6xl mx-auto text-start md:text-center">
        <div className="px-2">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            Let’s Connect
          </h2>
          <p className="mb-8 text-md leading-relaxed tracking-wide text-gray-600 dark:text-blue-100">
            Feel free to reach out for collaborations, job opportunities, or
            just to say hi!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start md:gap-6 lg:gap-8 gap-4 w-full">
          <div className="border bg-secondary dark:bg-gray-900 shadow-sm rounded-lg p-4 md:p-4 w-full md:text-start relative md:w-1/2">
            <Image
              src="/profile.jpg"
              alt="profile image"
              width={300}
              height={200}
              className="rounded-md border shadow-md contact-img"
              style={{ width: "auto", height: "auto" }}
            />
            <div className="mt-2">
              <h3 className="text-lg font-bold mt-4 text-gray-700 dark:text-blue-50">
                Sixtus Aondoakaa
              </h3>
              <p className="text-base font-medium text-gray-700 dark:text-blue-100">
                Software Engineer
              </p>
              <div className="mt-4">
                <h4 className="py-2 text-lg font-bold text-gray-700 dark:text-gray-200">
                  <strong>Contact Me</strong>
                </h4>
                <div className="inline-flex py-2 items-center border rounded-md p-2 w-full my-1">
                  <Image
                    src="/location.webp"
                    alt="Location"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <p className="text-sm py-1 mb-0 text-gray-600 dark:text-blue-200">
                    Plot 39, Awolowo Road, Ikoyi, Lagos
                  </p>
                </div>
                <br />
                <Link
                  href="https://wa.me/+2349022048105"
                  target="_blank"
                  className="inline-flex py-2 items-center border rounded-md hover:underline hover:text-blue-400 p-2 w-full my-1"
                >
                  <Image
                    src="/phone.png"
                    alt="Phone"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <p className="text-sm py-1 mb-0 text-gray-600 dark:text-blue-200">
                    +234&nbsp;902&nbsp;2048&nbsp;105
                  </p>
                </Link>
                <br />
                <Link
                  href="mailto:contact@sixtusdev.net?subject=Let's%20connect!"
                  className="inline-flex items-center border hover:underline hover:text-blue-400 rounded-md p-2 w-full my-1"
                >
                  <Image
                    src="/Gmail.png"
                    alt="Mail"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <p className="text-sm tracking-wide py-1 mb-0 text-gray-600 dark:text-blue-200">
                    contact@sixtusdev.net
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="border bg-secondary dark:bg-gray-900 shadow-sm p-4 md:p-4 lg:px-16 lg:py-8 rounded-lg justify-start items-start space-y-4 w-full">
            {/* Contact form component imported here */}
            <h2 className="text-2xl py-2 lg:text-3xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
              Contact Form
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
