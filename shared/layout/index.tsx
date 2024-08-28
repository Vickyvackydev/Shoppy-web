import Footer from "@/ui-components/Footer";
import Header from "@/ui-components/Header";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
