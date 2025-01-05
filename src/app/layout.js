import { Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layouts/main";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["200", "400", "500", "700"],
});

export const metadata = {
  title: "Sweet Potato Planet",
  description: "Generated by Ken",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://kit.fontawesome.com/4a9d18e4fd.js" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
