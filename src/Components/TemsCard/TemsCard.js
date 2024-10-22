import React from "react";
import img from "../../Assests/Images/Logo.png";

function TemsCard({ image, Name, Designation,Education,Expereince }) {
  return (
    <div className="flex items-start justify-start gap-4 card_shadow py-[1rem] px-[1.5rem] rounded">
      <img
        src={image ? image : img}
        alt="team member"
        className="h-[10rem] object-contain"
      />
      <span>
        <h3 className="text-blackShade font-bold text-lg">
          {" "}
          {Name ? Name : " Floyd Miles"}
        </h3>
        <p className="text-secondTextColor font-bold text-sm font-normal">
          {Designation ? Designation : "Finance COnsultant"}
        </p>{" "}
        <p className="text-secondTextColor font-bold text-sm font-normal">
          {Education ? Education : "Finance COnsultant"}
        </p>  
         <p className="text-secondTextColor font-bold text-sm font-normal">
          {Expereince ? Expereince : "Finance COnsultant"}
        </p>
      </span>
    </div>
  );
}

export default TemsCard;
