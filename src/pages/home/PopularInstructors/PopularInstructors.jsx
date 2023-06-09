import React from "react";

import img from "../../../assets/trainer1.jpg";

const PopularInstructors = () => {
  return (
    <div>
      <h2 className="text-5xl font-semibold text-center my-10">Popular Instructors</h2>
      <div className="grid grid-cols-6 gap-5">
        {/* block */}
        <div className="border p-5 w-56  border-[#1A58A3] ">
          <img src={img} alt="" />
          <div className="relative w-52 mt-2">
            <h4 className="text-xl font-semibold">John Smith</h4>
            <div className="bg-[#FCE07A] w-16 h-10 absolute bottom-4 right-1 box-border"></div>
          </div>
        </div>
        {/* block */}
        <div className="border p-5 w-56  border-[#1A58A3] ">
          <img src={img} alt="" />
          <div className="relative w-52 mt-2">
            <h4 className="text-xl font-semibold">John Smith</h4>
            <div className="bg-[#FCE07A] w-16 h-10 absolute bottom-4 right-1 box-border"></div>
          </div>
        </div>
        {/* block */}
        <div className="border p-5 w-56  border-[#1A58A3] ">
          <img src={img} alt="" />
          <div className="relative w-52 mt-2">
            <h4 className="text-xl font-semibold">John Smith</h4>
            <div className="bg-[#FCE07A] w-16 h-10 absolute bottom-4 right-1 box-border"></div>
          </div>
        </div>
        {/* block */}
        <div className="border p-5 w-56  border-[#1A58A3] ">
          <img src={img} alt="" />
          <div className="relative w-52 mt-2">
            <h4 className="text-xl font-semibold">John Smith</h4>
            <div className="bg-[#FCE07A] w-16 h-10 absolute bottom-4 right-1 box-border"></div>
          </div>
        </div>
        {/* block */}
        <div className="border p-5 w-56  border-[#1A58A3] ">
          <img src={img} alt="" />
          <div className="relative w-52 mt-2">
            <h4 className="text-xl font-semibold">John Smith</h4>
            <div className="bg-[#FCE07A] w-16 h-10 absolute bottom-4 right-1 box-border"></div>
          </div>
        </div>
        {/* block */}
        <div className="border p-5 w-56  border-[#1A58A3] ">
          <img src={img} alt="" />
          <div className="relative w-52 mt-2">
            <h4 className="text-xl font-semibold">John Smith</h4>
            <div className="bg-[#FCE07A] w-16 h-10 absolute bottom-4 right-1 box-border"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
