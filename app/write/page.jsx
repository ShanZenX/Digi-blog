"use client";

import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Heading from "../Components/mini-components/Heading";
import { Button } from "react-bootstrap";
import { Raleway } from "next/font/google";
import { useState } from "react";
import {db} from  "../firebase"
import { collection, addDoc } from "firebase/firestore"; 

const fontRaleway = Raleway({
  weight: "600",
  style: "normal",
  subsets: ["latin"],
});


export default function Page() {

useEffect((()=>{
// const q = 
}))

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

  const handelSubmit = async(e) => {

    e.preventDefault();
    console.log(blogData);
    if(blogData.category !== "" ){
      await addDoc(collection(db, "blogs"), {
        little_title: blogData.little_title,
        title: blogData.title,
        description: blogData.description,
        image_url: blogData.image_url,
        category: blogData.category,
        date: blogData.date,
        additional_info: blogData.additional_info,
        additional_info_2: blogData.additional_info_2,
      }
      );
      alert("Your blog created successfully")

    } else{
      alert("There is an issue in the website please try again")
    }
    

  };

  const handelChange = (e) => {
    const {name , value} = e.target
    setBlogData((prevData) => ({
      ...prevData, [name]:value 
    }));
    console.log(e.target.value)
  };

  return (
    <div
      className={`flex flex-col items-center justify-center mx-40 my-24 bg-[#212529] text-white ${fontRaleway.className} `}
    >
      <div className="pt-10 ">
        {" "}
        <Heading title={"Create a blog"} />
      </div>

      <div className="w-full p-10 flex flex-col">
        <Form className="flex flex-col" onSubmit={handelSubmit}>
          <span className="flex gap-7 mb-3">
            <span className="w-1/2">
              {" "}
              <Form.Label to="Title">Title</Form.Label>
              <Form.Control
                type="text"
                value={blogData.title}
                name="title"
                onChange={handelChange}
                placeholder="A day in my life of office"

                className="font-thin border-black focus:!shadow-lg"
                required
              />
            </span>
            <span className="w-1/2">
              {" "}
              <Form.Label to="SmallTitle">Small title</Form.Label>
              <Form.Control
                type="text"
                value={blogData.little_title}
                name="little_title"
                onChange={handelChange}
                placeholder="Daily blog"
                className="font-thin border-black focus:!shadow-lg"
                required

              />
            </span>
          </span>
          <span className="mb-3 flex flex-col">
            <Form.Label to="description">Description</Form.Label>
            <Form.Control
          type="text"
              rows={5}
              value={blogData.description}
              name="description"
              onChange={handelChange}
              placeholder="Description for your blog"
              className="font-thin border-black focus:!shadow-lg "
              required

            />
          </span>
          <span className="mb-3 flex flex-col">
            <Form.Label to="image">Image Url</Form.Label>
            <Form.Control
              type="text"
              value={blogData.image_url}
              name="image_url"
              onChange={handelChange}
              placeholder="Enter Url for image"
              className="font-thin border-black focus:!shadow-lg "
              required

            />
          </span>
          <span className="md:flex gap-7 mb-3">
            <span className="md:w-1/2">
              <Form.Label to="SmallTitle">Select category</Form.Label>
              <Form.Select
                value={blogData.category}
                name="category"
                onChange={handelChange}
                aria-label="Default select example"
                className="font-thin border-black focus:!shadow-lg"
                required

              >
                <option>Select category</option>
                <option value="Game">Game</option>
                <option value="Tech">Tech</option>
                <option value="Education">Education</option>
                <option value="Food">Food</option>
                <option value="Anime">Anime</option>
                <option value="Travel">Travel</option>
                <option value="Fitness">Fitness</option>
              </Form.Select>
            </span>
            <span className="md:w-1/2">
              {" "}
              <Form.Label to="SmallTitle">Select date</Form.Label>
              <Form.Control
                type="text"
                value={blogData.date}
                name="date"
                onChange={handelChange}
                placeholder="20,dec"
                className="font-thin border-black focus:!shadow-lg"
                required

              />
            </span>
          </span>
          <span className="mb-3 flex flex-col">
            <Form.Label to="description-2">
              Description paragraph 1
            </Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={4}
              value={blogData.additional_info}
              name="additional_info"
              onChange={handelChange}
              placeholder="Description for your blog"
              className="font-thin border-black focus:!shadow-lg "
              required

            />
          </span>{" "}
          <span className="mb-3 flex flex-col">
            <Form.Label to="description-3">
              Description paragraph 2
            </Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={4}
              value={blogData.additional_info_2}
              name="additional_info_2"
              onChange={handelChange}
              placeholder="Description for your blog"
              className="font-thin border-black focus:!shadow-lg "
              required

            />
          </span>
          <span className="self-end ">
            <Button variant="danger" className="mr-4 mt-4">
              Cancel
            </Button>{" "}
            <Button variant="success" type="submit" className="mr-4 mt-4">
              Publish
            </Button>{" "}
          </span>
        </Form>
      </div>
    </div>
  );
}
