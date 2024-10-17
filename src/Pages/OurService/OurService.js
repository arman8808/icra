import React from "react";
import img from "../../Assests/Images/Rectangle 18.png";
import BusinessCard from "../../Components/BusinessCard/BusinessCard";
import placeHolder from "../../Assests/Images/Logo.png";
import Group from "../../Assests/Images/Group 53.png";
import dots from "../../Assests/Images/Ornament11.png";
import dots1 from "../../Assests/Images/Ornament (1).png";
import dots2 from "../../Assests/Images/Ornamentgray.png";
import icon from "../../Assests/Images/Icons.png";
import icon1 from "../../Assests/Images/Icons-1.png";
import icon2 from "../../Assests/Images/Icons-2.png";
import icon3 from "../../Assests/Images/Icon.png";
import icon4 from "../../Assests/Images/Icon-1.png";
import icon5 from "../../Assests/Images/Icon-2.png";
import dotsgreen from "../../Assests/Images/Ornament12.png";
import GetInTouchCard from "../../Components/GetInTouchCard/GetInTouchCard";
import TestimonialCard from "../../Components/TestimonialCard/TestimonialCard";
import FadeInSection from "../../Utils/FadeInSection/FadeInSection ";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { testimonialData } from "../../TestimonialData";

function OurService() {
  const responsive = {
    0: {
      items: 1,
    },
    568: { items: 1 },
    1024: {
      items: 2,
      itemsFit: "contain",
    },
  };
  return (
    <>
      {" "}
      <div className="w-full flex items-center justify-center flex-col gap-[3rem] mt-[2rem]  pt-4">
        <FadeInSection>
          <div className="w-[80%] mobile:w-[90%] grid grid-cols-3 mobile:grid-cols-1 gap-[2rem] items-center justify-center">
            <img src={img} alt="banner" />
            <div className="col-span-2 ">
              <h2 className="text-[#0B2F04] text-2xl font-bold">Our Service</h2>
              <p className="  text-3xl text-[#5B5A78] ">
                At Impulse Capital & Research Analysis Pvt Ltd, we offer a wide
                range of services to help businesses and individuals make
                informed financial decisions, grow their wealth, and succeed in
                the global marketplace.
              </p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-[80%] mobile:w-[90%] flex flex-col gap-4 items-start justify-start">
            <h2 className="text-4xl font-extraBold text-[#413939]">
              What our business do
            </h2>
            <p className="text-[#5B5A78] font-bold text-base">
              Our business is dedicated to providing expert financial consulting
              services, with a focus on the stock market, venture capital, and
              strategic investments. Our core services include:
            </p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-[80%]  mobile:w-[90%] flex  gap-4 items-start mobile:grid mobile:grid-cols-1 mobile:items-start justify-start ">
            <BusinessCard
              image={icon3}
              para={
                "Investment Advisory: We provide personalized investment solutions to help you maximize your returns while minimizing risks. Whether you're a seasoned investor or a beginner, we have the tools and knowledge to assist you."
              }
            />
            <BusinessCard
              image={icon4}
              para={
                "Strategic Market Research: Our deep analysis and data-driven approach ensure that you receive the best advice on current market trends, opportunities, and risks."
              }
            />
            <span className="hidden mobile:flex">
              <BusinessCard
                image={icon5}
                para={
                  "Venture Capital Consulting: Our team works closely with startups and established businesses to secure venture capital funding, guiding them through every step of the process."
                }
              />
            </span>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-[40%] mobile:w-[90%] flex  gap-4 items-center justify-center mobile:hidden ">
            <BusinessCard
              image={icon5}
              para={
                "Venture Capital Consulting: Our team works closely with startups and established businesses to secure venture capital funding, guiding them through every step of the process."
              }
            />
          </div>
        </FadeInSection>
        <div className="w-[80%] mobile:w-[90%] flex  gap-[2.5rem] items-start justify-start flex-col bg-white py-[3%] px-[5%] mt-[2rem] rounded-md">
          <span className="flex items-center justify-center flex-col w-full">
            <h2 className="text-[#0B2F04] text-2xl font-bold">How it Works</h2>
            <p className="text-[#5B5A78] font-bold">
              We follow a structured approach to ensure your success:
            </p>
          </span>
          <div className="w-full grid grid-cols-3 mobile:grid-cols-1 gap-4">
            <div className="flex items-center justify-center gap-3 flex-col">
              <img src={icon} alt="placeHolder" />
              <h6 className="text-center text-[#38386E] font-semiBold">
                We begin with an in-depth consultation to understand your
                financial goals and challenges.
              </h6>
              <button className="button bg-[#0B2F04] text-white">
                STEP 1 Consultation
              </button>
            </div>{" "}
            <div className="flex items-center justify-center gap-3 flex-col">
              <img src={icon1} alt="placeHolder" />
              <h6 className="text-center text-[#38386E] font-semiBold">
                Based on your unique needs, we create a tailored financial plan
                that incorporates market analysis, investment opportunities, and
                risk management.
              </h6>
              <button className="button bg-[#0B2F04] text-white">
                STEP 2 Consultation
              </button>
            </div>{" "}
            <div className="flex items-center justify-center gap-3 flex-col">
              <img src={icon2} alt="placeHolder" />
              <h6 className="text-center text-[#38386E] font-semiBold">
                Our team will assist you throughout the execution of the plan,
                offering ongoing support and advice as your financial journey
                progresses.
              </h6>
              <button className="button bg-[#0B2F04] text-white">
                STEP 3 Consultation
              </button>
            </div>
          </div>
        </div>
        <FadeInSection>
          <div className="w-[80%] mobile:w-[90%]  gap-[2rem] grid grid-cols-3 mobile:grid-cols-1 bg-white py-[2%] px-[2%] mt-[2rem] rounded-3xl relative">
            <img src={Group} alt="Group" className="object-cover" />
            <div className="col-span-2 flex items-start justify-start gap-2 flex-col pl-[5%]">
              <h2 className="text-[#0B2F04] text-3xl font-bold">
                Precise Calculation with Our Patent Methods
              </h2>
              <p className="text-[#5B5A78] leading-9">
                Our financial strategies are built on precision. With patented
                methods, we ensure that every decision is backed by reliable
                data and accurate calculations.
              </p>
              <ul className="flex items-start justify-start gap-2 flex-col list-disc">
                <li className="text-[#5B5A78] leading-9">
                  Advanced Algorithms: Our algorithms identify market trends and
                  predict future movements.
                </li>
                <li className="text-[#5B5A78] leading-9">
                  Tailored Recommendations: We provide customized solutions
                  based on your financial profile.
                </li>
                <li className="text-[#5B5A78] leading-9">
                  Maximized Returns: Our methods ensure that you get the best
                  possible outcomes from your investments.
                </li>
              </ul>
              <p className="text-[#5B5A78] leading-9">
                Current Success Rate: 82.3% – Our patented strategies have
                helped our clients achieve consistent success in their financial
                endeavors
              </p>
            </div>
            <img
              src={dots2}
              alt="green dots"
              className="absolute left-0 top-20  object-cover"
            />
          </div>
        </FadeInSection>
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-[3rem] py-4 pt-[4rem] mt-[3rem] bg-custom-gradient relative">
        <div className="w-[80%] flex items-start justify-start flex-col gap-4">
          <FadeInSection>
            <h2 className="text-white text-2xl font-bold">
              See what our client say about us
            </h2>
          </FadeInSection>
          <FadeInSection>
            <div className="w-full grid grid-cols-1 py-4 gap-4">
              <AliceCarousel
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
      <div className="w-full flex items-center justify-center flex-col gap-[3rem] py-4 pt-[3rem] mt-[3rem] relative">
        <FadeInSection>
          <div className="w-[80%] mobile:w-[90%]">
            <GetInTouchCard />
          </div>
        </FadeInSection>
        <img
          src={dotsgreen}
          alt="green dots"
          className="absolute left-[3rem] h-[5rem] object-cover"
        />
        <img
          src={dotsgreen}
          alt="green dots"
          className="absolute right-0 top-0 h-[5rem] object-cover"
        />
      </div>
    </>
  );
}

export default OurService;
