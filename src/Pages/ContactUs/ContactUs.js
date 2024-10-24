import React from "react";
import ConatctForm from "../../Components/ConatctForm/ConatctForm";
import GetInTouchCard from "../../Components/GetInTouchCard/GetInTouchCard";

function ContactUs() {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-[3rem]  pt-4">
      <div className="w-[80%] mobile:w-[90%] flex items-center justify-center flex-col gap-[3rem]">
        <ConatctForm />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6900698037916!2d80.93998806375427!3d26.849808335426754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfda7007fb037%3A0x61eda6d7018a4d0b!2s68%2C%20Maqbara%20Rd%2C%20Hazratganj%2C%20Lucknow%2C%20Uttar%20Pradesh%20226001!5e0!3m2!1sen!2sin!4v1729765586975!5m2!1sen!2sin"
          style={{ width: "100%", height: "20rem", borderRadius: "5px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
   
      </div>
      <div className="w-[80%] mobile:w-[90%]">
        <GetInTouchCard />
      </div>
    </div>
  );
}

export default ContactUs;
