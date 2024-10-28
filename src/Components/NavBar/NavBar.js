import React, { useEffect, useRef, useState } from "react";
import logo from "../../Assests/Images/02.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
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
  let unActiveStyle = {
    color: "#3D3D3D",
    fontweight: "600",
    textDecoration: "none",
  };
  const history = useNavigate();
  const comRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!comRef.current.contains(e.target)) {
        document.getElementById("menu__toggle").checked = false;
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <nav
      className={
        scrolled
          ? "flex items-center justify-between py-4 px-[5%] bg-white sticky top-0 z-50"
          : "flex items-center justify-between py-4 px-[5%] bg-background sticky top-0 z-50"
      }
    >
      <div className="flex items-center gap-[2rem]">
        <img
          src={logo}
          alt="logo"
          className=" object-fit cursor-pointer"
          onClick={() => history("/")}
        />
        <ul className="flex items-center gap-4 mobile:hidden tablet:hidden">
          <li>
            <NavLink
              to="/"
              className="text-lg font-semiBold text-secondTextColor"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className="text-lg font-semiBold text-secondTextColor"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {" "}
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ourservice"
              className="text-lg font-semiBold text-secondTextColor"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Our Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className="text-lg font-semiBold text-secondTextColor"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className="text-lg font-semiBold text-secondTextColor"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className="text-lg font-semiBold text-secondTextColor"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <button
        className="bg-green button text-white mobile:hidden tablet:hidden"
        onClick={() => history("/contactUs")}
      >
        Contact Us
      </button>
      <div className="hamburger-menu hidden mobile:flex tablet:flex">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box" ref={comRef}>
          <span className="w-full pr-4 text-end flex items-end justify-end">
            <IoMdCloseCircleOutline
              className="text-[2.5rem]"
              onClick={() =>
                (document.getElementById("menu__toggle").checked = false)
              }
            />
          </span>
          <li>
            <NavLink
              to="/"
              className="text-[18px] font-medium menu__item w-fit"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
              onClick={() =>
                (document.getElementById("menu__toggle").checked = false)
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className="text-[18px] font-medium menu__item w-fit"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
              onClick={() =>
                (document.getElementById("menu__toggle").checked = false)
              }
            >
              About Us{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ourservice"
              className="text-[18px] font-medium menu__item w-fit"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
              onClick={() =>
                (document.getElementById("menu__toggle").checked = false)
              }
            >
              Our Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className="text-lg font-semiBold text-secondTextColor"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className="text-lg font-semiBold text-secondTextColor"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className="text-[18px] font-medium menu__item w-fit"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
              onClick={() =>
                (document.getElementById("menu__toggle").checked = false)
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactUs"
              className="text-[18px] font-medium menu__item w-fit"
              style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
              onClick={() =>
                (document.getElementById("menu__toggle").checked = false)
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
