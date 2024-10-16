import React from "react";
import img from "../../Assests/Images/Logo.png";
function TestimonialCard() {
  return (
    <div className="flex items-start justify-start flex-col gap-3">
      <div className="flex flex-row items-start justify-start gap-2">
        <img src={img} alt="testimonial" className="rounded-full" />
        <span className="flex flex-col items-start justify-start gap-1 text-white">
          <h6 className="font-semiBold text-lg">Cameron Williamson</h6>
          <p className="font-extraLight">CEO of Tukang Tikung</p>
        </span>
      </div>
      <div className="glass-effect w-full">
        <p className="font-medium">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley.
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;
