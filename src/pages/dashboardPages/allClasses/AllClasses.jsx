import React, { useEffect } from "react";

const AllClasses = () => {
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <h3 className="text-center uppercase text-3xl font-semibold my-10">All Classes</h3>
    </div>
  );
};

export default AllClasses;
