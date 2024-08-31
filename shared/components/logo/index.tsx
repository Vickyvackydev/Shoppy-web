"use client";
import { useMediaQuery } from "@/hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  const mobilescreen = useMediaQuery("(max-width: 640px)");
  // const router = useRouter();
  return (
    <Link href="/" className="flex items-center gap-2 cursor-pointer">
      <Image
        src={"/shop-logo.png"}
        width={mobilescreen ? 50 : 100}
        height={100}
        alt="logo image"
      />
      <span className="text-white lg:text-xl font-semibold text-xs">
        Shoppy
      </span>
    </Link>
  );
}

export default Logo;
