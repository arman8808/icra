import React from "react";
import heroImg from "../../Assests/Images/Image Placeholder.png";
import logo from "../../Assests/Images/logo 1.png";
import logo1 from "../../Assests/Images/logo 2.png";
import logo3 from "../../Assests/Images/logo 3.png";
import logo4 from "../../Assests/Images/logo 4.png";
import logo5 from "../../Assests/Images/logo 5.png";
import CoreServiceCard from "../../Components/CoreServiceCard/CoreServiceCard";
import wework from "../../Assests/Images/Image Placeholder (1).png";
import wework1 from "../../Assests/Images/Image Placeholder (2).png";
import wework3 from "../../Assests/Images/Image Placeholder (3).png";
import portfolio from "../../Assests/Images/Image Placeholder (22).png";
import portfolio1 from "../../Assests/Images/Image Placeholder (21).png";
import one from "../../Assests/Images/01.png";
import two from "../../Assests/Images/020.png";
import three from "../../Assests/Images/03.png";
import greendots from "../../Assests/Images/Ornament12.png";
import bull from "../../Assests/Images/Group.png";
import graph from "../../Assests/Images/Frame.png";
import Group55 from "../../Assests/Images/Group 55.png";
import Group56 from "../../Assests/Images/Group 56.png";
import Group57 from "../../Assests/Images/Group 57.png";
import manWithBallon from "../../Assests/Images/d-isometric-flat-illustration-finance-crisis-bankruptcy-lose-money-item_109064-7683-transformed 1.png";
import GetInTouchCard from "../../Components/GetInTouchCard/GetInTouchCard";
import AmazingPortfolioCard from "../../Components/AmazingPortfolioCard/AmazingPortfolioCard";
import Group58 from "../../Assests/Images/Group 58.png";
import Group59 from "../../Assests/Images/Group 59.png";
import Group60 from "../../Assests/Images/Group 60.png";
import Group61 from "../../Assests/Images/Group 61.png";

