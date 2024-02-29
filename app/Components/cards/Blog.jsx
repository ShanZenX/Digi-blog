"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google";

export default function Blog(props) {

    const DataSender =()=>{
      ReceiveData(item)
    }

  return (
    <div className="p-[10px] md:w-[26%] w-full  bg-[#212529] shadow-md hover:scale-[102.5%] duration-300">
      <img
        src={props.img}
        className="object-cover w-full h-[200px]"
        alt={props.title}
      ></img>
      <div className="mt-4 gap-2 flex flex-col text-white text-center p-2">
        <p className="text-3xl font-Poppins font-semibold">{props.title}</p>
        <p className=" font-Poppins font-light">{props.des}</p>
        <p className=" font-Poppins font-light">{props.date}</p>
        <Link href={props.to} className="text-white uppercase text-xs" onClick={()=>DataSender(item)}>
          Read more
        </Link>
      </div>
    </div>
  );
}
