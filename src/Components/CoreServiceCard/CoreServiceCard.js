import React from "react";
import img from "../../Assests/Images/Logo.png";
function CoreServiceCard({ image, title, para }) {
  return (
    <div className="p-[1.5rem] rounded-md flex items-start justify-start flex-col gap-4 ease-in-out duration-300 transition-colors hover:bg-[#DCFDCA] cursor-pointer">
      <img src={image ? image : img} alt="logo" />
      <h2 className="text-blackShade font-bold text-lg">
        {title ? title : "Integrity"}
      </h2>
      <p className="text-secondTextColor text-sm font-normal">
        {para
          ? para
          : "We believe in transparency and building long-lasting relationships based on trust."}
      </p>
    </div>
  );
}

export default CoreServiceCard;
