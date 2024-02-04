import React from "react";
import { Poppins, Raleway } from "next/font/google";

const fontRaleway = Raleway({
  weight: "800",
  style: "normal",
  subsets: ["latin"],
});

export default function Heading(props) {
  return (
    <p className={`${fontRaleway.className} text-4xl font-extrabold`}>
      {props.title}
    </p>
  );
}
