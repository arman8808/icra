import React from "react";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { blogData } from "../../blogData";
function Blog() {
  return (
    <div className="w-full  flex items-center justify-center flex-col gap-[3rem] mt-[2rem]  pt-4 ">
      <span className="flex items-center justify-center flex-col gap-1">
        <h1 className="text-blackShade text-3xl font-bold"> Blog</h1>
        <p className="text-textColor font-normal w-[70%] tablet:w-[90%] text-center">
        Your Source for Financial Knowledge and Expertise
        </p>
      </span>
      {blogData?.map((item) => (
        <BlogCard title={item?.title} subDec={item?.subDec} image={item?.image}/>
      ))}
    
    </div>
  );
}

export default Blog;
