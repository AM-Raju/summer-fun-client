import React from "react";
import { FaBars, FaUser, FaUserCircle } from "react-icons/fa";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navOption = (
    <>
      <li>
        <Link className="bg-[#1A58A3] text-white hidden">Dashboard</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 relative z-10">
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
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <FaUserCircle className="text-3xl"></FaUserCircle>
          </label>
          <ul
            tabIndex={0}
            className="menu w-56 p-0 [&_li>*]:rounded-none bg-base-100   dropdown-content mt-3 shadow text-lg"
          >
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
