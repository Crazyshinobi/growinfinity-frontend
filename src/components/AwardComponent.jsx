import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";

import award1 from "../assets/img/1.jpg";
import award2 from "../assets/img/4.jpg";
import award3 from "../assets/img/Award.jpg";
import award4 from "../assets/img/Experion Award.jpg";
import award5 from "../assets/img/Experion Elements.jpg";

import "./AwardComponent.css";

export const AwardComponent = () => {
  return (
    <div className="body my-10">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}  // Enable infinite loop
        autoplay={{
          delay: 2500,  // Slide change interval (in milliseconds)
          disableOnInteraction: false,  // Auto play won't stop after interaction
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCards, Autoplay]}  // Add Autoplay module
        className="mySwiper awards-swiper"
      >
        <SwiperSlide>
          <img src={award1} className="h-[300px] w-[300px] lg:h-[500px] lg:w-[450px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={award2} className="h-[300px] w-[300px] lg:h-[500px] lg:w-[450px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={award3} className="h-[300px] w-[300px] lg:h-[500px] lg:w-[450px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={award4} className="h-[300px] w-[300px] lg:h-[500px] lg:w-[450px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={award5} className="h-[300px] w-[300px] lg:h-[500px] lg:w-[450px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={award5} className="h-[300px] w-[300px] lg:h-[500px] lg:w-[450px]" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
