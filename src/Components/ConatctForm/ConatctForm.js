import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function ConatctForm() {
  return (
    <div className="w-full grid grid-cols-3 gap-4">
      <div className="flex items-start justify-start flex-col gap-[2rem]">
        <h2 className="text-blackShade font-bold text-2xl">
          Let’s Talk About :
        </h2>
        <span className="flex flex-col gap-[2rem]">
          <p className="border-l-4  border-[#5541D7]  pl-2 text-lg font-medium">
            Links
          </p>
          <div className="flex items-start justify-start gap-2">
            <FaFacebook className="text-3xl" />
            <FaWhatsapp className="text-3xl" />
            <FaInstagram className="text-3xl" />
          </div>
        </span>
      </div>
      <div className="col-span-2 flex flex-col gap-4 items-start justify-start ">
        <p className="text-textColor">
          Have a project in mind that you think we’d be a great fit for it? We’d
          love to know what you’re thinking
        </p>
        <form className="w-full">
          <div className="w-full grid grid-cols-2 gap-4">
          <span className="w-full flex items-start justify-start gap-1 flex-col">
              <p className="font-semiBold ">First Name</p>
              <input
                type="text"
                placeholder="Input your first name  here"
                className="p-2 rounded-md border-none outline-none w-full"
              />
            </span>{" "}
            <span className="w-full flex items-start justify-start gap-1 flex-col">
              <p className="font-semiBold ">Last Name</p>
              <input
                type="text"
                placeholder="Input your Last Name  here"
                className="p-2 rounded-md border-none outline-none w-full"
              />
            </span>{" "}
            <span className="w-full flex items-start justify-start gap-1 flex-col">
              <p className="font-semiBold ">Email Address</p>
              <input
                type="text"
                placeholder="Input your Email Address  here"
                className="p-2 rounded-md border-none outline-none w-full"
              />
            </span>{" "} 
            <span className="w-full flex items-start justify-start gap-1 flex-col">
              <p className="font-semiBold ">Company Name</p>
              <input
                type="text"
                placeholder="Input your Company Name  here"
                className="p-2 rounded-md border-none outline-none w-full"
              />
            </span>{" "}

          </div>
          <span className="w-full flex items-start justify-start mt-3 gap-1 flex-col">
              <p className="font-semiBold ">Messages</p>
              <textarea
               rows='5'
                placeholder="Input your Messages here"
                className="p-2 rounded-md border-none outline-none w-full"
              />
              </span>
              <button className="button bg-green text-white mt-4">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ConatctForm;
