import { ProductDataProps } from "@/types";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const PRODUCT_KEY = "products";

const isProduction = process.env.NODE_ENV === "production";
const serverUrl = isProduction
  ? process.env.NEXT_PUBLIC_SERVER_URL
  : "http://localhost:3000";

const uploadImage = async (formData: FormData) => {
  try {
    const response = await fetch(`${serverUrl}/api/upload`, {
      method: "POST",
      body: formData, // Send the FormData directly
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to upload image");
    }

    return result.secure_url; // Assuming Cloudinary returns the image URL in `secure_url`
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

const getProducts = () => {
  if (typeof window !== "undefined") {
    const products = localStorage.getItem(PRODUCT_KEY);
    return products ? JSON.parse(products) : [];
  }
  return [];
};

const saveProducts = (products: ProductDataProps[]) => {
  localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
  getProducts();
};

const addProduct = (product: ProductDataProps) => {
  const newProduct = { ...product, id: uuidv4() };
  const products = getProducts();
  products.push(newProduct);
  saveProducts(products);
  getProducts();
};

const updateProduct = (productId: string, updatedProduct: ProductDataProps) => {
  const products = getProducts();
  const singleProductIndex = products.findIndex(
    (product: ProductDataProps) => product.id === productId
  );
  if (singleProductIndex !== -1) {
    products[singleProductIndex] = updatedProduct;
    saveProducts(products);
  }
};

const deleteProduct = (productId: number | string) => {
  const products = getProducts();
  const remainingProducts = products.filter(
    (product: ProductDataProps) => product.id !== productId
  );
  saveProducts(remainingProducts);
};

export { deleteProduct, addProduct, updateProduct, getProducts, uploadImage };
