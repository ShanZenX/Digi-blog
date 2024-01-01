// Footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/digi-blog-logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-wrap md:justify-between items-center md:h-[80px]  justify-center md:gap-0 gap-5  ">
        <div className="flex md:w-3/12 items-center justify-center">
          <Image
            src={logo}
            alt="DIGIBLLOG Logo"
            className=" object-cover"
            width={200}
            height={200}
          ></Image>
        </div>
        <div className="flex md:w-6/12 items-center justify-center gap-4">
          <Link href="#home" className="text-white no-underline">
            Home
          </Link>
          <Link href="#about" className="text-white no-underline">
            About Us
          </Link>
          <Link href="#blog" className="text-white no-underline">
            Blog
          </Link>
          <Link href="#contact" className="text-white no-underline">
            Contact Us
          </Link>
        </div>
        <div className="flex w-full md:w-3/12 items-center justify-center gap-3 ">
          <Link
            href="#"
            target="_blank"
            className="hover:text-gray-500 text-white "
          >
            <FaFacebook />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="hover:text-gray-500 text-white"
          >
            <FaTwitter />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="hover:text-gray-500 text-white"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
      <div className="mt-4 border-t border-gray-700 text-center h-[40px]">
        <p className="text-sm mt-4">
          &copy; 2024 DIGIBLLOG. All rights reserved. | Designed by Shanmugaraj
        </p>
      </div>
    </footer>
  );
};

export default Footer;
