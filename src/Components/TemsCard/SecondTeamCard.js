import React from "react";
import img from "../../Assests/Images/Rectangle 32.png";
function SecondTeamCard() {
  return (
    <div className="flex items-center justify-start flex-col gap-1 pb-2 rounded transition-all transform duration-500 ease-in-out hover:bg-[#e5e7eb]  hover:scale-105 hover:shadow-lg rounded-lg border-2 border-transparent hover:border-gray-300 hover:text-gray-900 cursor-pointer">
      <img src={img} alt="profile pic" className="object-contain rounded-md "/>
      <h6 className="text-xl font-semibold">Mohd Talib Aziz</h6>
      <p className="text-footerText ">Executive Director</p>
    </div>
  );
}

export default SecondTeamCard;
