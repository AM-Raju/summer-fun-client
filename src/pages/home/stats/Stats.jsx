import React from "react";
import {
  FaChalkboardTeacher,
  FaHeadset,
  FaStopwatch,
  FaUserFriends,
  FaUserGraduate,
} from "react-icons/fa";
import bg from "../../../assets/bg-section.jpg";

const Stats = () => {
  return (
    <div className="h-96 " style={{ backgroundImage: `url(${bg})` }}>
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center h-full bg-black bg-opacity-50">
        {/* Block */}
        <div className="text-center w-96 text-white">
          <div className="w-20 mx-auto">
            <FaUserFriends className="text-7xl text-[#FCE07A]"></FaUserFriends>
          </div>
          <p className="text-5xl my-3">650+</p>
          <h3 className="text-2xl font-semibold">Active Participants</h3>
        </div>
        {/* Block */}
        <div className="text-center w-96 text-white">
          <div className="w-20 mx-auto">
            <FaChalkboardTeacher className="text-7xl text-[#FCE07A]"></FaChalkboardTeacher>
          </div>
          <p className="text-5xl my-3">30</p>
          <h3 className="text-2xl font-semibold">Instructors</h3>
        </div>
        {/* Block */}
        <div className="text-center w-96 text-white">
          <div className="w-20 mx-auto">
            <FaStopwatch className="text-7xl text-[#FCE07A]"></FaStopwatch>
          </div>
          <p className="text-5xl my-3">1000+</p>
          <h3 className="text-2xl font-semibold">Class Hours</h3>
        </div>
        {/* Block */}
        <div className="text-center w-96 text-white">
          <div className="w-20 mx-auto">
            <FaHeadset className="text-7xl text-[#FCE07A]"></FaHeadset>
          </div>
          <p className="text-5xl my-3">650+</p>
          <h3 className="text-2xl font-semibold">24/7 Support</h3>
        </div>
      </div>
    </div>
  );
};

export default Stats;
