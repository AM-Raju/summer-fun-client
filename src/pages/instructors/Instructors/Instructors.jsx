import React, { useEffect, useState } from "react";

import img from "../../../assets/trainer1.jpg";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  // get instructor from server
  useEffect(() => {
    fetch("http://localhost:5000/students/instructor")
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className="mb-16">
      <h3 className="text-5xl text-center font-semibold mb-10">Our Honorable Instructors</h3>
      {/* Instructors */}
      <div className="grid grid-cols-4 gap-4">
        {/* Instructor block */}
        {instructors.map((instructor) => (
          <div className="w-90 border border-[#1A58A3] p-5">
            <div className="border-8 border-[#FCE07A] rounded-full w-52 mx-auto">
              <img className="w-52 mx-auto rounded-full" src={instructor?.image} alt="" />
            </div>
            <div className="text-center mt-5">
              <h4 className="text-xl">{instructor?.name}</h4>
              <p>Email: {instructor?.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
