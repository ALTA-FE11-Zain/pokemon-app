import React, { FC } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="z-0 w-full h-full flex flex-col overflow-auto bg-gray-50">
      <Navbar />
      <div className="overflow-auto px-3 py-[4.5rem] md:px-10 md:py-20">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
