import React, { useState } from "react";
import Testimonial1 from "../assets/img/testimonial1.jpeg";
import Testimonial2 from "../assets/img/testimonial2.jpeg";
import StarIcon from "@mui/icons-material/Star";
import quote from "../assets/img/SVG.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Testimonials.css";

import { EffectFlip, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Cameron Williamson",
    role: "Designer",
    image: Testimonial1,
    text: "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
  },
  {
    name: "Sarah Lee",
    role: "Developer",
    image:
      "https://images.unsplash.com/photo-1645800803579-9cdc733f3bfc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Another testimonial image
    text: "Amazing platform to compare properties. It really helped me make the right decisions for my projects! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
  },
  {
    name: "John Doe",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1617724748068-691efeeaf542?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Another testimonial image
    text: "The loan estimator tool saved me so much time. Excellent features and user-friendly interface.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next"); // Determines animation direction

  const handlePrev = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      {/* Testimonial  */}
      <div className="bg-[#FFF8F6] lg:py-8 lg:px-16">
        <div className="grid sm:grid-cols-12 gap-5 max-w-[1280px] mx-auto">
          <div className="col-span-12 lg:col-span-6 flex justify-center">
            <div className="m-3 lg:m-5 px-5 lg:px-7 lg:py-16 font-roboto lg:pe-20 flex flex-col items-center ">
              <h1 className="text-xl lg:text-4xl text-[#1A1A1A] my-4 font-medium">
                What our customers are saying us?
              </h1>
              <p className="text-[#1A1A1A] text-md lg:text-lg text-justify my-5 lg:pe-20">
                Don't just take our word for it—hear directly from those who
                have experienced our services. Our customers' stories reflect
                the dedication, expertise, and care we put into every
                transaction. Read their testimonials and see why we're the
                trusted choice for all your real estate needs.
              </p>
              <div className="flex justify-end lg:justify-start gap-10 w-full">
                <div className="flex-col mt-5 lg:mt-10">
                  <h3 className="font-medium text-[#1A1A1A] text-sm lg:text-2xl">
                    10m+
                  </h3>
                  <p className="text-xs lg:text-lg">Happy People</p>
                </div>
                <div className="flex-col mt-5 lg:mt-10">
                  <h3 className="font-medium text-[#1A1A1A] text-sm lg:text-2xl">
                    4.88
                  </h3>
                  <p className="text-xs lg:text-lg">Overall rating</p>
                  <div className="flex mt-3">
                    <StarIcon
                      sx={{ color: "#e7c874", fontSize: { xs: 15, lg: 25 } }}
                      size="small"
                    />
                    <StarIcon
                      sx={{ color: "#e7c874", fontSize: { xs: 15, lg: 25 } }}
                      size="small"
                    />
                    <StarIcon
                      sx={{ color: "#e7c874", fontSize: { xs: 15, lg: 25 } }}
                      size="small"
                    />
                    <StarIcon
                      sx={{ color: "#e7c874", fontSize: { xs: 15, lg: 25 } }}
                      size="small"
                    />
                    <StarIcon
                      sx={{ color: "#e7c874", fontSize: { xs: 15, lg: 25 } }}
                      size="small"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex justify-center testimonial-container">
            <Swiper
              effect={"flip"}
              grabCursor={true}
              modules={[EffectFlip, Autoplay]} // Add Autoplay module
              autoplay={{
                delay: 3000, // 3 seconds delay
                disableOnInteraction: false, // Keep autoplay even after interaction
              }}
              className="mySwiper testimonial-swiper"
            >
              {testimonials.map((testimonial) => {
                return (
                  <SwiperSlide key={testimonial.name}>
                    <div className="py-8 lg:py-16 font-roboto lg:ps-26">
                      <div className="flex-col items-center gap-4 testimonial-item">
                        <div className="flex items-center gap-5">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-[50px] lg:w-[90px] rounded-[50%] h-[50px] lg:h-[90px] object-cover object-top"
                          />
                          <div className="flex-col justify-center gap-5">
                            <h5 className="font-medium text-[#1A1A1A] text-sm lg:text-lg">
                              {testimonial.name}
                            </h5>
                            <p className="text-sm text-[#1A1A1A]">
                              {testimonial.role}
                            </p>
                          </div>
                          <div className="ms-32">
                            <img src={quote} alt="quote" />
                          </div>
                        </div>
                        <div className="mt-5">
                          <p className="lg:leading-10 text-sm lg:text-lg text-justify font-roboto font-medium text-[#1A1A1A]">
                            {testimonial.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
