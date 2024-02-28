"use client";
import React from "react";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: String;
  slug: String;
  description: String;
  price: number;
  instructor: String;
  isFeatured: boolean;
}

function FeaturedCoursesSection() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With The Best
          </p>
        </div>
      </div>
      <div className="mt-10 mx-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => {
            return (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] overflow-hidden h-full max-w-sm bg-white dark:bg-zinc-900">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <p className="text-lg sm:text-xl mt-4 mb-2 text-black dark:text-neutral-200">
                      {course.title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                      {course.description}
                    </p>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="mt-4 px-4 py-1 rounded border border-neutral-600 bg-white text-black hover:bg-gray-300 transition duration-200"
                    >
                      Learn More
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 bg-white text-black hover:bg-gray-300 transition duration-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCoursesSection;
