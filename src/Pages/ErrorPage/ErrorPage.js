import React from "react";
import bg from "../../Assests/Images/errorpagebg.png";
import errorpage from "../../Assests/Images/errorpageimg.png";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div
      className="w-full h-[100vh] py-[5%] px-[5%] grid grid-cols-2 mobile:grid-cols-1 gap-4 items-center justify-center"
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center justify-center flex-col gap-2">
        <strong className="text-[#3A7D2C] text-7xl font-bold">404</strong>
        <p className="text-4xl font-semibold">Page Not Found</p>
        <p className="text-lg text-[#C6C6C6] text-center">
          It looks like the page you're looking for doesn't exist.But don’t
          worry, we’re here to help you get back on track.
        </p>
        <Link to='/'>
          <button className="button text-[#3A7D2C] border-[#3A7D2C] text-lg font-semibold border-2">
            Back To Home
          </button>
        </Link>
      </div>
      <img src={errorpage} alt="error page" />
    </div>
  );
}

export default ErrorPage;
