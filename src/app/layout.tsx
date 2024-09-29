import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import SideCart from "@/components/common/SideCart";
import CartContext from "@/context/CartContext";
import Footer from "@/components/common/Footer";
import StateProvider from "@/state/StateProvider";
import ReactQueryProvider from "../../utils/Providers/ReactQueryProvider";
// import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Selecta Beef",
  description: "Premium Quality Meats, Viands et charcuteries de prestige",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href="/logo.png" />
      </Head> */}
      <body className={inter.className}>
        <div className="bg-gray-100">
          <ReactQueryProvider>
            <StateProvider>
              <CartContext >
                <div className="">
                  <div className="">
                    {children}
                    <Footer />
                  </div>
                </div>
                <SideCart />
              </CartContext>
            </StateProvider>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
