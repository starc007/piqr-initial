import React from "react";
import Header from "@components/Header";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-0 relative">{children}</main>
      <Toaster
        toastOptions={{
          className: "!border-gray-300 border !shadow-2xl",
        }}
        position="top-right"
      />
    </>
  );
};

export default Layout;
