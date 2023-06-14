import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user } = useAuth();
  const [admin, setAdmin] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    setIsAdminLoading(true);
    fetch(`http://localhost:5000/students/admin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.role === "admin") {
          setAdmin(data);
          setIsAdmin(true);
          setIsAdminLoading(false);
        }
      })
      .catch((error) => console.log(error.message));
  }, [user]);
  return [admin, isAdmin, isAdminLoading];
};

export default useAdmin;
