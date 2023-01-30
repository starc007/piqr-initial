import React from "react";
import Header from "@components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto">{children}</main>
    </>
  );
};

export default Layout;
