import Image from "next/image";
import React from "react";

function Preloader() {
  return (
    <div className="flex justify-center items-center h-screen bg-black/80 fixed inset-0">
      <Image
        src={"/shop-logo.png"}
        width={100}
        height={100}
        alt="image"
        className="animate-ping "
      />
    </div>
  );
}

export default Preloader;
