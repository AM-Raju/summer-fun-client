import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
// Images
import img1 from "../../../assets/slider/1.jpg";
import img2 from "../../../assets/slider/2.jpg";
import img3 from "../../../assets/slider/3.jpg";
import img4 from "../../../assets/slider/4.jpg";
import img5 from "../../../assets/slider/5.jpg";

const SwipperBanner = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <img src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwipperBanner;
