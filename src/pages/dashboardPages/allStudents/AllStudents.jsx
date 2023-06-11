import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const AllStudents = () => {
  const [students, setStudent] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStudent(data))
      .catch((error) => console.log(error.message));
  }, []);

  const handleRole = () => {
    console.log("Role Changed");
  };
  return (
    <div>
      <h3 className="text-center uppercase text-3xl font-semibold my-10">All Students</h3>

      <div className="overflow-x-auto">
        <table className="table w-8/12 mx-auto">
          {/* head */}
          <thead className="text-lg font-semibold">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {students.map((student, index) => (
              <tr key={student._id}>
                <td>{index + 1}</td>
                <td>{student?.name}</td>
                <td>{student?.email}</td>
                <td>{student?.role}</td>
                <td>
                  <button
                    onClick={handleRole}
                    className={` px-5 py-3 ${
                      student?.role === "admin" ? "bg-gray-500" : "bg-[#FCE07A] hover:bg-[#f8cf3b]"
                    }`}
                    disabled={student?.role !== "admin" ? false : true}
                  >
                    Make Admin
                  </button>
                </td>
                <td>
                  <button
                    className={` px-5 py-3 ${
                      student?.role === "admin" ? "bg-gray-500" : "bg-[#FCE07A] hover:bg-[#f8cf3b]"
                    }`}
                    disabled={student?.role !== "admin" ? false : true}
                  >
                    Make Instructor
                  </button>
                </td>
                <td>
                  <button disabled={student?.role !== "admin" ? false : true}>
                    <FaTrashAlt
                      className={` px-5 py-3 w-16 h-12 text-white ${
                        student?.role === "admin" ? "bg-gray-500" : "bg-red-400 hover:bg-red-500"
                      }`}
                    ></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllStudents;
