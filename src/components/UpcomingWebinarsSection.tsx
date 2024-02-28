"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const upcomingWebinars = [
  {
    title: "Music Theory Fundamentals",
    description:
      "Join us for a comprehensive introduction to music theory. Learn about notes, scales, chords, and more, and how they form the foundation of music composition and performance.",
    slug: "music-theory-fundamentals",
    isFeatured: true,
  },
  {
    title: "Introduction to Songwriting",
    description:
      "Discover the art of songwriting in this interactive webinar. Explore lyric writing, melody construction, song structure, and unleash your creativity to compose your own songs.",
    slug: "introduction-to-songwriting",
    isFeatured: true,
  },
  {
    title: "Guitar Basics Workshop",
    description:
      "Get started with the guitar in this hands-on workshop. Learn essential techniques, basic chords, strumming patterns, and begin your journey to becoming a proficient guitarist.",
    slug: "guitar-basics-workshop",
    isFeatured: false,
  },
  {
    title: "Piano for Beginners",
    description:
      "Embark on your piano journey with this beginner-friendly webinar. Learn the basics of piano playing, including proper hand placement, note reading, and playing simple melodies.",
    slug: "piano-for-beginners",
    isFeatured: false,
  },
  {
    title: "Vocal Techniques Masterclass",
    description:
      "Enhance your singing skills in this vocal techniques masterclass. Explore breathing techniques, vocal warm-ups, pitch control, and learn how to express yourself through singing.",
    slug: "vocal-techniques-masterclass",
    isFeatured: false,
  },
];

function UpcomingWebinarsSection() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={upcomingWebinars.map((webinar) => {
              return {
                title: webinar.title,
                description: webinar.description,
                link: webinar.slug,
              };
            })}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 bg-white text-neutral-600 rounded border border-neutral-600 hover:bg-gray-300 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinarsSection;
