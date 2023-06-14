import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructors/topSix")
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .catch((error) => error.message);
  }, []);
  return (
    <div className="mb-32 mt-32">
      <h2 className="text-5xl font-semibold text-center mb-16">Popular Instructors</h2>
      <div className="grid grid-cols-6 gap-5">
        {/* block */}
        {instructors.map((instructor) => (
          <div key={instructor?._id} className="border p-5 w-56  border-[#1A58A3] ">
            <img src={instructor?.image} alt="" />
            <div className="relative w-52 mt-4">
              <h4 className="text-xl font-semibold">{instructor?.name}</h4>
              <div className="bg-[#FCE07A] w-16 h-10 absolute bottom-8 right-1 box-border"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-52 mx-auto mt-8">
        <Link to="/instructors">
          <button className="bg-[#FCE07A]   w-full py-3 mt-5 hover:bg-[#fcc708] text-lg font-semibold">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularInstructors;
