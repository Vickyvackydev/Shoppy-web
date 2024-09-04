"use client";
import { ProductDataProps } from "@/types";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaEye, FaHeart, FaPlus } from "react-icons/fa";

function ProductCard({ data }: { data: ProductDataProps }) {
  const [overlay, setOverlay] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-start gap-4 relative ">
      <div
        className="flex items-center justify-center cursor-pointer bg-white lg:w-[250px] w-full h-[270px] rounded-2xl"
        onMouseEnter={() => setOverlay(data?.id)}
        onMouseLeave={() => setOverlay(null)}
      >
        {data.image && (
          <Image
            src={data.image}
            width={220}
            height={220}
            alt="product image"
          />
        )}

        <Transition
          as="div"
          enter="transition-transform ease-out duration-300"
          enterFrom="translate-y-10"
          enterTo="translate-y-0"
          leave="transition-transform ease-in duration-200"
          leaveFrom="translate-y-0"
          leaveTo="translate-y-10"
          show={overlay === data.id}
          className="lg:w-[250px] w-full h-[270px] absolute bg-black/50 inset-0 rounded-2xl  z-30"
        >
          <div className="flex justify-center items-center gap-5 mt-[7rem]">
            <Link
              href="#"
              onClick={() => localStorage.clear()}
              className="w-10 h-10 flex justify-center items-center border border-gray-300 hover:border-none hover:bg-orange-500 text-white rounded-full"
            >
              <span>
                <FaHeart />
              </span>
            </Link>
            <Link
              href={`/product-details/${data.id}`}
              className="w-10 h-10 flex justify-center items-center border border-gray-300 hover:border-none hover:bg-orange-500 text-white rounded-full"
            >
              <FaEye />
            </Link>
          </div>
        </Transition>
      </div>
      {data.isPopular && (
        <div
          className={`absolute bg-orange-500 ${
            pathname.includes("/products")
              ? " lg:right-[2.75rem]"
              : "lg:right-[3.2rem]"
          } right-0 rounded-tr-2xl rounded-bl-2xl top-0 text-sm  text-white font-medium py-1 px-3`}
        >
          <span>{`Popular`.toUpperCase()}</span>
        </div>
      )}

      <div className="flex justify-between items-center  lg:w-[250px] w-full">
        <div className="flex flex-col items-start">
          <span className="text-lg font-semibold text-white">{data.name}</span>
          <span className="text-[16px] font-medium text-gray-500">
            {data.category.charAt(0).toUpperCase() + data.category.slice(1)}
          </span>
        </div>
        <span className="text-red-500">{`$${data.price}`}</span>
      </div>
    </div>
  );
}

export default ProductCard;
