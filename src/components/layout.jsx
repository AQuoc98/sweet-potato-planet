"use client";

import { useEffect } from "react";
import Header from "./header";
import ScrollToTop from "./scroll-to-top";
import AOS from "aos";

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
      <ScrollToTop />
    </>
  );
};

export default Layout;
