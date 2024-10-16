import React from "react";
import img from "../../Assests/Images/Image Placeholder (23).png";
function AmazingPortfolioCard({ image, title, para }) {
  return (
    <div className="flex items-center justify-center relative">
      <img src={image ? image : img} alt="banner" />
      <span className="absolute bg-white bottom-0 right-[-7rem] w-[100%] h-[70%] p-4 rounded-md flex item-start justify-start gap-4 flex-col opacity-80">
        <h6 className="text-blackShade text-lg font-bold">
          {title ? title : "Rocket Fuel Payment"}
        </h6>
        <p className="text-footerText">
          {para
            ? para
            : " A successful fintech startup we funded through our venture capital arm, achieving 300% growth in under 2 years."}
        </p>
      </span>
    </div>
  );
}

export default AmazingPortfolioCard;
