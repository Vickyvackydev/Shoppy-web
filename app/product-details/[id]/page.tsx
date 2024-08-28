"use client";
import { useAppQuery } from "@/context/useAppQuery";
import { useGetLocalStorageData, useMediaQuery } from "@/hooks";
import Button from "@/shared/components/button";
import Logo from "@/shared/components/logo";
import { ProductDataProps } from "@/types";
import { deleteProduct, getProducts } from "@/utils";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaImage } from "react-icons/fa";

function ProductView() {
  const router = useRouter();
  const mobilescreen = useMediaQuery("(max-width: 640px)");
  const { setModal, setModalState, setSelectedData } = useAppQuery();
  const { data: product } = useGetLocalStorageData();
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const getProductById: any = product.find(
    (productId: ProductDataProps) => productId.id === id
  );

  const handleDeleteProduct = (id: string) => {
    deleteProduct(id);
    getProducts();
    router.push("/");
  };
  return (
    <main className="flex items-center justify-center  lg:flex-row flex-col">
      <div className="flex gap-4 flex-col lg:w-[70vw] w-[335px] lg:h-[400px] h-full bg-gray-800 shadow-lg rounded-xl p-7">
        <span className="text-gray-400 font-semibold lg:text-xl text-[16px]">
          Product Details
        </span>
        <div className="flex items-start lg:flex-row flex-col gap-4">
          <div className="lg:w-[300px] w-full h-[300px] bg-gray-700 shadow-lg border-orange-500 rounded-xl flex items-center justify-center">
            {getProductById?.image && (
              <Image
                src={getProductById?.image}
                alt=""
                width={mobilescreen ? 200 : 300}
                height={300}
              />
            )}
          </div>
          <div className="flex flex-col items-start gap-3">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="title"
                className="text-sm font-medium text-gray-300"
              >
                Product name
              </label>
              <span className="text-xl font-semibold text-orange-500">
                {getProductById?.name}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="price"
                className="text-sm font-medium text-gray-300"
              >
                Price
              </label>
              <span className="text-xl font-semibold text-orange-500">
                ${getProductById?.price}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="category"
                className="text-sm font-medium text-gray-300"
              >
                Category
              </label>

              <span className="text-xl font-semibold text-orange-500">
                {getProductById?.category}
              </span>
            </div>

            <div className="flex justify-center lg:flex-row flex-col items-center mt-7 gap-2">
              <Button
                text="Update Product"
                btnStyles="w-fit"
                handleClick={() => {
                  setModal(true);
                  setModalState("edit");
                  setSelectedData(getProductById);
                }}
                type="button"
              />
              <Button
                text="Delete Product"
                btnStyles="w-fit bg-red-500 hover:bg-gray-700"
                handleClick={() => handleDeleteProduct(getProductById?.id)}
                type="button"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <Logo />
            <span className="lg:text-xl text-[16px] font-extrabold text-orange-500">
              Purchase this <br /> product and get 30% off
            </span>
            <Button
              text="Buy Now"
              btnStyles="w-fit bg-orange-500 hover:bg-gray-700 mt-3"
              handleClick={() => {}}
              type="button"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductView;
