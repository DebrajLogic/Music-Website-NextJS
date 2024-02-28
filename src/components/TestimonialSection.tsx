"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Enrolling in this music school was a transformative experience. It's where I discovered my passion for music and honed my skills. Forever grateful!",
    name: "Emily Anderson",
    title: "Piano Student",
  },
  {
    quote:
      "The instructors here are truly exceptional. Their dedication and expertise helped me progress from a novice to a confident musician. Highly recommend!",
    name: "Michael Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "Attending this music school was a dream come true. The supportive environment and top-notch instruction made all the difference.",
    name: "Sophia Ramirez",
    title: "Voice Student",
  },
  {
    quote:
      "I've attended many music schools, but none compare to this one. The curriculum is comprehensive, the facilities are top-notch, and the staff is incredibly talented.",
    name: "David Lee",
    title: "Drums Student",
  },
  {
    quote:
      "Choosing this music school was one of the best decisions I've ever made. The lessons are engaging, the atmosphere is inspiring, and the results are remarkable.",
    name: "Olivia Smith",
    title: "Violin Student",
  },
];

function TestimonialSection() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl text-white font-bold text-center mb-8 z-10">
        Hear Our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
