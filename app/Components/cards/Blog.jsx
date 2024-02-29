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
    // <div className="p-[10px] md:w-[32%] w-full  bg-[#212529] shadow-md hover:scale-[102.5%] duration-300">
    //   <img
    //     src={props.img}
    //     className="object-cover w-full h-[200px]"
    //     alt={props.title}
    //   ></img>
    //   <div className="mt-4 gap-2 flex flex-col text-white text-center p-2">
    //     <p className="text-3xl font-Poppins font-semibold">{props.title}</p>
    //     <p className=" font-Poppins font-light">{props.des}</p>
    //     <p className=" font-Poppins font-light">{props.date}</p>
    //     <Link href={props.to} className="text-white uppercase text-xs" onClick={()=>DataSender(item)}>
    //       Read more
    //     </Link>
    //   </div>
    // </div>
    <div className="w-[30%] bg-white p-3 rounded-lg">
       <Link href={props.to}  onClick={()=>DataSender(item)} className="text-black no-underline">
      <img src={props.img} className=" rounded-lg"></img>
      <div>
        <p>{props.title}</p>
        <p>{props.des}</p>
      </div>
      <div className="flex w-full">
        <div className="w-2/3"><Image src={"https://img.freepik.com/free-vector/hand-drawn-collage-design_23-2149543516.jpg?w=1480&t=st=1704101631~exp=1704102231~hmac=c9e24da137942da4ff5a42a1aa083f817f348c78e318a081118b4365a48f45e6"} width={25} height={25} className="w-12 h-12 rounded-lg" alt="profile picture"></Image> </div>
        <div className="w-1/3">{props.cat}</div>
      </div>
      </Link>

    </div>
  );
}
