import React from "react";
import Heading from "../mini-components/Heading";
import {Raleway} from 'next/font/google';
import { Button } from "react-bootstrap";

const fontRaleway = Raleway({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function Category() {


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
    <div className="bg-slate-100 md:h-72 mt-10  !pt-10 text-center w-[78%] flex items-center justify-evenly  flex-col">
      <Heading title={"Blog Category's"} />
      <div className="gap-2 flex md:w-7/12 mb-5 mt-3 flex-wrap items-center justify-center">
        {" "}
        {cat.map((category, index) => (
               <Button variant="dark" className="mb-1 mr-2 bg-black" key={index} >            {category.name}
               </Button>

        ))}
      </div>
    </div>
  );
}
