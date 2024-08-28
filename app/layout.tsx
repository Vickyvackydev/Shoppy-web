import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Layout from "@/shared/layout";
import { AppContextProvider } from "@/context/useAppQuery";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shoppy",
  description:
    "Welcome to your number shopping vendor, known for the best products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-primary-grey-200`}>
        <AppContextProvider>
          <Layout>
            <main>{children}</main>
          </Layout>
        </AppContextProvider>
      </body>
    </html>
  );
}
