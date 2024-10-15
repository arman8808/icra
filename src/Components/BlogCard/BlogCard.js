import React from "react";
import img from "../../Assests/Images/Container.png";
import { Link } from "react-router-dom";
function BlogCard() {
  return (
    <div className="w-[30rem] flex flex-col gap-3">
      <img src={img} alt="blog banner" className="w-full rounded-md" />
      <div className="flex items-start justify-start flex-col gap-2">
        <span className="flex items-start justify-start gap-2">
          <h6 className="text-blackShade text-sm font-extraBold">
            DEVELOPMENT
          </h6>
          <p className="text-sm text-textColor">23 September 2020</p>
        </span>
        <h2 className="text-blackShade text-xl font-extraBold">
          How to make a website look more attractive with llustrations
        </h2>
        <p className="text-textColor leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit
        </p>
        <Link to='/blog/singleblog' className="border_bottom">Read More</Link>
      </div>
    </div>
  );
}

export default BlogCard;
