import React from "react";
import Blog from "../cards/Blog";
import Heading from "../mini-components/Heading";

export default function TopBlogs() {
  return (
    <div className="flex flex-col w-full justify-center items-center md:mt-0 mt-4">
      <Heading title="Top Blog's" />
      <div className="md:w-full flex flex-wrap justify-between p-10  md:gap-0">
        <Blog
          to={"blog/blogPage"}
          cat="Food"
          title="Sample heading"
          date="Just Now"

          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, libero, fugit beatae repudiandae debitis voluptatem nulla unde corrupti aspernatur numquam ad necessitatibus soluta aliquid maiores explicabo magnam similique quisquam."
          img="https://img.freepik.com/free-vector/hand-drawn-collage-design_23-2149543516.jpg?w=1480&t=st=1704101631~exp=1704102231~hmac=c9e24da137942da4ff5a42a1aa083f817f348c78e318a081118b4365a48f45e6"
        />
        <Blog
          to={"blog/blogPage"}
          title="Sample heading"
          cat="Education"
          date="Just Now"

          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, libero, fugit beatae repudiandae debitis voluptatem nulla unde corrupti aspernatur numquam ad necessitatibus soluta aliquid maiores explicabo magnam similique quisquam."
          img="https://img.freepik.com/free-vector/hand-drawn-collage-design_23-2149543516.jpg?w=1480&t=st=1704101631~exp=1704102231~hmac=c9e24da137942da4ff5a42a1aa083f817f348c78e318a081118b4365a48f45e6"
        />{" "}
        <Blog
          to={"blog/blogPage"}
          cat="Game"
          date="Just Now"
          title="Sample heading"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, libero, fugit beatae repudiandae debitis voluptatem nulla unde corrupti aspernatur numquam ad necessitatibus soluta aliquid maiores explicabo magnam similique quisquam."
          img="https://img.freepik.com/free-vector/hand-drawn-collage-design_23-2149543516.jpg?w=1480&t=st=1704101631~exp=1704102231~hmac=c9e24da137942da4ff5a42a1aa083f817f348c78e318a081118b4365a48f45e6"
        />
      </div>
    </div>
  );
}
