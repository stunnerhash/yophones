import type { Metadata } from "next";
import { Inter, Lilita_One} from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { Providers } from "./providers";
import Head from "next/head";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const lilita = Lilita_One({subsets:["latin"], weight:'400'})

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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <body className={inter.className}>
        <Providers>
          <Header/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
