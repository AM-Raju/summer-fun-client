import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useInstructor = () => {
  const { user } = useAuth();

  const [instructor, setInstructor] = useState(null);
  const [isInstructor, setIsInstructor] = useState(false);
  const [isInstructorLoading, setIsInstructorLoading] = useState(true);

  useEffect(() => {
    setIsInstructorLoading(true);
    fetch(`http://localhost:5000/students/instructor/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.role === "instructor") {
          setInstructor(data);
          setIsInstructor(true);
          setIsInstructorLoading(false);
        }
      })
      .catch((error) => console.log(error.message));
  }, [user]);
  return [instructor, isInstructor, isInstructorLoading];
};

export default useInstructor;
