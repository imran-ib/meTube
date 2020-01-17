import React from "react";
import Header from "../HeaderFooter/Header/Header";
import Footer from "../HeaderFooter/Footer/Footer";
function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
