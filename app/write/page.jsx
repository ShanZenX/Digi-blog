"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Raleway } from "next/font/google";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import Heading from "../Components/mini-components/Heading";
import { Form } from "react-bootstrap";

const fontRaleway = Raleway({
  weight: "600",
  style: "normal",
  subsets: ["latin"],
});

let DynamicJoditEditor;
DynamicJoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

// try {
/// } catch (error) {
//   console.error('Error while loading JoditEditor:', error);
//   DynamicJoditEditor = () => <div>Error loading editor</div>;
// }

export default function Page() {
  const [value, setValue] = useState("");

  const [blogData, setBlogData] = useState({
    little_title: "",
    title: "",
    description: "",
    image_url: "",
    category: "",
    date: "",
  });

  const handleSubmit = async (e) => {
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

  const handleChange = (content) => {
    console.log(content);
    setValue(content);
  };

  return (
    <div
      className={`flex flex-col  text-start justify-center md:mx-40 md:my-10 bg-white text-black ${fontRaleway.className}`}
    >
      <Heading title="Create post " />
      <Form>
        <span className="flex flex-wrap gap-2 justify-between">
          <div className="w-[49%]">
            <Form.Label className=" font-thin text-sm ">Title</Form.Label>

            <Form.Control type="text" placeholder="Name your blog" />
          </div>
          <div className="w-[49%]">
            <Form.Label>Little Title</Form.Label>
            <Form.Control type="text" placeholder="Name your blog" />
          </div>
        </span>
      </Form>
      <DynamicJoditEditor
        tabIndex={1}
        onBlur={(newContent) => setValue(newContent)}
        onChange={(newContent) => handleChange(newContent)}
      />
      <p>{value.toString()}</p>
    </div>
  );
}
