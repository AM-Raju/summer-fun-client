import React from "react";

import game from "../../../assets/capture-the-flag.jpg";

const PopularClasses = () => {
  return (
    <div>
      <h2 className="text-5xl font-semibold text-center my-10">Popular Classes</h2>

      <div className="grid grid-cols-3 gap-3">
        {/* Block */}
        <div className=" border p-10 w-[470px] relative border-[#1A58A3]">
          <img className="w-full" src={game} alt="" />
          <div className="text-center bg-[#FCE07A] w-80 ml-8 box-border py-4 absolute bottom-0">
            <h4 className="text-2xl font-semibold">Capture The Flag</h4>
            <h5 className="text-xl">John Smith</h5>
            <p>Seats: 12</p>
            <button className="btn btn-outline">Select Game</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
