"use client";
import { useMediaQuery } from "@/hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function Logo() {
  const mobilescreen = useMediaQuery("(max-width: 640px)");
  const router = useRouter();
  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => router.push("/")}
    >
      <Image
        src={"/shop-logo.png"}
        width={mobilescreen ? 50 : 100}
        height={100}
        alt="logo image"
      />
      <span className="text-white lg:text-xl font-semibold text-xs">
        Shoppy
      </span>
    </div>
  );
}

export default Logo;
