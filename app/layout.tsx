import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Layout from "@/shared/layout";
import { AppContextProvider } from "@/context/useAppQuery";

export const metadata: Metadata = {
  title: "Shoppy",
  description:
    "Welcome to your number one shopping vendor, known for the best products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-primary-grey-200`}>
        <AppContextProvider>
          <Layout>
            <main>{children}</main>
          </Layout>
        </AppContextProvider>
      </body>
    </html>
  );
}
