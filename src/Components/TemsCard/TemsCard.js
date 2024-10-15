import React from "react";
import img from "../../Assests/Images/Logo.png";
function TemsCard() {
  return (
    <div className="flex items-start justify-start gap-4 card_shadow py-[1rem] px-[1.5rem] rounded">
      <img src={img} alt="team member" />
      <span>
        <h3 className="text-blackShade font-bold text-lg">  Floyd Miles</h3>
        <p className="text-secondTextColor text-sm font-normal">Finance COnsultant</p>
      </span>
    </div>
  );
}

export default TemsCard;
