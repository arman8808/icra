import React from "react";
import heroImg from "../../Assests/Images/Image Placeholder.png";
import logo from "../../Assests/Images/logo 1.png";
import logo1 from "../../Assests/Images/logo 2.png";
import logo3 from "../../Assests/Images/logo 3.png";
import logo4 from "../../Assests/Images/logo 4.png";
import logo5 from "../../Assests/Images/logo 5.png";
import CoreServiceCard from "../../Components/CoreServiceCard/CoreServiceCard";
import wework from "../../Assests/Images/Image Placeholder (1).png";
import bull from "../../Assests/Images/Group.png";
function Home() {
  return (
    <>
      <div className="w-full flex items-center justify-center flex-col gap-[3rem] bg-background pt-4">
        <div className="w-[80%] flex items-center justify-between gap-[4rem]">
          <img src={heroImg} alt="heroImg" className="object-contain " />
          <div className="flex items-start justify-start flex-col gap-[2rem]">
            <h1 className="text-textColor text-3xl font-bold">
              ICRA (IMPULSE CAPITAL & RESEARCH ANALYSIS) PRIVATE LTD
            </h1>
            <p className="text-textColor text-sm">
              ICRA (IMPULSE CAPITAL & RESEARCH ANALYSIS) PRIVATE LTD Maximize
              your investments with our world-class stock trading and venture
              capital strategies. Get Started
            </p>
            <button className="bg-green text-white button">Get Started</button>
          </div>
        </div>
        <div className="w-[80%] flex items-start justify-between gap-4 bg-secondryBackground px-[1.5rem] py-[1rem] flex-col border-t-md">
          <p className="text-textColor">Trusted by 300+ Clients since 2017</p>
          <div className="flex items-center justify-between gap-4 w-full">
            <img src={logo} alt="logo" />
            <img src={logo1} alt="logo" />
            <img src={logo3} alt="logo" />
            <img src={logo4} alt="logo" />
            <img src={logo5} alt="logo" />
          </div>
        </div>
      </div>
      <div
        className="w-full h-fit flex items-center justify-center flex-col gap-[3rem]  bg-secondryBackground"
        style={{
          backgroundImage: `url('${bull}')`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "left",
          backgroundPositionY: "bottom",
          backgroundSize:'initial',
          backgroundBlendMode:'hard-light'
        }}
      >
        <div className="w-[80%]  px-[1.5rem] py-[1rem] grid grid-cols-2 gap-4 pt-[2rem]">
          <span className="flex flex-col items-start justify-start gap-4 ">
            <h2 className="text-blackShade font-bold text-2xl">
              Our Core Values
            </h2>
            <p className="text-secondTextColor text-sm font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </span>
          <CoreServiceCard />
          <CoreServiceCard />
          <CoreServiceCard />
        </div>
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-[3rem] py-4 mb-4  bg-white">
        <div className="w-[80%]  flex flex-col items-start justify-start pt-[2rem]">
          <h2 className="text-blackShade font-bold text-2xl">
            What’s Our Services
          </h2>
          <div className="w-[100%]  grid grid-cols-2 gap-4 pt-[2rem]">
            <CoreServiceCard />
            <CoreServiceCard />
            <CoreServiceCard />
            <CoreServiceCard />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-[3rem] pt-[3rem] mt-[3rem]  bg-background">
        <span className="w-full flex items-center justify-center flex-col gap-3">
          <h2 className="text-blackShade font-bold text-2xl">How we works</h2>
          <p className="w-[50%] text-center text-secondTextColor text-sm font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </span>
        <div className="w-[80%] flex items-center justify-center flex-col gap-4">
          <div className="grid grid-cols-2 gap-4 items-center">
            <span className="flex items-start justify-start flex-col">
              <h2 className="text-blackShade font-bold text-2xl">
                Research and Analysis
              </h2>
              <p className="text-secondTextColor">
                We conduct extensive research and market analysis to identify
                high-potential investment opportunities. Our team keeps a close
                watch on the financial landscape, identifying market trends, and
                assessing risks.
              </p>
            </span>
            <img src={wework} alt="wework" className="w-[90%] rounded-md" />
          </div>
          <div className="grid grid-cols-2 gap-4 items-center">
            <img src={wework} alt="wework" className="w-[90%] rounded-md" />
            <span className="flex items-start justify-start flex-col">
              <h2 className="text-blackShade font-bold text-2xl">
                Research and Analysis
              </h2>
              <p className="text-secondTextColor">
                We conduct extensive research and market analysis to identify
                high-potential investment opportunities. Our team keeps a close
                watch on the financial landscape, identifying market trends, and
                assessing risks.
              </p>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center">
            <span className="flex items-start justify-start flex-col">
              <h2 className="text-blackShade font-bold text-2xl">
                Research and Analysis
              </h2>
              <p className="text-secondTextColor">
                We conduct extensive research and market analysis to identify
                high-potential investment opportunities. Our team keeps a close
                watch on the financial landscape, identifying market trends, and
                assessing risks.
              </p>
            </span>
            <img src={wework} alt="wework" className="w-[90%] rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
