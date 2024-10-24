import React from "react";
import bgImage from "../../Assests/Images/bg.png";
function GetInTouchCard() {
  return (
    <div
      className="w-full h-fit flex items-center justify-between bg-codGray px-[8%] py-[10%] mobile:flex-col mobile:px-[3%] gap-4 my-element rounded-md"
      style={{
        backgroundImage: `url("${bgImage}")`,
        backgroundBlendMode: "luminosity",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // backgroundSize:"contain"
      }}
    >
      <h6 className="text-white w-[70%] font-bold text-2xl mobile:text-xl mobile:w-[90%]">
        Get in touch to learn how we can help you grow your wealth through
        strategic investments and expert market analysis.
      </h6>
      <button className="button bg-lightGreen text-white">
        Invest with Us
      </button>
    </div>
  );
}

export default GetInTouchCard;
