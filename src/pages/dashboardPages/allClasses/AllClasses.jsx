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
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            <tr>
              <td>01</td>
              <td>
                <div className=" rounded w-12 h-12">
                  <img
                    src="/tailwind-css-component-profile-2@56w.png"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>Seats</td>
              <td>
                <button className="btn btn-ghost btn-xs">details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllClasses;
