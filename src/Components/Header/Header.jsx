import React from "react";
import { Link, Links, NavLink } from "react-router";
import logoImg from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const links = [
    <NavLink className="mx-6" to="/">
      <a className=" text-lg" href="/">
        Home
      </a>
    </NavLink>,
    <NavLink className="mx-6" to="/AllApps">
      <a className=" text-lg" href="/">
        Apps
      </a>
    </NavLink>,
    <NavLink to="/" className="mx-6">
      <a className="text-lg " href="/">
        Installation
      </a>
    </NavLink>,
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm px-0 md:px-14 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div>
          <Link className="flex justify-center items-center gap-2" to="/">
            <img className="h-10 w-10" src={logoImg} alt="" />
            <h3 className="font-bold text-[16px text-[#632EE3] ">HERO.IO</h3>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="https://github.com/tonmoybiswas07">
          <a className="md:text-[18px] md:py-5 btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
            <FaGithub /> Contribute
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
