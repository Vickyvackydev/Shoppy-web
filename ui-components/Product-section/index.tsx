"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/shared/components/product-card";
import { ProductDataProps } from "@/types";
import { useGetFireStoreData, useMediaQuery, useOnlineStatus } from "@/hooks";
import Button from "@/shared/components/button";
import { useRouter } from "next/navigation";
import { FiWifiOff } from "react-icons/fi";

const PRODUCT_KEY = "products";
function ProductSection() {
  const online = useOnlineStatus();
  const mobilescreen = useMediaQuery("(max-width: 640px)");
  const [dots, setDots] = useState(3);
  const {
    data: products,
    loading,
    refetch: refreshProducts,
  } = useGetFireStoreData("products");
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots: any) => {
        if (prevDots === 3) {
          return 1;
        }
        return prevDots + 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  if (loading && online) {
    return (
      <div className="text-gray-300 mt-10 font-semibold gap-y-3 text-3xl flex flex-col justify-center items-center tracking-wide">
        <div className="lg:w-16 w-14 lg:h-16 h-14  rounded-full border-2 border-gray-700 border-l-orange-500 animate-spin mt-7" />
        <div>
          <span className="lg:text-[16px] text-sm">Loading Products</span>
          {Array(dots)
            .fill(".")
            .map((dot, i) => (
              <span key={i} className="animate-pulse">
                {dot}
              </span>
            ))}
        </div>
      </div>
    );
  } else if (!loading && !online) {
    return (
      <div className="flex justify-center items-center flex-col mt-10 gap-y-2">
        <FiWifiOff size={mobilescreen ? 40 : 80} color="#f97316" />
        <span className="text-center leading-tight text-gray-300">
          Opps!! An Error Occured. <br /> Check your internet connection
        </span>
      </div>
    );
  }

  return (
    <main className="lg:px-20 px-5 mt-[5rem] w-full flex flex-col items-center gap-10">
      <span className="text-white  font-extrabold lg:text-[42px] text-lg">
        Celebrate This Summer
      </span>

      {products.length > 0 ? (
        <div className="grid lg:grid-cols-4 grid-cols-1 w-full gap-y-5">
          {products.slice(0, 8).map((data: ProductDataProps) => (
            <ProductCard data={data} key={data?.id} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center text-xl text-gray-500 ">
          <span className="text-center">
            No Product Available at the Moment
          </span>
          <Button
            text="Reload product"
            btnStyles="mt-3"
            otherStyles="text-center"
            handleClick={() => refreshProducts()}
            type="button"
          />
        </div>
      )}
      {products.length > 0 && (
        <Button
          text="Go to product page"
          btnStyles="mt-3"
          handleClick={() => router.push("/products")}
          type="button"
        />
      )}
    </main>
  );
}

export default ProductSection;
