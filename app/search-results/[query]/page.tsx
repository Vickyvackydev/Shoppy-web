"use client";
import { useGetLocalStorageData } from "@/hooks";
import ProductCard from "@/shared/components/product-card";
import { ProductDataProps } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function SearchResults() {
  const pathname = usePathname();
  const query = pathname.split("/").pop();
  const { data: products } = useGetLocalStorageData();
  const [results, setResults] = useState<ProductDataProps[]>([]);

  useEffect(() => {
    if (query) {
      const filteredResults = products.filter((product: ProductDataProps) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    }
  }, [products, query]);

  return (
    <main className="lg:px-20 px-5 mt-10">
      <span className="text-white font-extrabold lg:text-[42px] text-2xl">
        Showing Results for {`"${query}"`}
      </span>
      <div className="mt-7">
        {results.length > 0 ? (
          <div className="grid lg:grid-cols-4 grid-cols-1 w-full gap-y-5">
            {results.map((data: ProductDataProps) => (
              <ProductCard key={data.id} data={data} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center text-gray-300 text-3xl">
            Result not Found
          </div>
        )}
      </div>
    </main>
  );
}

export default SearchResults;
