import React, { useEffect, useState } from "react";
import logo from "../../Assests/Images/02.png";
import { Link, NavLink } from "react-router-dom";
function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);
  let activeStyle = {
    color: "#27820C",
  
  };
  return (
    <nav className="flex items-center justify-between py-4 px-[5%] bg-background sticky top-0">
      <div className="flex items-center gap-[2rem]">
        <img src={logo} alt="logo" className=" object-fit" />
        <ul className="flex items-center gap-4">
          <li>
            <NavLink to="/" className="text-lg font-semiBold text-secondTextColor"   style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" className="text-lg font-semiBold text-secondTextColor" style={({ isActive }) => (isActive ? activeStyle : undefined)}> About Us</NavLink>
          </li>
          <li>
            <NavLink to="/ourservice" className="text-lg font-semiBold text-secondTextColor" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Our Service</NavLink>
          </li>
          <li>
          <NavLink to="/blog" className="text-lg font-semiBold text-secondTextColor" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Blog</NavLink>
            </li>
        </ul>
      </div>
      <button className="bg-green button text-white">Contact Us</button>
    </nav>
  );
}

export default NavBar;
