import React from "react";
import SwipperBanner from "../SwiperBanner/SwipperBanner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Navbar from "../../../shared/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <SwipperBanner></SwipperBanner>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;
