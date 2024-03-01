"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blog(props) {
  const DataSender = () => {
    ReceiveData(item);
  };




  const blogDescription = props.des.length > 175 ? props.des.substr(0,175) + "..." : props.des;
  return (
 
    <div className="md:w-[30%] sm:w-full h-[480px] bg-white p-3 rounded-lg shadow-md my-10 mx-2 ">
      <Link
        href={props.to}
        onClick={() => DataSender(item)}
        className="text-black no-underline flex flex-col justify-between h-[450px]"
      >
        <img src={props.img} className=" rounded-lg h-[220px] w-full object-cover"></img>
        <div>
          <p className="mb-0 text-2xl font-bold">{props.title}</p>
          <p className="mb-0">{blogDescription}</p>
        </div>
        <div className="flex w-full">
          <div className="w-2/3 flex">
            <Image
              src= "/image.png"
              width={25}
              height={25}
              className="w-12 h-12 rounded-lg"
              alt="profile picture"
              priority
            ></Image>
            <div>
              <p className="mb-0">User Name</p>
              <p className="mb-0">{props.date}</p>
            </div>
          </div>
          <div className="w-1/3 flex justify-end">{props.cat}</div>
        </div>
      </Link>
    </div>
  );
}
