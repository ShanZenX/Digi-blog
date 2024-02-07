"use client";
import React, { useEffect, useState } from "react";
import RowCard from "../Components/cards/RowCard";
import Heading from "../Components/mini-components/Heading";
import rowData from "../data/blogContent.json";
import Blog from "../Components/cards/Blog";
import FilterButton from "../Components/mini-components/FilterButton";

export default function Page() {
  const [blog, setBlog] = useState();

  useEffect(() => {
    setBlog(rowData);
  }, []);

  return (
    <>
      {blog && (
        <div className="w-full flex flex-col justify-center items-center md:p-10 p-5 flex-wrap">
          <Heading title={"Blog's"} />

          <div className="flex flex-wrap justify-evenly w-full gap-y-20 items-center pt-5">
            <FilterButton data={blog} />
            {blog.length > 0 ? (
              blog.map((item) => (
                <Blog
                  href={"blog/blogPage"}
                  key={item.id}
                  img={item.image_url}
                  title={item.little_title}
                  des={item.description}
                  date={item.date}
                  to={"blog/blogPage"}
                />
              ))
            ) : (
              <h1>No Blogs</h1>
            )}
          </div>
        </div>
      )}
    </>
  );
}
