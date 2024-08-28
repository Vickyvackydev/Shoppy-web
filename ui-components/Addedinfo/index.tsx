import { addedinfos } from "@/constants";
import React from "react";

function AddedInfo() {
  return (
    <main className="lg:flex grid lg:grid-cols-3 grid-cols-1 mt-[5rem] justify-center items-center lg:gap-x-0 gap-y-5">
      {addedinfos.map((data, i) => (
        <div
          key={i}
          className={`flex items-start gap-2  ${
            i && "lg:border-r border-none border-yellow-50"
          } pl-10`}
        >
          <span className="lg:text-[47px] text-[30px] text-white hover:text-orange-500">
            {data.icon}
          </span>
          <div className="flex items-start flex-col">
            <span className="text-white lg:text-xl text-lg font-semibold">
              {data.title}
            </span>
            <span className="lg:text-[16px] text-sm font-medium text-gray-400">
              {data.subtitle}
            </span>
          </div>
        </div>
      ))}
    </main>
  );
}

export default AddedInfo;
