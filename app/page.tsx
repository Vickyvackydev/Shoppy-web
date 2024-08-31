import AddedInfo from "@/ui-components/Addedinfo";
import Hero from "@/ui-components/Hero";
import ProductSlide from "@/ui-components/Productslide";
import Categories from "@/ui-components/Categories";
import React from "react";
// import ProductSection from "@/ui-components/Product-section";
import TestimonialSection from "@/ui-components/Testimonials-section";
import dynamic from "next/dynamic";

const ProductSection = dynamic(
  () => import("@/ui-components/Product-section"),
  { ssr: false }
);

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ProductSlide />
      <AddedInfo />
      <Categories />
      <ProductSection />
      <TestimonialSection />
    </div>
  );
};

export default Home;
