"use client";
import React, { Suspense, useContext, useEffect, useState } from "react";
import RowCard from "../Components/cards/RowCard";
import Heading from "../Components/mini-components/Heading";
import rowData from "../data/blogContent.json";
import Blog from "../Components/cards/Blog";
import FilterButton from "../Components/mini-components/FilterButton";
import { BlogContext } from "../context/BlogContext";
import Loading from "./Loading";

export default function Page() {

  const blog = useContext(BlogContext)
 
 
  return (
    <Suspense fallback={<Loading/>} >
      {blog && (
        <div className="w-full flex flex-col justify-center items-center md:p-10 p-5 flex-wrap bg-[#d1ddf53b]">
          <Heading title={"Blog's"} />

          <div className="flex flex-wrap justify-between md:w-[95%] w-full  items-center   pb-0">
            <FilterButton data={blog}  />
            {blog.length ? (
              blog.map((item) => (
                <Blog
                  href={"blog/blogPage"}
                  key={item.id}
                  img={item.image_url}
                  title={item.little_title}
                  des={item.description}
                  date={item.date}
                  to={"blog/blogPage"}
                  cat={item.category}

                  
                />
              ))
            ) : (
              <h1>No Blogs</h1>
            )}
          </div>
        </div>
      )}
    </Suspense>
  );
}
