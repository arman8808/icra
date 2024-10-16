import React from "react";
import img from "../../Assests/Images/Logo.png";
function BusinessCard({ para, image }) {
  return (
    <div className="bg-[#DCFDCA] flex items-center justify-start gap-3 p-3 flex-1">
      <img src={image ? image : "image"} alt="logo" />
      <p className="text-[#5B5A78]">
        {para
          ? para
          : "Investment Advisory: We provide personalized investment solutions to help you maximize your returns while minimizing risks. Whether you're a seasoned investor or a beginner, we have the tools and knowledge to assist you."}
      </p>
    </div>
  );
}

export default BusinessCard;
