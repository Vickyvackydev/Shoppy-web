"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Hero() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search-results/${query}`);
    }
  };
  return (
    <main className="flex justify-center items-center mt-10">
      <div className="flex items-center flex-col lg:gap-8 gap-5">
        <div className="flex flex-col lg:gap-7 gap-0 text-white font-extrabold lg:text-[64px] text-xl items-center">
          <span>Great Products.</span>
          <span>Even Cheaper Price</span>
        </div>
        <span className="text-center text-gray-500 lg:w-full w-[200px] lg:text-[16px] text-sm">
          We have small supplier with great quality only pay less than necessary
        </span>
        <form
          onSubmit={handleSearch}
          className="lg:w-[500px]  w-[300px] mt-1 bg-gray-700 rounded-3xl flex items-center px-3 py-1"
        >
          <input
            type="text"
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setQuery(e.target.value)
            }
            className="bg-transparent w-full placeholder:text-sm px-5 outline-none text-gray-200 text-sm "
            placeholder="search product by name, category or trend"
          />
          <button
            type="submit"
            className="lg:h-10 h-7 lg:w-11 w-8 rounded-full flex items-center justify-center text-white bg-orange-500 "
          >
            <span className="lg:text-[16px] text-sm">
              <FaSearch />
            </span>
          </button>
        </form>
      </div>
    </main>
  );
}

export default Hero;
