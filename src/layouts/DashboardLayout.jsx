import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const dashboardOption = (
    <>
      <li>
        <Link to="/dashboard/allStudents">Manage Students</Link>
      </li>
      <li>
        <Link to="/dashboard/addClass">Add a Class</Link>
      </li>
      <li>
        <Link to="/dashboard/myClasses">My Classes</Link>
      </li>
      <div className="divider">Main Menu</div>
      {/* Main menu */}
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>Instructors</Link>
      </li>
      <li>
        <Link>Classes</Link>
      </li>
    </>
  );
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Page content here */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#1A58A3] text-white ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <h3 className="text-4xl text-center font-semibold mt-3">Dashboard</h3>
        <ul className="menu p-4 w-80 h-full text-lg text-white">
          {/* Sidebar content here */}
          {dashboardOption}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;