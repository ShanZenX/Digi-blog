"use client";

import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Heading from "../Components/mini-components/Heading";
import { Button } from "react-bootstrap";
import { Raleway } from "next/font/google";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


const fontRaleway = Raleway({
  weight: "600",
  style: "normal",
  subsets: ["latin"],
}); 


export default function Page() {

  const [value, setValue] = useState("");



  const [blogData, setBlogData] = useState({
    little_title: "",
    title: "",
    description: "",
    image_url: "",
    category: "",
    date: "",
    additional_info: "",
    additional_info_2: "",
  });

  // add form data to firebase

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(blogData);
    if (blogData.category !== "") {
      await addDoc(collection(db, "blogs"), {
        little_title: blogData.little_title,
        title: blogData.title,
        description: blogData.description,
        image_url: blogData.image_url,
        category: blogData.category,
        date: blogData.date,
        additional_info: blogData.additional_info,
        additional_info_2: blogData.additional_info_2,
      });
      alert("Your blog created successfully");
    } else {
      alert("There is an issue in the website please try again");
    }
  };

  const handelChange = (e) => {
    
    console.log(e.target.value);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center  md:mx-40 md:my-24 bg-white text-black ${fontRaleway.className} `}
    >
      <div className="pt-10 ">
        {" "}
        <Heading title={"Create a blog"} />
      </div>

      <div className="w-full p-10 flex flex-col">
      <ReactQuill theme="snow"  />

      </div>
    </div>
  );
}
