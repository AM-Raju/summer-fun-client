import React, { useEffect, useState } from "react";

const AllClasses = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div>
      <h3 className="text-center uppercase text-3xl font-semibold my-10">All Classes</h3>
      <div className="overflow-x-auto w-10/12 mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Enrolled Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
              <th>Action</th>
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
                <td>{game?.instructorName}</td>
                <td>{game?.instructorEmail}</td>
                <td>{game?.price}</td>
                <td>{game?.seats}</td>
                <td>{game?.enrolled}</td>
                <td>{game?.status}</td>
                <td>
                  <button className="px-5 py-3 bg-[#FCE07A] hover:bg-[#ebba08]">Approve</button>
                </td>
                <td>
                  <button className="px-5 py-3 bg-[#FCE07A] hover:bg-[#ebba08]">Deny</button>
                </td>
                <td>
                  <button className="px-5 py-3 bg-[#FCE07A] hover:bg-[#ebba08]">Feedback</button>
                </td>
              </tr>
            ))}
            {/* row */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllClasses;
