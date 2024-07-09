import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { Providers } from "./providers";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import LoadingBar from "@/components/loading-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yo Phones",
  description: "Your destination for comparing and switching services effortlessly, from energy providers to broadband plans and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header/>
          {children}
          <Footer/>
          <Toaster/>
        </Providers>
      </body>
    </html>
  );
}
