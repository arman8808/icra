import React from "react";
import ConatctForm from "../../Components/ConatctForm/ConatctForm";

function ContactUs() {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-[3rem]  pt-4">
      ContactUs
      <div className="w-[80%] flex items-center justify-center flex-col gap-[3rem]">
        <ConatctForm />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227822.60371562678!2d80.77770084731563!3d26.848596483935573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1728992336205!5m2!1sen!2sin"
          style={{ width: "100%",height:'20rem',borderRadius:'5px' }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
