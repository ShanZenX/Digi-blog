"use client"
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic
import "@/app/globals.css";
import { MdOutlineCreate } from "react-icons/md";

export default function Page() {
  const [value, setValue] = useState(""); // State to hold the content of React Quill editor

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
      // Your Firestore logic here
      alert("Your blog created successfully");
    } else {
      alert("There is an issue in the website please try again");
    }
  };

  const handleChange = (content) => {
    setValue(content); // Update the content in React Quill editor
  };

  const ReactQuill = dynamic(() => import('react-quill'), { ssr: false }); // Dynamically import React Quill

  return (
    <div className={`flex flex-col text-start justify-center md:mx-40 md:my-10 bg-white text-black`}>
      <span>
        <h1>Create post</h1>
        <MdOutlineCreate />
      </span>

      <Form className="pt-5">
        <span className="flex flex-wrap gap-2 justify-between pb-3">
          <div className="w-[49%]">
            <Form.Label className="font-thin text-sm">Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name your blog"
              className="focus:border-gray-200"
              style={{ borderBottom: "2px solid gray", boxShadow: "none" }}
            />
          </div>
          <div className="w-[49%] flex flex-col">
            <Form.Label className="font-thin text-sm">Date</Form.Label>
            <input
              type="date"
              className="border rounded p-[7px] text-gray-600 focus-visible:outline-none"
              style={{ boxShadow: "none", boxShadow: " 0px 2px 0px gray" }}
            />
          </div>
        </span>
      </Form>

      <p>Create your blog content below</p>

      <ReactQuill
        value={value}
        onChange={handleChange}
      />

      <p>{value}</p>
    </div>
  );
}
