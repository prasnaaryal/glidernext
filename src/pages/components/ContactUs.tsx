import { Box } from "@mui/material";
import React from "react";

const ContactUs = () => {
  return (
    <Box className="container mx-auto py-10 px-4">
      {/* Flexbox with increased gap between form and map */}
      <Box className="flex flex-wrap md:flex-nowrap justify-between items-start gap-16">
        {" "}
        {/* Added flex-nowrap for non-wrapping */}
        {/* Contact Form */}
        <Box className="w-full md:w-1/3 min-w-[300px]">
          {" "}
          {/* One-third width and min width for form */}
          <h1 className="font-semibold text-3xl mb-4">CONTACT US</h1>
          <p className="text-lg mb-6">
            Ask Us Anything - We’d Love to Hear from You!
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Your E-mail"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <textarea
              rows={5}
              placeholder="Write a Message"
              className="w-full p-3 border border-gray-300 rounded-md"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-amber-500 text-white font-semibold rounded-md"
            >
              SEND MESSAGE
            </button>
          </form>
        </Box>
        {/* Google Map Embed */}
        <Box className="w-full md:w-2/3 min-w-[400px]">
          {" "}
          {/* Two-thirds width and min width for map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.761432793425!2d85.3136214145376!3d27.69830298279439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fd5ff74017%3A0x2f1e4d6f2e74d373!2sApollo%20International%20College!5e0!3m2!1sen!2snp!4v1601329639945!5m2!1sen!2snp"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            className="border-0 rounded-md shadow-md"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
