import React from "react";

import game from "../../../assets/capture-the-flag.jpg";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  return (
    <div className="mb-16 mt-32">
      <h2 className="text-5xl font-semibold text-center mb-16">Popular Classes</h2>

      <div className="grid grid-cols-3 gap-3">
        {/* Block */}
        <div className=" border p-10 w-[470px] relative border-[#1A58A3]">
          <img className="w-full" src={game} alt="" />
          <div className="text-center bg-[#FCE07A] w-80 ml-8 box-border py-4 absolute bottom-0">
            <h4 className="text-2xl font-semibold">Capture The Flag</h4>
            <h5 className="text-xl">John Smith</h5>
            <p>Seats: 12</p>
            <div className="w-52 mx-auto">
              <button className="bg-[#FCE07A] w-full py-3 border border-black mt-3 hover:bg-[#fcc708] text-lg font-semibold">
                Select class
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-52 mx-auto mt-8">
        <Link to="/classes">
          <button className="bg-[#FCE07A]   w-full py-3 mt-5 hover:bg-[#fcc708] text-lg font-semibold">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularClasses;
