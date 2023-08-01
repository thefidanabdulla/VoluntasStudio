import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Index = ({ children }) => {
  return (
    <>
      <Navbar />
        <main className="relative">{children}</main>
      <Footer />
    </>
  );
};

export default Index;
