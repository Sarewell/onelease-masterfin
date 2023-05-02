import React from "react";
import Navigation from "../navbar/Navigation";
import FooterPart from "../footer/FooterPart";

export default function Layouts({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <FooterPart />
    </div>
  );
}
