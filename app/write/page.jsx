"use client"
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { MdOutlineCreate } from "react-icons/md";
import Link from "next/link";
import ReactQuill from 'react-quill'; // Import ReactQuill directly
import 'react-quill/dist/quill.snow.css';

// Importing the global CSS file
import "@/app/globals.css";

// Importing Google Fonts
import { Raleway } from "next/font/google";

const fontRaleway = Raleway({
  style: "normal",
  subsets: ["latin"],
});

export default function Page() {
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    category: "",
  });

  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
    console.log(value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(blogData);
    console.log(content);
    if (blogData.category !== "") {
      // Your logic here to save the blog data
      alert("Your blog created successfully");
    } else {
      alert("Please select a category");
    }
  };

  return (
    <div className={`flex flex-col text-start justify-center md:px-40 md:py-10 items-center flex-wrap text-black ${fontRaleway.className}`}>
      <Form className="pt-5 w-[75%] p-10" onSubmit={handleSubmit}>
        <span className="flex flex-row pb-2 gap-2 items-center">
          <p className="text-xl font-bold">Create post</p>
          <MdOutlineCreate fontSize={20} />
        </span>
        <span className="flex flex-col flex-wrap gap-3 justify-between">
          <Form.Control
            type="text"
            name="title"
            placeholder="Name your blog"
            className="border-black"
            style={{ boxShadow: "none" }}
            onChange={handleInputChange}
            value={blogData.title}
          />
          <Form.Select
            name="category"
            aria-label="Default select example"
            className="border-black text-gray-600"
            style={{ boxShadow: "none" }}
            onChange={handleInputChange}
            value={blogData.category}
          >
            <option value="">Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <ReactQuill theme="snow" value={content} onChange={handleChange} />
        </span>
        <span className="flex justify-between mt-3">
          <Button variant="danger bg-red-700">
            <Link href="/blog">Cancel</Link>
          </Button>
          <Button variant="success bg-green-800" type="submit">
            Post
          </Button>
        </span>
      </Form>
      <p>{blogData.title}</p>
    </div>
  );
}
