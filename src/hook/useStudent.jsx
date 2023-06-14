import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useStudent = () => {
  const { user } = useAuth();
  const [student, setStudent] = useState(null);
  const [isStudent, setIsStudent] = useState(false);
  const [isStudentLoading, setIsStudentLoading] = useState(true);

  useEffect(() => {
    setIsStudentLoading(true);
    fetch(`http://localhost:5000/students/student/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.role === "student") {
          setStudent(data);
          setIsStudent(true);
          setIsStudentLoading(false);
        }
      })
      .catch((error) => console.log(error.message));
  }, [user]);
  return [student, isStudent, isStudentLoading];
};

export default useStudent;
