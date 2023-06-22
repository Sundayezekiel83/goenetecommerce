import React from "react";
import Navbar from "./Navigation/Navbar";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      {" "}
      <Navbar />
      {children}{" "}
    </>
  );
};

export default Layout;
