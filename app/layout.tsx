import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dr. Vijay's Dental Clinic | Expert Care with Precision",
  description: "Comprehensive Dental Care for a Healthier Smile. Dr. Vijay Amirtharaj, M.D.S. (Endodontist), Ph.D. 15+ years of experience in Adambakkam, Chennai.",
  icons: {
    icon: "/asset/logo1-removebg-preview.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
