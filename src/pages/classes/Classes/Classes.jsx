import React, { useEffect, useState } from "react";
import useStudent from "../../../hook/useStudent";
import Swal from "sweetalert2";

const Classes = () => {
  const [student] = useStudent();
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes/approved")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  const handleSelectedClass = (game) => {
    const { className, imageURL, instructorName, instructorEmail, price, seats, enrolled, status } =
      game;

    const selectedClass = {
      studentName: student?.name,
      studentEmail: student?.email,
      className,
      imageURL,
      instructorName,
      instructorEmail,
      price,
      seats,
      enrolled,
      status: "selected",
    };

    fetch("http://localhost:5000/selectedClasses", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(selectedClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${className} is selected`,
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };

  return (
    <div className="mb-16">
      <h3 className="text-5xl text-center font-semibold mb-10">Classes</h3>
      {/* Classes */}
      <div className=" grid grid-cols-3 gap-10">
        {/* Class block */}
        {games.map((game) => (
          <div key={game?._id} className="w-[450px] relative border p-5 border-[#1A58A3]">
            <img className="w-[400px] mx-auto" src={game?.imageURL} alt="" />
            <div className="w-20 mx-auto bg-orange-400 h-20 text-center rounded-full absolute right-[190px] bottom-48 border-4 border-white">
              <p className="pt-6 text-xl font-semibold text-white">${game?.price}</p>
            </div>
            <div className="text-center pt-10 space-y-2">
              <h3 className="text-2xl font-semibold">{game?.className}</h3>
              <h4 className="text-xl">Instructor: {game?.instructorName}</h4>
              <p>Available Seats: {game?.seats}</p>
              <div className="w-52 mx-auto">
                <button
                  onClick={() => {
                    handleSelectedClass(game);
                  }}
                  className="bg-[#FCE07A] w-full py-3 mt-3 hover:bg-[#fcc708] text-lg font-semibold"
                >
                  Select class
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
