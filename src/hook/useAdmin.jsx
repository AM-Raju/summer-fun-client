import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    setIsAdminLoading(true);
    fetch(`http://localhost:5000/students/admin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.role === "admin") {
          setIsAdmin(true);
          setIsAdminLoading(false);
        }
      })
      .catch((error) => console.log(error.message));
  }, []);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
