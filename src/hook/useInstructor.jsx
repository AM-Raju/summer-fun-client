import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useInstructor = () => {
  const { user } = useAuth();

  const [instructor, setInstructor] = useState(null);
  const [isInstructor, setIsInstructor] = useState(false);
  const [instructorLoading, setInstructorLoading] = useState(true);

  useEffect(() => {
    setInstructorLoading(true);
    fetch(`http://localhost:5000/students/instructor/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.role === "instructor") {
          setInstructor(data);
          setIsInstructor(true);
          setInstructorLoading(false);
        }
      })
      .catch((error) => console.log(error.message));
  }, [user]);
  return [instructor, isInstructor, instructorLoading];
};

export default useInstructor;
