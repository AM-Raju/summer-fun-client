import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AllClasses = () => {
  // This is normal way to fetch data
  /* const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((error) => console.log(error.message));
  }, []); */

  const { data: games = [], refetch } = useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/classes");
      return res.json();
    },
  });

  const handleApprove = (game) => {
    fetch(`http://localhost:5000/classes/${game?._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class Approved",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })
      .catch((error) => console.log(error.message));
  };

  const handleDeny = (game) => {
    console.log(game?._id, "Deny clicked");
  };

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
              <th>Price</th>
              <th>Available Seats</th>
              <th>Enrolled Seats</th>
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
                  <button
                    onClick={() => {
                      handleApprove(game);
                    }}
                    className="px-5 py-3 bg-[#FCE07A] hover:bg-[#ebba08]"
                  >
                    Approve
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDeny(game);
                    }}
                    disabled={game?.status === "approved" ? true : false}
                    className={`px-5 py-3 bg-[#FCE07A] hover:bg-[#ebba08] ${
                      game?.status === "approved" ? "bg-gray-500 hover:bg-gray-500 text-white" : ""
                    } `}
                  >
                    Deny
                  </button>
                </td>
                <td>
                  <button
                    disabled={game?.status === "approved" ? true : false}
                    className={`px-5 py-3 bg-[#FCE07A] hover:bg-[#ebba08] ${
                      game?.status === "approved" ? "bg-gray-500 hover:bg-gray-500 text-white" : ""
                    }`}
                  >
                    Feedback
                  </button>
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
