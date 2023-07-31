import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Index = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Index;
