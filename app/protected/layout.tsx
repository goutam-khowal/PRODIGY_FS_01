import React from "react";
import Navbar from "../Navbar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default layout;
