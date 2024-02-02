import Link from "next/link";
import React from "react";
import { Poppins, Raleway } from "next/font/google";

const fontPoppins = Poppins({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
const fontRaleway = Raleway({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

export default function MiddleBar() {
  return (
    <div className=" h-[200px] -mt-10 mb-20 flex flex-col items-center w-[78%] text-black bg-neutral-100 justify-center">
      <p
        className={`${fontPoppins.className} md:text-3xl text-shadow shadow-white`}
      >
        Welcome to our Community{" "}
      </p>
      <p className={`${fontRaleway.className}`}>
        Join With Digi Blog and Educate others{" "}
      </p>
      <Link
        href={"/"}
        className={`text-lg font-sans font-normal tracking-wide text-white no-underline bg-[#212529] rounded  px-2 py-1 ${fontRaleway.className}`}
      >
        write
      </Link>
    </div>
  );
}
