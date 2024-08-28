"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { productdata } from "@/constants";
import Image from "next/image";

const breakpoints = {
  320: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  460: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  640: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1240: {
    slidesPerView: 5,
    spaceBetween: 50,
  },
};
function ProductSlide() {
  return (
    <main className="w-full my-8 px-10">
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
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="flex"
      >
        {productdata.map((data) => (
          <SwiperSlide
            key={data.id}
            className="h-full px-5 py-5 bg-gray-700 w-full rounded-lg flex flex-col items-start"
          >
            <div className="h-[200px] bg-white rounded-lg flex justify-center items-center">
              <Image
                src={data.image}
                width={200}
                height={200}
                alt="data image"
              />
            </div>
            {data.isPopular && (
              <div className="absolute bg-orange-500  right-0 rounded-tr-lg rounded-bl-xl top-0 text-sm   text-white font-medium py-1 px-3">
                <span>{`Popular`.toUpperCase()}</span>
              </div>
            )}
            <div className="flex items-center justify-between py-4">
              <div className="flex flex-col items-start">
                <span className="text-white font-semibold text-[16px]">
                  {data.name}
                </span>
                <span className="text-sm text-gray-400">{data.category}</span>
              </div>
              <span className="text-red-500 font-semibold text-sm">{`$${data.price}`}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default ProductSlide;
