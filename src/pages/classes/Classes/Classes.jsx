import React from "react";
import img from "../../../assets/capture-the-flag.jpg";

const Classes = () => {
  return (
    <div>
      <h3 className="text-5xl text-center font-semibold mb-10">Classes</h3>
      {/* Classes */}
      <div className=" grid grid-cols-3 gap-10">
        {/* Class block */}
        <div className="w-[450px] relative border p-5 border-[#1A58A3]">
          <img className="w-[400px] mx-auto" src={img} alt="" />
          <div className="w-20 mx-auto bg-orange-400 h-20 text-center rounded-full absolute right-[190px] bottom-44 border-4 border-white">
            <p className="pt-6 text-xl font-semibold text-white">$450</p>
          </div>
          <div className="text-center pt-10 space-y-2">
            <h3 className="text-2xl font-semibold">Tug of War</h3>
            <h4 className="text-xl">John Smith</h4>
            <p>Available Seats: 0</p>
            <button className="btn btn-outline">Select class</button>
          </div>
        </div>
        {/* Class block */}
        <div className="w-[450px] relative border p-5 border-[#1A58A3]">
          <img className="w-[400px] mx-auto" src={img} alt="" />
          <div className="w-20 mx-auto bg-orange-400 h-20 text-center rounded-full absolute right-[190px] bottom-44 border-4 border-white">
            <p className="pt-6 text-xl font-semibold text-white">$450</p>
          </div>
          <div className="text-center pt-10 space-y-2">
            <h3 className="text-2xl font-semibold">Tug of War</h3>
            <h4 className="text-xl">John Smith</h4>
            <p>Available Seats: 0</p>
            <button className="btn btn-outline">Select class</button>
          </div>
        </div>
        {/* Class block */}
        <div className="w-[450px] relative border p-5 border-[#1A58A3]">
          <img className="w-[400px] mx-auto" src={img} alt="" />
          <div className="w-20 mx-auto bg-orange-400 h-20 text-center rounded-full absolute right-[190px] bottom-44 border-4 border-white">
            <p className="pt-6 text-xl font-semibold text-white">$450</p>
          </div>
          <div className="text-center pt-10 space-y-2">
            <h3 className="text-2xl font-semibold">Tug of War</h3>
            <h4 className="text-xl">John Smith</h4>
            <p>Available Seats: 0</p>
            <button className="btn btn-outline">Select class</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
