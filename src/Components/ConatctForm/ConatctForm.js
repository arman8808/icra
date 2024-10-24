import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import impleglobal from "../../Assests/Images/impleglobal.png";
import MainLogoImg from "../../Assests/Images/MainLogoImg.png";
import { Link } from "react-router-dom";

function ConatctForm() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4  gap-4 bg-white p-4">
      <div className="w-full grid grid-cols-2 gap-4">
        <h2 className="text-blackShade font-bold text-2xl">
          Let’s Talk About :
        </h2>
        <p className="text-textColor">
          Have a project in mind that you think we’d be a great fit for it? We’d
          love to know what you’re thinking
        </p>
      </div>
      <div className="w-full grid grid-cols-3 mobile:grid-cols-1 gap-4">
        <div className="flex items-start justify-start flex-col gap-[2rem] mobile:order-last">
          <span className="flex flex-col gap-[2rem]">
            <p className="border-l-4  border-[#5541D7]  pl-2 text-lg font-medium">
              Links
            </p>
            <div className="flex items-start justify-start gap-2">
              <FaFacebook className="text-3xl" />
              <FaTwitter className="text-3xl" />
              <FaInstagram className="text-3xl" />
            </div>
            <div className="flex items-center justify-center gap-4">
              <Link to="#">
                <img
                  src={MainLogoImg}
                  alt="logo"
                  className="h-[8rem] object-contain"
                  style={{ aspectRatio: "1 / 1" }}
                />
              </Link>

              <Link to="https://impulseglobal.llc/" target="_blank">
                <img
                  src={impleglobal}
                  alt="logo"
                  className="h-[8rem] object-contain"
                  style={{ aspectRatio: "1 / 1" }}
                />
              </Link>
            </div>
          </span>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6900698037916!2d80.93998806375427!3d26.849808335426754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfda7007fb037%3A0x61eda6d7018a4d0b!2s68%2C%20Maqbara%20Rd%2C%20Hazratganj%2C%20Lucknow%2C%20Uttar%20Pradesh%20226001!5e0!3m2!1sen!2sin!4v1729765586975!5m2!1sen!2sin"
              style={{ width: "100%", height: "20rem", borderRadius: "5px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="col-span-2  flex flex-col gap-4 items-start justify-start ">
      
          <form className="w-full">
            <div className="w-full grid grid-cols-2 mobile:grid-cols-1 gap-4 ">
              <span className="w-full flex items-start justify-start gap-1 flex-col">
                <p className="font-semiBold ">First Name</p>
                <input
                  type="text"
                  placeholder="Enter  First Name."
                  className="p-2 rounded-md  outline-none w-full border-2 border-gray"
                  required
                />
              </span>{" "}
              <span className="w-full flex items-start justify-start gap-1 flex-col">
                <p className="font-semiBold ">Last Name</p>
                <input
                  type="text"
                  placeholder="Enter Last Name."
                  className="p-2 rounded-md  outline-none w-full border-2 border-gray"
                  required
                />
              </span>{" "}
              <span className="w-full flex items-start justify-start gap-1 flex-col">
                <p className="font-semiBold ">Email Address</p>
                <input
                  type="text"
                  placeholder="Enter your Email."
                  className="p-2 rounded-md  outline-none w-full border-2 border-gray"
                  required
                />
              </span>{" "}
              <span className="w-full flex items-start justify-start gap-1 flex-col">
                <p className="font-semiBold ">Company Name</p>
                <input
                  type="text"
                  placeholder="Enter your Company Name."
                  className="p-2 rounded-md  outline-none w-full border-2 border-gray"
                  required
                />
              </span>{" "}
            </div>
            <span className="w-full flex items-start justify-start  mt-3 gap-1 flex-col">
              <p className="font-semiBold ">Mobile No</p>
              <input
                  type="number"
                  placeholder="Enter your Mobile No."
                  className="p-2 rounded-md  outline-none w-full border-2 border-gray"
                  required
                />
            </span> 
              <span className="w-full flex items-start justify-start  mt-3 gap-1 flex-col">
              <p className="font-semiBold ">Messages</p>
              <textarea
                rows="5"
                placeholder="Enter your Messages."
                className="p-2 rounded-md  outline-none w-full border-2 border-gray"
                required
              />
            </span>
            <button className="button bg-green text-white mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConatctForm;
