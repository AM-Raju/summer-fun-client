import React, { useEffect, useState } from "react";
import useStudent from "../../../hook/useStudent";

const SelectedClass = () => {
  const [student] = useStudent();
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/selectedClasses/${student?.email}`)
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((error) => console.log(error));
  }, [student]);
  return (
    <div className="h-screen bg-purple-200">
      <h3 className="text-center uppercase text-5xl font-semibold my-10">Student Classes</h3>
      <div className="flex w-1/4 mx-auto items-center gap-5 border p-5 border-[#1A58A3]">
        <img className="w-48 h-48 shadow" src={student?.image} alt="" />
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{student?.name}</h3>
          <p>Email: {student?.email}</p>
          <p>Total Classes: {games?.length}</p>
        </div>
      </div>
      <div className="overflow-x-auto w-10/12 mx-auto">
        <table className="table text-lg">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>

              <th>Price</th>
              <th>Available Seats</th>
              <th>Enrolled Seats</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game, index) => (
              <tr key={game._id}>
                <td>{index + 1}</td>
                <td>
                  <div className=" rounded w-16 h-16">
                    <img src={game?.imageURL} alt="" />
                  </div>
                </td>
                <td>{game?.className}</td>
                <td>${game?.price}</td>
                <td>{game?.seats}</td>
                <td>{game?.enrolled}</td>
                <td>{game?.status}</td>
                <td>Feedback here!</td>
                <td>
                  <button className="px-5 py-3 bg-[#FCE07A] hover:bg-[#ebba08]">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
