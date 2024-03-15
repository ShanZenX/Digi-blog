"use client";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic
import "@/app/globals.css";
import { MdOutlineCreate } from "react-icons/md";
import "react-quill/dist/quill.snow.css";
import { Poppins, Raleway } from "next/font/google";
import Link from "next/link";

const fontRaleway = Raleway({
  style: "normal",
  subsets: ["latin"],
});

export default function Page() {

  const [blogData, setBlogData] = useState({
    title: "",

    description: "",
    
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(blogData);
    if (blogData.category !== "") {
      // Your Firestore logic here
      alert("Your blog created successfully");
    } else {
      alert("There is an issue in the website please try again");
    }
  };
  const handleChange = (content) => {
    setBlogData(prevState => ({
      ...prevState,
      description: content
    }));
    console.log(content)
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(name,value)

  };
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); // Dynamically import React Quill

  return (
    <div
      className={`flex flex-col text-start justify-center md:px-40 md:py-10 items-center flex-wrap text-black ${fontRaleway.className}`}
    >
      <Form className="pt-5 w-[75%] p-10">
        <span className="flex flex-row pb-2 gap-2 items-center">
          <p className="text-xl font-bold">Create post</p>
          <MdOutlineCreate fontSize={25} />
        </span>
        <span className="flex flex-col flex-wrap gap-3 justify-between ">
          <Form.Control
            type="text"
            placeholder="Name your blog"
            className="   border-black"
            style={{ boxShadow: "none" }}
            onChange={handleInputChange}
          />
          <Form.Select
            aria-label="Default select example"
            className="border-black text-gray-600"
            style={{ boxShadow: "none" }}
          >
            <option>Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <ReactQuill
            value={blogData.description}
            onChange={handleChange}
            className="w-full "
          />
        </span>
        <span className=" flex justify-between mt-3">
          <Button variant="danger bg-red-700"><Link href="/blog">Cancel</Link></Button>
          <Button variant="success bg-green-800">Post</Button>
        </span>
      </Form>

      <p>{blogData.description}</p>
    </div>
  );
}
