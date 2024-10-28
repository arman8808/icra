import React, { useState } from "react";
import AccordionUsage from "../../Components/Accordion/Accordion";
import Img from "../../Assests/Images/Rectangle 31.png";
import FadeInSection from "../../Utils/FadeInSection/FadeInSection ";
import { FaRegFilePdf } from "react-icons/fa";
import GetInTouchCard from "../../Components/GetInTouchCard/GetInTouchCard";
function Faq() {
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
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panelIndex) => (event, isExpanded) => {
    setExpanded(isExpanded ? panelIndex : false);
  };
  return (
    <div className="w-full flex items-center justify-center flex-col gap-[2rem]  pt-4">
      <FadeInSection>
        <div className="w-[90%] mobile:w-[90%] tablet:w-[90%] bg-darkGreen flex items-center justfiy-center flex-col rounded py-4 px-4 gap-4">
          <h1 className="text-white text-4xl font-semibold">
            Frequently Asked Questions
          </h1>
          <div className="w-full grid grid-cols-2 items-start justify-start py-2 gap-4">
            <div className="flex items-center justify-center gap-1 flex-col">
              {AccordionData?.map((item, index) => (
                <AccordionUsage
                  title={item?.title}
                  detail={item?.detail}
                  index={index}
                  expanded={expanded === index}
                  handleChange={handleChange(index)}
                />
              ))}
            </div>
            <div className="flex items-center justify-center">
              <img src={Img} alt="img" className="w-[80%] h-[25rem]" />
            </div>
          </div>
        </div>
      </FadeInSection>
      <div className="w-[90%] mobile:w-[90%] tablet:w-[90%]  flex items-start justfiy-start  px-4 gap-4">
        <FadeInSection>
          <span className="w-full  flex items-start justify-start  ">
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
      <div className="w-full flex items-center justify-center flex-col gap-[2rem] py-4 pt-[3rem]">
        <FadeInSection>
          <div className="w-[80%] mobile:w-[90%]">
            <GetInTouchCard />
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}

export default Faq;
