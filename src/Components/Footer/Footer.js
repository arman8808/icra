import React from "react";
import logo from "../../Assests/Images/02.png";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaPlay, FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="mt-[2rem] flex items-center justify-center flex-col gap-4 px-[5%] py-[2%]">
      <div className="w-full grid grid-cols-4 mobile:grid-cols-1 tablet:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-start justify-start gap-3">
          <img src={logo} alt="logo" />
          <span className="flex items-center justify-start gap-2 cursor-pointer">
            <IoLocationOutline className="text-4xl text-footerText" />
            <p className="text-footerText">
              Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba, Dubai,
              U.A.E.
            </p>
          </span>{" "}
          <span className="flex items-center justify-start gap-2 cursor-pointer">
            <IoLocationOutline className="text-4xl text-footerText" />
            <p className="text-footerText">
              Old House No.68,maqbara, Hazrat Gunj,lucknow, Lalbagh (lucknow),
              Lucknow, Lucknow, Uttar Pradesh, India,
            </p>
          </span>{" "}
          <span className="flex items-center justify-start gap-2 cursor-pointer">
            <MdOutlinePhoneInTalk className="text-2xl text-footerText" />
            <Link to="tel:8601299016">
              <p className="text-footerText">8601299016</p>
            </Link>
          </span>{" "}
          <span className="flex items-center justify-start gap-2 cursor-pointer">
            <CiMail className="text-2xl text-footerText" />
            <Link to="mailto:Info@icraind.com">
              <p className="text-footerText">Info@icraind.com</p>
            </Link>
          </span>
        </div>
        <div className="flex items-start justify-start flex-col gap-3">
          <h6>Services</h6>
          <p className="text-footerText">Venture Capital</p>
          <p className="text-footerText">Stock Market Training & Trading</p>
          <p className="text-footerText">Company Branding Strategic</p>
          <p className="text-footerText">Digital Business Workshop</p>
        </div>
        <div className="flex items-start justify-start flex-col gap-3">
          <h6>Social Media</h6>
          <p className="text-footerText">Dribbble</p>
          <p className="text-footerText">Behance</p>
          <p className="text-footerText">Medium</p>
          <p className="text-footerText">Instagram</p>
          <p className="text-footerText">Facebook</p>
          <p className="text-footerText">Twitter</p>
        </div>
        <div className="flex items-start justify-start flex-col gap-3">
          <h6>Join a Newsletter</h6>
          <span>
            <form className="flex items-start justify-start ">
              <input
                type="text"
                placeholder="Enter your Email"
                className="border-2-[#DBD7F4] py-[0.5rem] px-[1rem] rounded-l-md outline-none"
                required
              />
              <button className="bg-green py-[0.7rem] rounded-r-md px-[1rem] text-white">
                <FaPlay />
              </button>
            </form>
          </span>
        </div>
      </div>
      <span className="flex items-center justify-start gap-2 cursor-pointer">
        <FaRegCopyright className="text-footerText" />
        <p className="text-footerText">Copy Right</p>
      </span>
    </footer>
  );
}

export default Footer;
