"use client";
import Footer from "@/ui-components/Footer";
import Header from "@/ui-components/Header";
import React, { useEffect, useState } from "react";
import Preloader from "../components/preloader";
import Image from "next/image";

function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloader = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(preloader);
  }, [loading]);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen ">
          <Image
            src={"/shop-logo.png"}
            width={100}
            height={100}
            alt="image"
            className="animate-ping"
          />
        </div>
      ) : (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
}

export default Layout;
