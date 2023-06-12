import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useInstructor = () => {
  const { user } = useAuth();
  const [isInstructor, setIsInstructor] = useState(false);
  const [isInstructorLoading, setIsInstructorLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/students/instructor/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.role === "instructor") {
          setIsInstructor(true);
          setIsInstructorLoading(false);
        }
      })
      .catch((error) => console.log(error.message));
  }, []);
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