import ConatctForm from "../../Components/ConatctForm/ConatctForm";
function Home() {
  const coreValue = [
    {
      title: "Integrity",
      value:
        "We believe in transparency and building long-lasting relationships based on trust.",
      image: Group55,
    },
    {
      title: "Totality",
      value:
        "Your investments are secure with us as we focus on minimizing risk and maximizing returns.",
      image: Group56,
    },
    {
      title: "Creativity",
      value:
        "Our strategies blend traditional and innovative financial practices to deliver the best results.",
      image: Group57,
    },
  ];
  const ourService = [
    {
      title: "Venture Capital",
      value:
        "We actively invest in early-stage companies, helping them grow through strategic funding and mentorship. Our venture capital arm, Impulse Global, is headquartered in Dubai, providing essential capital and hands-on guidance to budding entrepreneurs.",
      image: Group58,
    },
    {
      title: "Stock Market Training & Trading",
      value:
        "Impulse Capital, based in India, recruits and trains individuals to become expert stock market traders in U.S. exchanges, including NASDAQ and NYSE. With our guidance, we help them navigate the complexities of global financial markets, creating value for themselves and their clients.",
      image: Group59,
    },
    {
      title: "Company Branding Strategic",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: Group60,
    },
    {
      title: "Digital Business Workshop",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ",
      image: Group61,
    },
  ];
  return (
    <>
      <div className="w-full flex items-center justify-center flex-col gap-[3rem] bg-background pt-4 relative">
        <div className="w-[80%] flex items-center justify-between gap-[4rem] relative">
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
          <img
            src={greendots}
            alt="greendots"
            className="absolute  left-[30%] top-[80%]"
          />
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
        <img
          src={greendots}
          alt="greendots"
          className="absolute  left-[0%] top-[30%]"
        />
        <img
          src={greendots}
          alt="greendots"
          className="absolute  right-[0%] top-[2%]"
        />
      </div>
      <div
        className="w-full h-fit flex items-center justify-center flex-col gap-[3rem] mb-4  bg-secondryBackground"
        style={{
          backgroundImage: `url('${bull}')`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "left",
          backgroundPositionY: "bottom",
          backgroundSize: "initial",
          backgroundBlendMode: "hard-light",
        }}
      >
        <div className="w-[80%]  px-[1.5rem] py-[1rem] grid grid-cols-2 gap-4 pt-[2rem]">
          <span className="flex flex-col items-start justify-start gap-4 ">
            <h2 className="text-blackShade font-bold text-2xl">
              Our Core Values
            </h2>
            <p className="text-secondTextColor text-sm font-normal">
              Foundations of Integrity, Trust, and Excellence
            </p>
          </span>
          {coreValue?.map((item) => (
            <CoreServiceCard
              title={item?.title}
              para={item?.value}
              image={item?.image}
            />
          ))}
        </div>
      </div>
      <div
        className="w-full flex items-center justify-center flex-col gap-[3rem] py-4 mb-4  bg-white"
        style={{
          backgroundImage: `url('${graph}')`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "right",
          backgroundPositionY: "bottom",
          backgroundSize: "initial",
          backgroundBlendMode: "hard-light",
        }}
      >
        <div className="w-[80%]  flex flex-col items-start justify-start pt-[2rem]">
          <h2 className="text-blackShade font-bold text-2xl">
            What’s Our Services
          </h2>
          <div className="w-[100%]  grid grid-cols-2 gap-4 pt-[2rem]">
            {ourService?.map((item) => (
              <CoreServiceCard title={item?.title} para={item?.value} image={item?.image}/>
            ))}
          </div>
        </div>
      </div>
      <div
        className="w-full flex items-center justify-center flex-col gap-[3rem] py-4 pt-[3rem] mt-[3rem]  bg-background"
        style={{
          backgroundImage: `url('${manWithBallon}')`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "left",
          backgroundPositionY: "bottom",
          backgroundSize: "initial",
          backgroundBlendMode: "inherit",
        }}
      >
        <span className="w-full flex items-center justify-center flex-col gap-1">
          <h2 className="text-blackShade font-bold text-2xl">How we works</h2>
          <p className="w-[50%] text-center text-footerText text-lg font-normal">
            Our Methodology: Turning Ideas into Reality
          </p>
        </span>
        <div className="w-[80%] flex items-center justify-center flex-col gap-4">
          <div className="grid grid-cols-2 gap-4 items-center">
            <span className="flex items-start justify-start flex-col">
              <h2 className="text-blackShade font-bold text-2xl flex items-start justify-start">
                Research and Analysis
                <img src={one} alt="one" />
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
            <img src={wework1} alt="wework" className="w-[90%] rounded-md" />
            <span className="flex items-start justify-start flex-col">
              <h2 className="text-blackShade font-bold text-2xl flex items-start justify-start">
                Investment and Growth
                <img src={two} alt="one" />
              </h2>
              <p className="text-secondTextColor">
                Based on our research, we strategically invest in early-stage
                companies through our venture capital arm, while also engaging
                in stock market trading. We focus on balancing risk and reward
                to achieve optimal growth.
              </p>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center">
            <span className="flex items-start justify-start flex-col">
              <h2 className="text-blackShade font-bold text-2xl flex items-start justify-start">
                Profit Realization
                <img src={three} alt="one" />
              </h2>
              <p className="text-secondTextColor">
                Through active investment management and continuous analysis, we
                ensure our clients realize profitable returns. Our goal is to
                maximize returns while minimizing risks.
              </p>
            </span>
            <img src={wework3} alt="wework" className="w-[90%] rounded-md" />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-[3rem] py-4 pt-[3rem] mt-[3rem]">
        <div className="w-[80%] grid grid-cols-2 gap-4 pt-[2rem]">
          <h2 className="text-blackShade font-bold text-2xl">
            Our amazing portfolio
          </h2>
        </div>
        <div className="w-[80%] grid grid-cols-2 gap-4 pt-[2rem]">
          <AmazingPortfolioCard
            title={"Rocket Fuel Payment"}
            para={
              "A successful fintech startup we funded through our venture capital arm, achieving 300% growth in under 2 years."
            }
          />
          <span></span>
          <span></span>
          <AmazingPortfolioCard
            image={portfolio}
            title={"Wearing Smart"}
            para={
              "A wearable technology company where our investment contributed to a 250% increase in revenue."
            }
          />

          <AmazingPortfolioCard
            image={portfolio1}
            title={"Astro Snappers"}
            para={
              "A game-changer in the online learning space, helping them scale globally with strategic funding and business mentorship."
            }
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-[3rem] py-4 pt-[3rem] mt-[3rem]">
        <div className="w-[80%]  flex flex-col items-start justify-start pt-[2rem]">
          <ConatctForm />
        </div>
      </div>

      <div className="w-full flex items-center justify-center flex-col gap-[3rem] py-4 pt-[3rem] mt-[3rem]">
        <div className="w-[80%]">
          <GetInTouchCard />
        </div>
      </div>
    </>
  );
}

export default Home;
