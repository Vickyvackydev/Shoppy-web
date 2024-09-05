"use client";
import { useGetFireStoreData } from "@/hooks";
import ProductCard from "@/shared/components/product-card";
import { ProductDataProps } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function SearchResults() {
  const { data: favorites } = useGetFireStoreData("favorites");

  return (
    <main className="lg:px-20 px-5 mt-10">
      <span className="text-white font-extrabold lg:text-[42px] text-2xl">
        Your Favorite Items here!!
      </span>
      <div className="mt-7">
        {favorites.length > 0 ? (
          <div className="grid lg:grid-cols-4 grid-cols-1 w-full gap-y-5">
            {favorites.map((data: ProductDataProps) => (
              <ProductCard key={data.id} data={data} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center text-gray-300 text-3xl">
            No item available
          </div>
        )}
      </div>
    </main>
  );
}

export default SearchResults;
