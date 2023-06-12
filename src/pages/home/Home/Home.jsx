import React from "react";
import SwipperBanner from "../SwiperBanner/SwipperBanner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Navbar from "../../../shared/navbar/Navbar";
import Stats from "../stats/Stats";

const Home = () => {
  return (
    <div>
      <SwipperBanner></SwipperBanner>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <Stats></Stats>
    </div>
  );
};

export default Home;
