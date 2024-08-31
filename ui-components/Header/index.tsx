"use client";
import { navlinks } from "@/constants";
import { useGetLocalStorageData, useMediaQuery } from "@/hooks";
import Button from "@/shared/components/button";
import Logo from "@/shared/components/logo";
import Modal from "@/shared/components/modal";
import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaCheck,
  FaImage,
  FaShoppingCart,
  FaSyncAlt,
  FaTimes,
} from "react-icons/fa";
import { addProduct, getProducts, updateProduct, uploadImage } from "@/utils";
import Image from "next/image";
import { useAppQuery } from "@/context/useAppQuery";
import { Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";
interface FormTypes {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string | null | File;
  isPopular: boolean;
}
function Header() {
  const {
    modal,
    setModal,
    setModalState,
    modalState,
    selectedData,
    setSelectedData,
  } = useAppQuery();

  const pathname = usePathname();
  const productId = pathname.split("/").pop();
  const [menu, setMenu] = useState(false);

  const mobilescreen = useMediaQuery("(max-width: 640px)");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isPopular, setIspopular] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [form, setForm] = useState<FormTypes>({
    id: selectedData?.id ?? "",
    name: selectedData?.name ?? "",
    category: selectedData?.category ?? "",
    price: selectedData?.price ?? 0,
    image: selectedData?.image ?? null,
    isPopular: selectedData?.isPopular ?? false,
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
      setForm({ ...form, image: file });
    }
  };

  const handleSubmit = async (e: React.FormEvent, id?: string) => {
    setIsSubmiting(true);
    e.preventDefault();
    try {
      if (!form.image) {
        console.error("No image uploaded!");
        return;
      }

      const formData = new FormData();

      formData.append("image", form.image);

      // Upload the image and get the URL
      const imageUrl = await uploadImage(formData);

      // Update the form with the image URL
      const updatedForm = { ...form, image: imageUrl, isPopular: isPopular };
      if (id) {
        updateProduct(id, updatedForm);
      } else {
        // Add the product
        addProduct(updatedForm);
      }
      getProducts();
    } catch (error) {
      throw error;
    } finally {
      setForm({
        id: "",
        name: "",
        category: "",
        price: 0,
        image: null,
        isPopular: false,
      });
      setPreview(null);
      setModal(false);
      setIsSubmiting(false);
    }
  };

  useEffect(() => {
    if (selectedData) {
      setForm({
        id: selectedData.id || "",
        name: selectedData.name || "",
        category: selectedData.category || "",
        price: selectedData.price || 0,
        image: selectedData.image || null,
        isPopular: selectedData.isPopular || false,
      });
      setPreview(selectedData.image || null); // Update the preview if there's an image
    }
  }, [selectedData]); // Run this effect whenever selectedData changes

  return (
    <>
      {mobilescreen ? (
        <header className="flex items-center justify-between w-full px-5 py-5">
          <Logo />
          <span className="text-white" onClick={() => setMenu(true)}>
            <FaBars />
          </span>

          <Transition
            as={"div"}
            enter="transition-transform ease-out duration-300"
            enterFrom="-translate-y-full"
            enterTo="-translate-y-0"
            leave="transition-transform ease-in duration-200"
            leaveFrom="-translate-y-0"
            leaveTo="-translate-y-full"
            className={
              "absolute bg-black/80 w-full h-full z-50 bottom-0 left-0"
            }
            show={menu}
          >
            <div className="relative">
              <span
                className="absolute text-white text-xl right-5 -top-[5rem]"
                onClick={() => setMenu(false)}
              >
                <FaTimes />
              </span>
              <ul className="flex items-center flex-col gap-6 text-gray-200 mt-28">
                {navlinks.map((links) => (
                  <li
                    key={links.id}
                    onClick={() => setMenu(false)}
                    className="hover:bg-orange-600 text-lg py-[6px] px-4 rounded-2xl cursor-pointer hover:text-gray-100 hover:font-medium"
                  >
                    {links.title}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 flex-col-reverse">
                <div className="flex items-center gap-2 mt-3">
                  <div
                    className="flex items-center justify-center  h-8 w-8 bg-orange-500 rounded-full  cursor-pointer"
                    onClick={() => getProducts()}
                  >
                    <span className="text-white">
                      <FaSyncAlt />
                    </span>
                  </div>
                  <span className="text-[16px] font-medium text-gray-200 ">
                    Reload page
                  </span>
                </div>
                <Button
                  text="Add Product"
                  handleClick={() => {
                    setModal(true);
                    setModalState("upload");
                    setSelectedData(null);
                    setMenu(false);
                  }}
                  btnStyles="mt-5 bg-orange-500 px-5 text-xl py-1"
                  type="button"
                />
              </div>
            </div>
          </Transition>
        </header>
      ) : (
        <header className="w-full py-3 my-4 px-10 flex justify-between items-center">
          <Logo />
          <ul className="flex items-center gap-6 text-gray-200">
            {navlinks.map((links) => (
              <li
                key={links.id}
                className="hover:bg-orange-600 py-[6px] px-4 rounded-2xl cursor-pointer hover:text-gray-100 hover:font-medium"
              >
                {links.title}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div
              className="flex items-center justify-center h-8 w-8 hover:bg-orange-500 rounded-full border-white border hover:border-none cursor-pointer"
              onClick={() => getProducts()}
            >
              <span className="text-white">
                <FaSyncAlt />
              </span>
            </div>
            <Button
              text="Add Product"
              handleClick={() => {
                setModal(true);
                setModalState("upload");
              }}
              btnStyles=""
              type="button"
            />
          </div>
        </header>
      )}
      <Modal isOpen={modal} isClose={() => setModal(false)}>
        <div className="flex gap-4 flex-col">
          <span className="text-gray-400 font-semibold text-xl">
            {modalState === "upload" ? "Add a new product" : "Update product"}
          </span>
          <div className="flex items-start gap-4 lg:flex-row flex-col">
            <div
              className="lg:w-[300px] w-full h-[300px] cursor-pointer border border-dashed rounded-xl flex items-center justify-center"
              // @ts-ignore
              onClick={() => document.querySelector(".image-file")?.click()}
            >
              {preview ? (
                <Image src={preview} alt="" width={300} height={300} />
              ) : (
                <div className="flex items-center justify-center flex-col">
                  <span className="text-gray-500 text-4xl">
                    <FaImage />
                  </span>
                  <span className="text-center text-orange-500">
                    Please select an image <br /> to upload
                  </span>
                  <span className="text-center text-orange-500 text-xs">
                    file type: png, jpg, etc.
                  </span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                className="sr-only image-file"
                onChange={handleImageChange}
              />
            </div>
            <form
              onSubmit={(e) => handleSubmit(e, productId)}
              className="flex flex-col items-start gap-3"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="title"
                  className="text-sm font-medium text-gray-400"
                >
                  Product name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Product name"
                  className="lg:w-[435px] w-[280px] text-gray-400 text-sm bg-transparent border-gray-700 border-2 py-3 px-3 rounded-2xl placeholder:text-sm outline-none focus:border-orange-400"
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-400"
                >
                  Price
                </label>
                <input
                  type="text"
                  value={form.price}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    // @ts-ignore
                    setForm({ ...form, price: e.target.value })
                  }
                  placeholder="Price"
                  className="lg:w-[435px] w-[280px] text-gray-400 text-sm bg-transparent border-gray-700 border-2 py-3 px-3 rounded-2xl placeholder:text-sm outline-none focus:border-orange-400"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="category"
                  className="text-sm font-medium text-gray-400"
                >
                  Category
                </label>
                <select
                  value={form.category}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setForm({ ...form, category: e.target.value })
                  }
                  className="lg:w-[435px] w-[280px] mt-2 text-gray-400 text-sm bg-transparent border-gray-700 border-2 py-3 px-3 rounded-2xl placeholder:text-sm outline-none focus:border-orange-400"
                >
                  <option value="">Select category</option>
                  <option value="fashion">Fashion</option>
                  <option value="gadgets">Gadgets</option>
                  <option value="food">Food</option>
                  <option value="travel">Travel</option>
                  <option value="office">Office</option>
                  <option value="transport">Transport</option>
                </select>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <div
                  className="w-6 h-6 flex cursor-pointer justify-center items-center border rounded-md"
                  onClick={() => {
                    setIspopular(!isPopular);
                  }}
                >
                  {isPopular && (
                    <span>
                      <FaCheck className="text-orange-500" />
                    </span>
                  )}
                </div>
                <span className="text-gray-400 text-sm font-medium">
                  Mark product as popular
                </span>
              </div>
              <div className="flex justify-center items-center mt-7">
                {modalState === "upload" ? (
                  <Button
                    text={`${isSubmiting ? "Uploading..." : "Upload Product"}`}
                    btnStyles="w-fit"
                    handleClick={() => {}}
                    type="submit"
                    disabled={isSubmiting}
                  />
                ) : (
                  modalState === "edit" && (
                    <Button
                      text={`${isSubmiting ? "Updating..." : "Update Product"}`}
                      btnStyles="w-fit"
                      handleClick={() => {}}
                      type="submit"
                      disabled={isSubmiting}
                    />
                  )
                )}
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Header;
