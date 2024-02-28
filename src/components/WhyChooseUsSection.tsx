"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Wide Music Selection",
    description:
      "Explore a vast collection of music spanning various genres, artists, and eras. From classical masterpieces to the latest chart-toppers, we have something for every music enthusiast.",
  },
  {
    title: "Personalized Recommendations",
    description:
      "Receive tailored recommendations based on your music preferences and listening history. Discover new artists and songs that resonate with your unique taste.",
  },
  {
    title: "High-Quality Audio",
    description:
      "Enjoy crystal-clear sound quality with our high-fidelity audio streaming. Immerse yourself in the music and experience every note as the artist intended.",
  },
  {
    title: "Stay Updated with New Releases",
    description:
      "Never miss out on the latest releases from your favorite artists. Stay updated with real-time notifications and be the first to listen to new tracks as soon as they drop.",
  },
];

function WhyChooseUsSection() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUsSection;
