import React, { useEffect, useState } from "react";
import banner from "../../Assests/Images/Container1.png";
import { useParams } from "react-router-dom";
import { blogData } from "../../blogData";
function SingleBlog() {
  const { singleblog } = useParams();
  const [blog, setBlog] = useState([]);
  const filterDataHandle = () => {
    const filter = blogData?.find((item) => item?.title === singleblog);
    setBlog(filter && filter);
  };
  useEffect(() => {
    filterDataHandle();
  }, [singleblog]);
  return (
    <div className="w-full flex items-center justify-center flex-col gap-[3rem] mt-[2rem]  pt-4 ">
      <img
        src={blog?.image ? blog?.image : banner}
        alt="banner"
        className="h-[25rem] w-[90%] object-cover rounded-md"
      />
      <div className="w-[90%] flex items-start justify-start flex-col gap-2">
        <span className="flex items-start justify-start gap-2">
          <h6 className="text-blackShade text-sm font-extraBold">
            DEVELOPMENT
          </h6>
          <p className="text-sm text-textColor">23 September 2020</p>
        </span>
        <h2 className="text-blackShade text-3xl font-extraBold">
          {blog
            ? blog?.title
            : "How to make a website look more attractive with llustrations"}
        </h2>
        <p className="text-textColor leading-6">{blog ? blog?.subDec : ""}</p>{" "}
        {blog?.details?.map((item) => (
          <div>
            <h6>{item?.subTitle}</h6>
            <p className="text-textColor leading-6">{item?.subDec}</p>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleBlog;
