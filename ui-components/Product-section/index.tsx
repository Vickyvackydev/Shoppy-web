"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/shared/components/product-card";
// import { productdata } from "@/constants";
import { getProducts } from "@/utils";
import { ProductDataProps } from "@/types";
import { useGetLocalStorageData } from "@/hooks";
import Button from "@/shared/components/button";
import { useAppQuery } from "@/context/useAppQuery";

const PRODUCT_KEY = "products";
function ProductSection() {
  const { setModal, setSelectedData } = useAppQuery();
  const { data: products, loading } = useGetLocalStorageData();

  if (loading)
    return (
      <div className="text-gray-300 mt-10 font-semibold text-3xl flex justify-center items-center">
        Products Loading...
      </div>
    );
  return (
    <main className="lg:px-20 px-5 mt-[5rem] w-full flex flex-col items-center gap-10">
      <span className="text-white font-extrabold lg:text-[42px] text-lg">
        Celebrate This Summer
      </span>

      {products.length > 0 ? (
        <div className="grid lg:grid-cols-4 grid-cols-1 w-full gap-y-5">
          {products.map((data: ProductDataProps) => (
            <ProductCard data={data} key={data.id} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center text-xl text-gray-500">
          <span className="text-center">
            No Product Available at the Moment
          </span>
          <Button
            text="Add Product"
            btnStyles="mt-3"
            handleClick={() => {
              setModal(true);
              setSelectedData(null);
            }}
            type="button"
          />
        </div>
      )}
    </main>
  );
}

export default ProductSection;
