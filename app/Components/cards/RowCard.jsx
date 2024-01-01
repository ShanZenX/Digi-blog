import Image from "next/image";
import React from "react";

export default function RowCard(props) {
  return (
    <div className="w-[78%] flex flex-wrap md:h-[316px] mb-20 mt-10 bg-neutral-100 md:p-2">
      <div className="md:w-6/12">
        <Image
          src={props.img}
          width={200}
          height={200}
          alt={props.title}
          className="objet-cover w-full h-[300px]"
        ></Image>
      </div>
      <div className="md:w-6/12 md:px-5 p-3 flex flex-col justify-evenly md:h-[316px]">
        {/* <p className="font-medium text-xl">{props.category}</p> */}
        <p className="font-semibold text-3xl">{props.title}</p>
        <p>{props.des}</p>
        <span className="text-gray-600">{props.date}</span>
      </div>
    </div>
  );
}
