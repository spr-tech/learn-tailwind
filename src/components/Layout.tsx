import { Outlet } from "react-router-dom";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Layout = () => {
  return (
    <div className="p-5 bg-black text-white min-h-screen">
      <DesktopNav />
      <MobileNav />
      <div className="pt-15">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
