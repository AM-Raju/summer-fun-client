import React from "react";

import img from "../../../assets/trainer1.jpg";

const Instructors = () => {
  return (
    <div>
      <h3 className="text-5xl text-center font-semibold mb-10">Our Honorable Instructors</h3>
      {/* Instructors */}
      <div className="grid grid-cols-4 gap-4">
        {/* Instructor block */}
        <div className="w-90 border border-[#1A58A3] p-5">
          <div className="border-8 border-[#FCE07A] rounded-full w-52 mx-auto">
            <img className="w-52 mx-auto rounded-full" src={img} alt="" />
          </div>
          <div className="text-center mt-5">
            <h4 className="text-xl">John Smith</h4>
            <p>abc@gmail.com</p>
          </div>
        </div>
        {/* Instructor block */}
        <div className="w-90 border border-[#1A58A3] p-5">
          <div className="border-8 border-[#FCE07A] rounded-full w-52 mx-auto">
            <img className="w-52 mx-auto rounded-full" src={img} alt="" />
          </div>
          <div className="text-center mt-5">
            <h4 className="text-xl">John Smith</h4>
            <p>abc@gmail.com</p>
          </div>
        </div>
        {/* Instructor block */}
        <div className="w-90 border border-[#1A58A3] p-5">
          <div className="border-8 border-[#FCE07A] rounded-full w-52 mx-auto">
            <img className="w-52 mx-auto rounded-full" src={img} alt="" />
          </div>
          <div className="text-center mt-5">
            <h4 className="text-xl">John Smith</h4>
            <p>abc@gmail.com</p>
          </div>
        </div>
        {/* Instructor block */}
        <div className="w-90 border border-[#1A58A3] p-5">
          <div className="border-8 border-[#FCE07A] rounded-full w-52 mx-auto">
            <img className="w-52 mx-auto rounded-full" src={img} alt="" />
          </div>
          <div className="text-center mt-5">
            <h4 className="text-xl">John Smith</h4>
            <p>abc@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
