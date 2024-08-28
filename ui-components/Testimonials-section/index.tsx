"use client";
import React from "react";
import Button from "@/shared/components/button";
import { testimonialsdata } from "@/constants";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
function TestimonialSection() {
  return (
    <div className="lg:px-20 px-5 mt-10 w-full mb-9">
      <div className="flex items-center justify-between">
        <span className="text-white lg:text-[42px] text-lg font-extrabold ">
          Testimonials
        </span>
        <Button
          text="Read All"
          btnStyles=""
          handleClick={() => {}}
          type="button"
        />
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        loop
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="mt-10"
      >
        {testimonialsdata.map((data) => (
          <SwiperSlide
            key={data.id}
            className="w-full lg:h-[200px] h-full hover:scale-105 transform duration-300 rounded-xl px-3 py-5  flex flex-col   bg-gray-700"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div>
                  <Image
                    src={data.avatar}
                    width={50}
                    height={50}
                    className="rounded-full w-12 h-12"
                    alt="image"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-white font-semibold text-[16px]">
                    {data.name}
                  </span>
                  <span className="text-sm text-gray-400 font-medium">
                    {data.role}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[0.7px]">
                <span className="text-white font-semibold">
                  {data.ratings}/5
                </span>
                <span className="text-yellow-500">
                  <FaStar />
                </span>
              </div>
            </div>

            <span className="pt-8 text-white font-semibold text-[16px]">
              {data.text}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
      <style>{`
  

  .swiper-pagination-bullet {
    background-color: white;
    margin-top: 20px;
  }

  .swiper-pagination-bullet-active {
    background-color: orange;
    opacity: 1;
  }

 
`}</style>
    </div>
  );
}

export default TestimonialSection;
