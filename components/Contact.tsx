import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-10 bg-secondary">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Let’s Connect</h2>
        <p className="mb-8 text-sm leading-relaxed tracking-wide">Feel free to reach out for collaborations, job opportunities, or just to say hi!</p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 lg:p-3 rounded-lg border bg-secondary" />
          <input type="email" placeholder="Your Email" className="w-full p-2 lg:p-3 rounded-lg border bg-secondary" />
          <textarea placeholder="Your Message" className="w-full p-2 lg:p-3 border rounded-lg bg-secondary" rows={4}></textarea>
          <button type="submit" className="border cursor-pointer hover:bg-blue-800 rounded-lg bg-blue-600 text-white p-2 lg:p-3 w-full">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
