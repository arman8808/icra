import React from "react";
import BlogCard from "../../Components/BlogCard/BlogCard";

function Blog() {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-[3rem] mt-[2rem]  pt-4 ">
      <span className="flex items-center justify-center flex-col gap-1">
        <h1 className="text-blackShade text-3xl font-bold"> Blog</h1>
        <p className="text-textColor font-normal w-[70%] text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry dummy text ever since.
        </p>
      </span>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
}

export default Blog;
