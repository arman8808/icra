import React from "react";
import TemsCard from "../TemsCard/TemsCard";
import syed from "../../Assests/Images/WhatsApp Image 2024-10-22 at 10.58.36 AM 2.png";
import tablib from "../../Assests/Images/WhatsApp Image 2024-10-22 at 10.58.36 AM 1.png";
import underline from "../../Assests/Images/Group 65.png";
import fuzzelAhmad from "../../Assests/Images/Members/fuzzel Ahmad.png";
import IshaqAnsari from "../../Assests/Images/Members/Ishaq Ansari.png";
import MohdtalibAziz from "../../Assests/Images/Members/Mohd talib Aziz.png";
import NaseemKhan from "../../Assests/Images/Members/Naseem Khan.png";
import SaifahmadAdvisoryboardmember from "../../Assests/Images/Members/Saif ahmad  Advisory board member.png";
import yogeshtiwari from "../../Assests/Images/Members/yogesh tiwari.png";
import ZiaUlIslam from "../../Assests/Images/Members/Zia Ul Islam.png";

function OurSpecialTeam() {
  const management = [
    {
      image: MohdtalibAziz,
      Name: "Mohd Talib Aziz",
      Designation: "Executive Director",
    },
    {
      image: ZiaUlIslam,
      Name: "Zia Ul Islam",
      Designation: "COO",
    },
    {
      Name: "Mohd Yasir",
      Designation: "CIO",
    },
  ];
  const additionalDirectors = [
    {
      Name: "Syed Akbar",
      Designation: "Additional Director",
    },
    {
      Name: "Rashad Mahmood",
      Designation: "Additional Director",
    },
    {
      Name: "Shariq Salmani",
      Designation: "Additional Director",
    },
    { image: IshaqAnsari, Name: "Ishaq Ansari",  Designation: "Additional Director", },
  ];
  const advisoryBoard = [
    {
      image: SaifahmadAdvisoryboardmember,
      Name: "Saif Ahmad",
      Designation: "Advisory Board Member",
    },
    { image: yogeshtiwari, Name: "Yogesh Tiwari", Designation: "Jerome Bell",  Designation: "Advisory Board Member", },
    {
      Name: "Saif Ansari",
      Designation: "Advisory Board Member",
    },
    {
      image: NaseemKhan,
      Name: "Naseem Khan",
      Designation: "Advisory Board Member",
    },
    {
      image: fuzzelAhmad,
      Name: "Fuzzel Ahmad",
      Designation: "Advisory Board Member",
    },
    {
      Name: "Shoeb Jameel",
      Designation: "Advisory Board Member",
    },
  ];
  return (
    <div className="w-full flex items-center justify-center">
      {" "}
      <div className="w-[80%] mobile:w-[90%] tablet:w-[90%] bg-white  px-[1.5rem] py-[1rem]  gap-4 pt-[2rem]  rounded-md">
        <div className="grid grid-cols-2 mobile:grid-cols-1">
          <h2 className="text-blackShade font-bold text-3xl">
            Our Special Teams
          </h2>
          <p className="col-span-1 text-secondTextColor text-sm font-normal">
            Our team of experts brings together years of experience in financial
            consulting, venture capital, and stock market analysis. We work
            collaboratively with our clients to ensure their investments grow in
            a safe and sustainable manner.
          </p>
        </div>
        <div className="my-3 flex items-start justify-start flex-col gap-3">
          <h2 className="text-2xl font-semibold">Management</h2>
          <div className="grid grid-cols-3 mobile:grid-cols-1 tablet:grid-cols-2 md:grid-cols-2 pt-3 gap-4 w-full">
            {management?.map((item) => (
              <TemsCard
                Name={item?.Name}
                image={item?.image}
                Designation={item?.Designation}
                Education={""}
                Expereince={""}
              />
            ))}
          </div>
          <img src={underline} alt="underline" className="w-full mt-3" />
        </div>{" "}
        <div className="my-3 flex items-start justify-start flex-col gap-3">
          <h2 className="text-2xl font-semibold">Additional Directors</h2>
          <div className="grid grid-cols-3 mobile:grid-cols-1 tablet:grid-cols-2 md:grid-cols-2 pt-3 gap-4 w-full">
            {additionalDirectors?.map((item) => (
              <TemsCard Name={item?.Name} image={item?.image}  Designation={item?.Designation}/>
            ))}
          </div>
          <img src={underline} alt="underline" className="w-full mt-3" />
        </div>
        <div className="my-3 flex items-start justify-start flex-col gap-3">
          <h2 className="text-2xl font-semibold">Advisory Board</h2>
          <div className="grid grid-cols-3 mobile:grid-cols-1 tablet:grid-cols-2 md:grid-cols-2 pt-3 gap-4 w-full">
            {advisoryBoard?.map((item) => (
              <TemsCard Name={item?.Name} image={item?.image} Designation={item?.Designation}/>
            ))}
          </div>
          <img src={underline} alt="underline" className="w-full mt-3" />
        </div>
      </div>
    </div>
  );
}

export default OurSpecialTeam;
