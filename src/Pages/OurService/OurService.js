import React from "react";
import img from "../../Assests/Images/Rectangle 18.png";
import BusinessCard from "../../Components/BusinessCard/BusinessCard";
function OurService() {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-[3rem] mt-[2rem]  pt-4">
      <div className="w-[80%] grid grid-cols-3 gap-[2rem] items-center justify-center">
        <img src={img} alt="banner" />
        <div className="col-span-2 ">
          <h2 className="text-[#0B2F04] text-xl font-bold">Our Service</h2>
          <p className="  text-3xl text-[#5B5A78] ">
            At Impulse Capital & Research Analysis Pvt Ltd, we offer a wide
            range of services to help businesses and individuals make informed
            financial decisions, grow their wealth, and succeed in the global
            marketplace.
          </p>
        </div>
      </div>
      <div className="w-[80%] flex flex-col gap-4 items-start justify-start">
        <h2 className="text-4xl font-extraBold text-[#413939]">
          What our business do
        </h2>
        <p className="text-[#5B5A78] font-bold text-base">
          Our business is dedicated to providing expert financial consulting
          services, with a focus on the stock market, venture capital, and
          strategic investments. Our core services include:
        </p>
      </div>
      <div className="w-[80%] flex  gap-4 items-start justify-start">
        <BusinessCard />
        <BusinessCard />
      </div>
      <div className="w-[80%] flex  gap-4 items-start justify-start bg-white"></div>
    </div>
  );
}

export default OurService;
