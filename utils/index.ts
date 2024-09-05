import { db } from "@/firebase/firebase.config";
import { FavoriteDataProps, ProductDataProps } from "@/types";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";

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

// const getProducts = () => {
//   if (typeof window !== "undefined") {
//     const products = window.localStorage.getItem(PRODUCT_KEY);
//     return products ? JSON.parse(products) : [];
//   }
//   return [];
// };

// const saveProducts = (products: ProductDataProps[]) => {
//   window.localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
//   getProducts();
// };

// const addProduct = (product: ProductDataProps) => {
//   const newProduct = { ...product, id: uuidv4() };
//   const products = getProducts();
//   products.push(newProduct);
//   saveProducts(products);
//   getProducts();
// };

// const updateProduct = (productId: string, updatedProduct: ProductDataProps) => {
//   const products = getProducts();
//   const singleProductIndex = products.findIndex(
//     (product: ProductDataProps) => product.id === productId
//   );
//   if (singleProductIndex !== -1) {
//     products[singleProductIndex] = updatedProduct;
//     saveProducts(products);
//   }
// };

// const deleteProduct = (productId: number | string) => {
//   const products = getProducts();
//   const remainingProducts = products.filter(
//     (product: ProductDataProps) => product.id !== productId
//   );
//   saveProducts(remainingProducts);
// };
// const reloadBrowser = () => {
//   if (typeof window !== "undefined") {
//     window.location.reload();
//   }
// };

const addToFavorites = async (data: FavoriteDataProps) => {
  const favoriteCollectionRef = collection(db, "favorites");
  await addDoc(favoriteCollectionRef, {
    name: data?.name,
    category: data?.category,
    image: data?.image,
    price: data?.price,
    isPopular: data?.isPopular,
  });
};
const deleteFavorites = async (id: string) => {
  await deleteDoc(doc(db, "favorites", id));
};
export { uploadImage, addToFavorites, deleteFavorites };
