import React from "react";
import TemsCard from "../../Components/TemsCard/TemsCard";
import line from "../../Assests/Images/Group 65.png";
import SecondTeamCard from "../../Components/TemsCard/SecondTeamCard";
function Teams() {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-[2rem]  pt-4">
      <div className="w-[90%] mobile:w-[90%] tablet:w-[90%]  grid grid-cols-2 gap-4  px-4 gap-4">
        <h1 className=" text-4xl font-semibold">Our Special Teams</h1>
        <p className="text-footerText">
          Our team of experts brings together years of experience in financial
          consulting, venture capital, and stock market analysis. We work
          collaboratively with our clients to ensure their investments grow in a
          safe and sustainable manner.
        </p>
      </div>
      <div className="w-[90%] mobile:w-[90%] tablet:w-[90%]  flex items-start justify-start flex-col gap-4  px-4 gap-4">
        <h2 className=" text-2xl font-semibold">Management</h2>
        <div className="grid grid-cols-3 gap-4 mb-2">
      
          <SecondTeamCard />
          <SecondTeamCard />
          <SecondTeamCard />
        </div>
        <img src={line} alt="line" />
      </div>
    </div>
  );
}

export default Teams;
