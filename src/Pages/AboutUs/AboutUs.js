import React from "react";
import aboutus from "../../Assests/Images/Rectangle 171.png";
import aboutus1 from "../../Assests/Images/Image Placeholder1.png";
import bird from "../../Assests/Images/Frame1.png";
import CoreServiceCard from "../../Components/CoreServiceCard/CoreServiceCard";
import TemsCard from "../../Components/TemsCard/TemsCard";
import AccordionUsage from "../../Components/Accordion/Accordion";
import Group55 from "../../Assests/Images/Group 55.png";
import Group56 from "../../Assests/Images/Group 56.png";
import Group57 from "../../Assests/Images/Group 57.png";

import { FaRegFilePdf } from "react-icons/fa";
import FadeInSection from "../../Utils/FadeInSection/FadeInSection ";
import syed from "../../Assests/Images/WhatsApp Image 2024-10-22 at 10.58.36 AM 2.png";
import tablib from "../../Assests/Images/WhatsApp Image 2024-10-22 at 10.58.36 AM 1.png";

function AboutUs() {
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
  const AccordionData = [
    {
      title: "Why should I invest in your company?",
      detail:
        "Investing is a complex process. Our company has over 15 years of expertise in this field, during which we've developed tailored strategies to suit your investment objectives. Successful investing requires thorough research and timely analysis. We provide that with our dedicated information-sourcing mechanisms, ensuring you stay ahead in this dynamic financial investment landscape.",
    },
    {
      title: "What does your investment company specialize in?",
      detail:
        "We offer a broad range of investment services, including wealth management, portfolio diversification,financial planning, and retiremnt solutions. Our strategies are customized to help clients achieve their financial goals efficiently.",
    },
    {
      title: "Is there any guaranteed return on investment?",
      detail:
        "No, But we provide a formal agreement with every investor, outlining all details regarding the security of funds and expected return on investment (ROI), giving you peace of mind regarding your investment.",
    },
    {
      title: "What risks are associated with investing?",
      detail:
        "All investments involve risk, including the potential loss of principal. The level of risk varies based on the asset class (e.g., stocks vs. bonds) and market conditions. We aim to balance risk and reward based on your risk tolerance. To mitigate risk, we ensure the funds in which we invest are insured.",
    },
    {
      title: "How often will I receive updates on my investments?",
      detail:
        "You will receive regular statements, either monthly or quarterly, depending on your account type. Additionally, you can log in to our platform anytime to track and monitor your portfolio's performance.",
    },
    {
      title: "What are the modes and cycles of payment?",
      detail:
        "We accept payments through bank transfers (cheque and electronic payments). Our payment structure includes monthly and quarterly payouts of returns, ensuring transparency and convenience",
    },
  ];
  return (
    <>
      <div className="w-full flex items-center justify-center flex-col gap-[3rem]  pt-4">
        <FadeInSection>
          <div className="w-[90%] flex items-center justify-center gap-[4rem] relative mt-4">
            <img
              src={aboutus}
              alt="aboutus"
              className="rounded-md w-full h-[28rem] mobile:object-cover"
            />

            <span className="flex items-start justify-start gap-4 flex-col absolute w-[80%]">
              <h1 className="text-white text-3xl font-bold">About us</h1>
              <p className="text-white leading-8">
                At Impulse Capital & Research Analysis Pvt Ltd, we are dedicated
                to helping our clients navigate the complex world of venture
                capital and stock market trading. With a global presence and a
                team of seasoned financial consultants, we specialize in
                delivering strategic solutions tailored to meet the unique needs
                of our clients.
              </p>
            </span>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-[80%] mobile:w-[90%] tablet:w-[90%] flex items-center justify-between flex-col gap-4">
            <span className="flex items-start justify-start flex-col gap-1">
              <h2 className="text-blackShade font-bold text-2xl">
                Our Mission
              </h2>
              <p className="text-textColor font-normal">
                Our mission is to empower individuals and businesses to reach
                new heights through strategic financial insights, cutting-edge
                market research, and personalized investment solutions. We
                believe that with the right tools, anyone can succeed in the
                global financial markets.
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
            <img
              src={aboutus1}
              alt="aboutus1"
              className="w-full h-[22rem] mobile:object-cover"
            />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-[80%] mobile:w-[90%] tablet:w-[90%] px-[1.5rem] py-[1rem] grid grid-cols-2 gap-4 pt-[2rem] bg-white rounded-md mobile:grid-cols-1">
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
        <FadeInSection>
          <div className="w-[80%] mobile:w-[90%] tablet:w-[90%]  px-[1.5rem] py-[1rem]  gap-4 pt-[2rem]  rounded-md">
            <div className="grid grid-cols-3 mobile:grid-cols-1">
              <h2 className="text-blackShade font-bold text-2xl">
                Our Special Teams
              </h2>
              <p className="col-span-2 text-secondTextColor text-sm font-normal">
                Our team of experts brings together years of experience in
                financial consulting, venture capital, and stock market
                analysis. We work collaboratively with our clients to ensure
                their investments grow in a safe and sustainable manner.
              </p>
            </div>
            <div className="grid grid-cols-2 mobile:grid-cols-1 tablet:grid-cols-2 pt-[1.5rem] gap-4">
              <TemsCard
                Name={"SYED MUHAMMAD AKBAR"}
                image={syed}
                Designation={"Director"}
                Education={"Post Gradute"}
                Expereince={"10 years of extensive experience in the financial domain."}
              />
              <TemsCard
                Name={"MOHD TALIB AZIZ"}
                image={tablib}
                Designation={"Director"}
                Education={"Post Gradute"}
                Expereince={"15 years of extensive experience in financial modeling, research, and analytics."}
              />
            </div>
          </div>
        </FadeInSection>
      </div>
      <div
        className="w-full flex items-center justify-center flex-col gap-[3rem]  pt-4 h-[45rem]"
        style={{
          backgroundImage: `url("${bird}")`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "right",
          backgroundPositionY: "bottom",
          backgroundSize: "initial",
          backgroundBlendMode: "hard-light",
        }}
      >
        <FadeInSection>
          <div className="w-[80%] mobile:w-[90%] tablet:w-[90%] flex items-start justify-start flex-col gap-4">
            <h2 className="text-blackShade font-bold text-2xl">FAQ!</h2>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-[80%] mobile:w-[90%] tablet:w-[90%] flex items-center justify-between flex-col gap-4">
            {AccordionData?.map((item) => (
              <AccordionUsage title={item?.title} detail={item?.detail} />
            ))}
          </div>
        </FadeInSection>
        <FadeInSection>
          <span className="w-full  flex items-end justify-end pr-[10%] ">
            <a
              href="/Investment Brochure.pdf"
              download={"Investment_Brochure.pdf"}
            >
              <button className="flex items-center justify-center gap-1 button bg-green text-white">
                {" "}
                PDF Download <FaRegFilePdf />
              </button>
            </a>
          </span>
        </FadeInSection>
      </div>
    </>
  );
}

export default AboutUs;
