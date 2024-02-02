import React from "react";
import Heading from "../Heading";
import {Raleway} from 'next/font/google';

const fontRaleway = Raleway({
  weight: "800",
  style: "normal",
  subsets: ["latin"],
});

export default function Catagory() {


  const cat = [
    { name: "Teach" },
    { name: "Food" },
    { name: "Game" },
    { name: "Trading" },
    { name: "Editing" },
    { name: "Video Grapy" },
    { name: "Productivity" },
  ];

  return (
    <div className="bg-gray-200 h-72 mt-10 w-[78%] flex items-center justify-evenly flex-col">
      <Heading title={"Blog Category's"} />
      <div className="gap-2 flex w-10/12 flex-wrap items-center justify-center">
        {" "}
        {cat.map((category, index) => (
          <span
            className={`${fontRaleway.className} font-light font-Poppins rounded-lg bg-black text-white text-4xl m-2 p-2 $ `}
            key={index}
          >
            {category.name}
          </span>
        ))}
      </div>
    </div>
  );
}
