"use client";
import { categories, prices } from "@/constants";
import React, { useEffect, useState } from "react";
import { FaCheck, FaFilter } from "react-icons/fa";
import { useGetFireStoreData, useMediaQuery } from "@/hooks";
import ProductCard from "@/shared/components/product-card";
import { ProductDataProps } from "@/types";
import { RiNumbersFill } from "react-icons/ri";
import Button from "@/shared/components/button";

import { Transition } from "@headlessui/react";
import { useAppQuery } from "@/context/useAppQuery";

function Products() {
  const { data: products, loading } = useGetFireStoreData("products");
  const { modal } = useAppQuery();
  const [filteredProducts, setFilteredproducts] =
    useState<ProductDataProps[]>(products);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrices, setselectedPrices] = useState<number[][]>([]);
  const [showFilterBox, setShowFilterBox] = useState(false);
  const mobileScreen = useMediaQuery("(max-width: 640px)");

  useEffect(() => {
    if (!loading && products.length > 0) {
      setFilteredproducts(products);
    }
  }, [loading, products]);

  const handleSelectedCategories = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((_category) => _category !== category)
        : [...prevCategories, category]
    );
  };

  const handleSelectedPrices = (price: number[]) => {
    setselectedPrices((prevSelectedPrice) =>
      prevSelectedPrice.some(
        (_price) => _price[0] === price[0] && _price[1] === price[1]
      )
        ? prevSelectedPrice.filter(
            (p) => p[0] !== price[0] || p[1] !== price[1]
          )
        : [...prevSelectedPrice, price]
    );
  };

  const handleFilter = () => {
    console.log("selected filters", selectedCategories, selectedPrices);

    const filtered = products.filter((product: ProductDataProps) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      const priceMatch =
        selectedPrices.length === 0 ||
        selectedPrices.some(
          (range) => product.price >= range[0] && product.price <= range[1]
        );

      return categoryMatch && priceMatch;
    });
    setFilteredproducts(filtered);
    if (mobileScreen) {
      setShowFilterBox(false);
    } else {
      setShowFilterBox(true);
    }
  };

  useEffect(() => {
    if (mobileScreen) {
      setShowFilterBox(false);
    }
    {
      setShowFilterBox(true);
    }
  }, [mobileScreen]);
  return (
    <main className="lg:px-20 px-5 mt-10">
      <span className="text-white lg:text-3xl text-xl font-semibold">
        View All Products Here
      </span>
      <div className="flex items-start lg:gap-x-7 gap-x-0 mt-6">
        <button
          className="fixed lg:hidden z-10  flex justify-center items-center text-white bg-orange-500 w-8 h-8 rounded-full"
          type="button"
          onClick={() => setShowFilterBox(true)}
        >
          <span>
            <FaFilter />
          </span>
        </button>
        <div>
          {mobileScreen && showFilterBox ? (
            <div
              className="fixed bg-black/80 h-full w-full inset-0 z-30"
              onClick={() => setShowFilterBox(false)}
            />
          ) : null}
          <Transition
            show={showFilterBox}
            as={"div"}
            enter="transition-transform ease-out duration-300"
            enterFrom="-translate-x-full"
            enterTo="-translate-x-0"
            leave="transition-transform ease-in duration-200"
            leaveFrom="-translate-x-0"
            leaveTo="-translate-x-full"
            className={`${
              modal ? "hidden" : "flex"
            } bg-gray-700 lg:relative flex-col absolute z-50  p-5 shadow-lg w-[300px] lg:h-full h-[600px] rounded-xl mt-4`}
          >
            <div className="flex flex-col gap-y-3">
              <span className="text-lg font-semibold text-orange-500">
                Categories
              </span>
              <div className="flex flex-col gap-3">
                {categories.map((data) => (
                  <div key={data} className="flex items-center gap-x-3">
                    <div
                      className={`w-4 h-4 rounded-sm cursor-pointer flex justify-center ${
                        selectedCategories.includes(data) && "bg-orange-500"
                      }  items-center border border-orange-500`}
                      onClick={() => handleSelectedCategories(data)}
                    >
                      <span className="text-xs text-gray-100">
                        {selectedCategories.includes(data) && <FaCheck />}
                      </span>
                    </div>
                    <span
                      className={` ${
                        selectedCategories.includes(data)
                          ? "text-orange-500 font-semibold"
                          : "text-gray-500 font-normal"
                      }`}
                    >
                      {data.charAt(0).toUpperCase() + data.slice(1)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <span className="text-lg font-semibold text-orange-500">
                Prices
              </span>
              <div className="flex flex-col gap-3 mt-3">
                {prices.map((range) => (
                  <div
                    key={`${range[0]} - ${range[1]}`}
                    className="flex items-center gap-x-3"
                  >
                    <div
                      className={`w-4 h-4 rounded-sm flex justify-center cursor-pointer ${
                        selectedPrices.includes(range) && "bg-orange-500"
                      }  border-orange-500 items-center border`}
                      onClick={() => handleSelectedPrices(range)}
                    >
                      <span className="text-xs text-gray-200">
                        {selectedPrices.includes(range) && <FaCheck />}
                      </span>
                    </div>
                    <div>
                      <span
                        className={`${
                          selectedPrices.includes(range)
                            ? "text-orange-500 font-semibold"
                            : "text-gray-500 font-medium"
                        }`}
                      >{`$${range[0]} - $${range[1]}`}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Button
              text="Filter "
              handleClick={handleFilter}
              btnStyles="mt-5 bg-orange-500 hover:bg-orange-300"
              type="button"
            />
          </Transition>
        </div>
        <div className="w-full">
          {filteredProducts.length > 0 ? (
            <div className="grid lg:grid-cols-3 grid-cols-1 w-full gap-y-5 mt-4">
              {filteredProducts.map((data: ProductDataProps) => (
                <ProductCard key={data.id} data={data} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center lg:text-3xl text-xl lg:mt-[6rem] mt-0 lg:ml-[10rem] ml-0 text-gray-500 font-semibold">
              <span className="text-center">
                No products match the selected filters!
              </span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Products;
