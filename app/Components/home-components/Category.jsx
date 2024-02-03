import React from "react";
import Heading from "../Heading";
import {Raleway} from 'next/font/google';

const fontRaleway = Raleway({
  weight: "400",
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
    { name: "Finance" },
    { name: "Fitness" },
    { name: "Education" },
    { name: "Fashion" },

  ];

  return (
    <div className="bg-gray-200 md:h-72 mt-10  !pt-10 text-center w-[78%] flex items-center justify-evenly  flex-col">
      <Heading title={"Blog Category's"} />
      <div className="gap-2 flex md:w-8/12 mb-5 mt-3 flex-wrap items-center justify-center">
        {" "}
        {cat.map((category, index) => (
          <span
            className={`${fontRaleway.className} font-light text-gray-100 rounded-lg bg-black text-xl m-2 p-2 $ `}
            key={index}
          >
            {category.name}
          </span>
        ))}
      </div>
    </div>
  );
}
