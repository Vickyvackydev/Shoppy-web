"use client";
import { categoriesdata } from "@/constants";
import Button from "@/shared/components/button";
import React from "react";

function Categories() {
  return (
    <main className="w-full lg:px-20 px-7 mt-[3rem]">
      <div className="flex items-center justify-between">
        <span className="lg:text-3xl text-sm font-extrabold text-white">
          Explore <br /> Our Categories
        </span>
        <Button
          text="View All"
          btnStyles=""
          handleClick={() => {}}
          type="button"
        />
      </div>
      <div className="flex items-center gap-4 mt-6 w-full  overflow-auto">
        {categoriesdata.map((_data, i) => (
          <div
            key={i}
            className="lg:w-[190px] w-[130px] lg:min-w-[190px] min-w-[130px] cursor-pointer bg-gray-700 flex items-center pt-3 hover:bg-orange-500 flex-col rounded-lg  lg:h-[150px] h-[120px]"
          >
            <span className="lg:text-5xl text-2xl font-semibold text-white">
              {_data.icon}
            </span>
            <div className="mt-7 flex flex-col items-center">
              <span className="text-white font-semibold lg:text-xl text-sm">
                {_data.category}
              </span>
              <span className="font-medium lg:text-[16px]  text-xs text-gray-200">
                {_data.totalitems} items
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Categories;
