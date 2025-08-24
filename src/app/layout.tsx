import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const raleway = Raleway({
    subsets: ["latin"],
    weight: ["400", "500", "700"], // pick the weights you need
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tweak Professionals",
  description: "Unlock your organization's potential and achieve strategic objectives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          // ${geistSans.variable} antialiased
        className={` ${raleway.className}`}
      >
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
