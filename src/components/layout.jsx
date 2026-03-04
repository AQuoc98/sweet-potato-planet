import Header from "./header";
import ScrollToTop from "./scroll-to-top";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ScrollToTop />
    </>
  );
};

export default Layout;
