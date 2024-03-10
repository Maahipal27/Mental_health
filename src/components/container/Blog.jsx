// Blog.js

import React from "react";
import { courses } from "../../Data";
import Course from "../../components/container/Course/Course";

const Blog = () => {
  return (
    <div className="section" id="courses">
      <div className="text-xl font-bold mt-32">Most Popular Blogs</div>
      <div className="mt-12 overflow-x-hidden w-full relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {courses.map((course) => {
            return <Course key={course.id} {...course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
