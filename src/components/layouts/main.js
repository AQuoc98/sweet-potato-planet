import { IS_MAINTENANCE } from "@/utils/constant";
import Navbar from "../navbar";
import Maintenance from "../maintenance";

const Layout = ({ children }) => {
  if (IS_MAINTENANCE) {
    return <Maintenance />;
  }
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
