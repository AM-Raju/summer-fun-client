import React, { useEffect, useState } from "react";

import img from "../../../assets/trainer1.jpg";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructors/topSix")
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .catch((error) => error.message);
  }, []);
  return (
    <div className="mb-16">
      <h2 className="text-5xl font-semibold text-center my-10">Popular Instructors</h2>
      <div className="grid grid-cols-6 gap-5">
        {/* block */}
        {instructors.map((instructor) => (
          <div className="border p-5 w-56  border-[#1A58A3] ">
            <img src={instructor?.image} alt="" />
            <div className="relative w-52 mt-4">
              <h4 className="text-xl font-semibold">{instructor?.name}</h4>
              <div className="bg-[#FCE07A] w-16 h-10 absolute bottom-8 right-1 box-border"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
