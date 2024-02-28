"use client";
import { Meteors } from "@/components/ui/meteors";
import React from "react";

function page() {
  const handleSubmit = () => {};
  return (
    <div className="min-h-screen bg-gray dark:bg-gray-900 py-12 pt-36 relative text-white">
      <Meteors number={50} className="" />
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-center font-bold text-xl sm:text-5xl mb-8">
          Contact Us
        </h1>
        <p className="text-neutral-500 text-center text-sm max-w-lg mx-auto my-2">
          Feel free to reach out to us with any questions, inquiries, or
          feedback. Our dedicated team is here to assist you on your musical
          journey. We look forward to hearing from you!
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4 sm:space-y-8 flex flex-col"
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            className="rounded border border-neutral-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-500 focus:ring-2 focus:ring-teal-500 outline-none"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            className="rounded border border-neutral-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-500 focus:ring-2 focus:ring-teal-500 outline-none"
          ></textarea>
          <button className="px-6 py-2 font-medium text-white rounded bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;
