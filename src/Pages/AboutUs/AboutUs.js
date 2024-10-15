import React from "react";
import aboutus from "../../Assests/Images/Rectangle 171.png";
import aboutus1 from "../../Assests/Images/Image Placeholder1.png";
import CoreServiceCard from "../../Components/CoreServiceCard/CoreServiceCard";
import TemsCard from "../../Components/TemsCard/TemsCard";
function AboutUs() {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-[3rem]  pt-4">
      <div className="w-[90%] flex items-center justify-center gap-[4rem] relative mt-4">
        <img
          src={aboutus}
          alt="aboutus"
          className="rounded-md w-full h-[28rem]"
        />
        <span className="flex items-start justify-start gap-4 flex-col absolute w-[80%]">
          <h1 className="text-white text-3xl font-bold">About us</h1>
          <p className="text-white leading-8">
            At Impulse Capital & Research Analysis Pvt Ltd, we are dedicated to
            helping our clients navigate the complex world of venture capital
            and stock market trading. With a global presence and a team of
            seasoned financial consultants, we specialize in delivering
            strategic solutions tailored to meet the unique needs of our
            clients.
          </p>
        </span>
      </div>
      <div className="w-[80%] flex items-center justify-between flex-col gap-4">
        <span className="flex items-start justify-start flex-col gap-1">
          <h2 className="text-blackShade font-bold text-2xl">Our Mission</h2>
          <p className="text-textColor font-normal">
            Our mission is to empower individuals and businesses to reach new
            heights through strategic financial insights, cutting-edge market
            research, and personalized investment solutions. We believe that
            with the right tools, anyone can succeed in the global financial
            markets.
          </p>
        </span>{" "}
        <span className="flex items-start justify-start flex-col gap-1">
          <h2 className="text-blackShade font-bold text-2xl">Our Vision</h2>
          <p className="text-textColor font-normal">
            To be a leading force in global financial consulting, guiding
            entrepreneurs and investors toward a brighter, more prosperous
            future. We aim to create a positive impact through sustainable
            investments and responsible financial practices.
          </p>
        </span>
        <img src={aboutus1} alt="aboutus1" className="w-full h-[22rem]" />
      </div>
      <div className="w-[80%]  px-[1.5rem] py-[1rem] grid grid-cols-2 gap-4 pt-[2rem] bg-white rounded-md">
        <span className="flex flex-col items-start justify-start gap-4 ">
          <h2 className="text-blackShade font-bold text-2xl">
            Our Core Values
          </h2>
          <p className="text-secondTextColor text-sm font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </span>
        <CoreServiceCard />
        <CoreServiceCard />
        <CoreServiceCard />
      </div>
      <div className="w-[80%]  px-[1.5rem] py-[1rem]  gap-4 pt-[2rem]  rounded-md">
        <div className="grid grid-cols-3">
          <h2 className="text-blackShade font-bold text-2xl">Our Special Teams</h2>
          <p className="col-span-2 text-secondTextColor text-sm font-normal">
            Our team of experts brings together years of experience in financial
            consulting, venture capital, and stock market analysis. We work
            collaboratively with our clients to ensure their investments grow in
            a safe and sustainable manner.
          </p>
        </div>
        <div className="grid grid-cols-3 pt-[1.5rem] gap-4">
        <TemsCard/>
        <TemsCard/>
        <TemsCard/>
        <TemsCard/>
        <TemsCard/>
        <TemsCard/>
        <TemsCard/>
        <TemsCard/>
        <TemsCard/>

        </div>
      </div>
    </div>
  );
}

export default AboutUs;
