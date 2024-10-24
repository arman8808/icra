import React from "react";
import img from "../../Assests/Images/Logo.png";

function TemsCard({ image, Name, Designation, Education, Expereince }) {
  return (
    <div className="flex items-start justify-start gap-4 card_shadow py-[1rem] px-[1.5rem] rounded transition-all transform duration-500 ease-in-out hover:bg-[#e5e7eb] hover:scale-105 hover:shadow-lg rounded-lg border-2 border-transparent hover:border-gray-300 hover:text-gray-900 cursor-pointer">
      <img
        src={image ? image : img}
        alt="team member"
        className="h-[8rem] object-contain"
      />
      <span>
        <h3 className="text-blackShade font-bold text-xl">
          {" "}
          {Name ? Name : " Floyd Miles"}
        </h3>
        <p className="text-green font-bold text-lg font-semiBold">
          {Designation ? Designation : ""}
        </p>{" "}
        <p className="text-secondTextColor font-bold text-lg font-semiBold">
          {Education ? Education : ""}
        </p>
        <p className="text-secondTextColor font-bold text-lg font-semiBold">
          {Expereince ? Expereince : ""}
        </p>
      </span>
    </div>
  );
}

export default TemsCard;
