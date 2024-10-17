import React, { useRef } from "react";
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
import FadeInSection from "../../Utils/FadeInSection/FadeInSection ";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { testimonialData } from "../../TestimonialData";
import dots from "../../Assests/Images/Ornament11.png";
import dots1 from "../../Assests/Images/Ornament (1).png";
import TestimonialCard from "../../Components/TestimonialCard/TestimonialCard";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
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
        "In today's competitive market, having a strong brand identity is essential for success. Our Company Branding Strategy service focuses on creating a distinctive brand that resonates with your target audience. We work closely with you to understand your values, mission, and unique selling points, helping you craft a compelling brand story. ",
      image: Group60,
    },
    {
      title: "Digital Business Workshop",
      value:
        "In an increasingly digital world, staying ahead of the curve is crucial. Our Digital Business Workshop is designed to equip your team with the knowledge and tools necessary to thrive in the digital landscape. This hands-on workshop covers essential topics to enhance your digital presence and optimize your business strategies.  ",
      image: Group61,
    },
  ];
  const responsive = {
    0: {
      items: 1,
    },
    568: {
      items: 1,
    },
    720: {
      items: 2,
    },
    1024: {
      items: 3,
      itemsFit: "contain",
    },
  };
  const history=useNavigate()
  const carouselRef = useRef(null);
  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext(); // Check if ref is defined
    }
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev(); // Check if ref is defined
    }
  };
  return (
    <>
      <div className="w-full flex items-center justify-center flex-col gap-[3rem] bg-background pt-4 relative">
        <FadeInSection className="w-full flex items-center justify-center">
          <div className="w-[80%] mobile:w-[90%] flex items-center justify-between gap-[4rem] mobile:flex-col tablet:flex-col relative">
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
              <button className="bg-green text-white button" onClick={()=>history('/contactUs')}>
                Get Started
              </button>
            </div>
            <img
              src={greendots}
              alt="greendots"
              className="absolute  left-[30%] top-[80%] mobile:hidden tablet:hidden"
            />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-[80%] mobile:w-[90%] flex items-start justify-between gap-4 bg-secondryBackground px-[1.5rem] py-[1rem] flex-col border-t-md">
            <p className="text-textColor">Trusted by 300+ Clients since 2017</p>
            <div className="flex items-center justify-between mobile:grid mobile:grid-cols-2 tablet:grid tablet:grid-cols-3 md:grid md:grid-cols-3 gap-4 w-full">
              <img src={logo} alt="logo" />
              <img src={logo1} alt="logo" />
              <img src={logo3} alt="logo" />
              <img src={logo4} alt="logo" />
              <img src={logo5} alt="logo" />
            </div>
          </div>
        </FadeInSection>
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
        <FadeInSection>
          <div className="w-[80%] mobile:w-[90%]  px-[1.5rem] py-[1rem] grid grid-cols-2 mobile:grid-cols-1 mobile:w-[90%] gap-4 pt-[2rem]">
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
        </FadeInSection>
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
        <FadeInSection>
          <div className="w-[80%] mobile:w-[90%]  flex flex-col items-start justify-start pt-[2rem]">
            <h2 className="text-blackShade font-bold text-2xl">
              What’s Our Services
            </h2>
            <div className="w-[100%]  grid grid-cols-2 mobile:grid-cols-1 gap-4 pt-[2rem]">
              {ourService?.map((item) => (
                <CoreServiceCard
                  title={item?.title}
                  para={item?.value}
                  image={item?.image}
                />
              ))}
            </div>
          </div>
        </FadeInSection>
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
        <FadeInSection>
          <div className="w-[80%] mobile:w-[90%] flex items-center justify-center flex-col gap-4">
            <div className="grid grid-cols-2 mobile:grid-cols-1 gap-4 items-center">
              <span className="flex items-start justify-start flex-col mobile:order-last">
                <h2 className="text-blackShade font-bold text-2xl flex items-start justify-start">
                  Research and Analysis
                  <img src={one} alt="one" />
                </h2>
                <p className="text-secondTextColor">
                  We conduct extensive research and market analysis to identify
                  high-potential investment opportunities. Our team keeps a
                  close watch on the financial landscape, identifying market
                  trends, and assessing risks.
                </p>
              </span>
              <img src={wework} alt="wework" className="w-[90%] rounded-md" />
            </div>
            <div className="grid grid-cols-2 gap-4 mobile:grid-cols-1 items-center">
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
            <div className="grid grid-cols-2 mobile:grid-cols-1 gap-4 items-center">
              <span className="flex items-start justify-start flex-col mobile:order-last">
                <h2 className="text-blackShade font-bold text-2xl flex items-start justify-start">
                  Profit Realization
                  <img src={three} alt="one" />
                </h2>
                <p className="text-secondTextColor">
                  Through active investment management and continuous analysis,
                  we ensure our clients realize profitable returns. Our goal is
                  to maximize returns while minimizing risks.
                </p>
              </span>
              <img src={wework3} alt="wework" className="w-[90%] rounded-md" />
            </div>
          </div>
        </FadeInSection>
      </div>
      <FadeInSection>
        <div className="w-full flex items-center justify-center flex-col gap-[3rem] py-4 pt-[3rem] mt-[3rem]">
          <div className="w-[80%] mobile:w-[90%] grid grid-cols-2 mobile:grid-cols-1 gap-4 pt-[2rem]">
            <h2 className="text-blackShade font-bold text-2xl">
              Our amazing portfolio
            </h2>
          </div>
          <div className="w-[80%] grid grid-cols-2 mobile:grid-cols-1 gap-4 pt-[2rem]">
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
      </FadeInSection>
      <div className="w-full flex items-center justify-center flex-col gap-[3rem] py-4 pt-[3rem] mt-[3rem]">
        <FadeInSection>
          <div className="w-[80%] mobile:w-[90%]  flex flex-col items-start justify-start pt-[2rem]">
            <ConatctForm />
          </div>
        </FadeInSection>
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-[3rem] py-4 pt-[4rem] mt-[3rem] bg-custom-gradient relative">
        <div className="w-[80%] flex items-start justify-start flex-col gap-4 py-4">
          <FadeInSection>
            <h2 className="w-full text-white text-start text-2xl font-bold">
              See what our client say about us
            </h2>
          </FadeInSection>
          <FadeInSection>
            <div className="w-full grid grid-cols-1 py-4 gap-4">
            <span className="w-[80%] flex items-center justify-end gap-1">
              {" "}
              <button
                className="  px-2 py-2 rounded-full transform -translate-y-1/2 bg-gray-500 text-white hover:bg-[#27820C]"
                onClick={slidePrev} // Call the slidePrev function
              >
                <IoIosArrowBack  className="text-2xl font-bold"/> 
              </button>
              <button
                className="  px-2 py-2 rounded-full transform -translate-y-1/2 bg-gray-500 text-white hover:bg-[#27820C]" 
                onClick={slideNext} // Call the slideNext function
              >
                <IoIosArrowForward  className="text-2xl font-bold"/>
              </button>
              {/* Custom Previous Button */}
           
            </span>
            <div className="w-full grid grid-cols-1 py-4 gap-4">
              <AliceCarousel
                ref={carouselRef}
                responsive={responsive}
                disableDotsControls={true}
                disableButtonsControls={true}
                autoPlay={true}
                autoPlayInterval={4000}
                infinite={true}
                mouseTracking
                itemPadding={[0, 50]}
                className="w-full gap-4"
              >
                {testimonialData?.map((item) => (
                  <TestimonialCard
                    key={item?.Name}
                    Name={item?.Name}
                    Designation={item?.Designation}
                    FeedBack={item?.FeedBack}
                  />
                ))}
              </AliceCarousel>
            </div>
            </div>
          </FadeInSection>
        </div>
        <img
          src={dots}
          alt="dots"
          className="absolute left-0 h-[5rem] object-cover"
        />
        <img
          src={dots1}
          alt="dots"
          className="absolute top-0 h-[5rem] object-cover"
        />
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-[3rem] py-4 pt-[3rem] mt-[3rem]">
        <FadeInSection>
          <div className="w-[80%] mobile:w-[90%]">
            <GetInTouchCard />
          </div>
        </FadeInSection>
      </div>
    </>
  );
}

export default Home;
