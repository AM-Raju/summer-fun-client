import React from "react";
import { FaBars, FaUser, FaUserCircle } from "react-icons/fa";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navOption = (
    <>
      <li>
        <Link className="bg-[#1A58A3] text-white">Dashboard</Link>
      </li>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Instructors</a>
      </li>
      <li>
        <a>Classes</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <FaBars className="text-2xl"></FaBars>
          </label>
          <ul
            tabIndex={0}
            className="menu w-56 p-0 [&_li>*]:rounded-none bg-base-100   dropdown-content mt-3 shadow text-lg"
          >
            {navOption}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <img className="w-36" src={logo} alt="" />
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <FaUserCircle className="text-3xl"></FaUserCircle>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
