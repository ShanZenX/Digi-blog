"use client";
import React from "react";
import RowCard from "../cards/RowCard";
import Heading from "../Heading";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function RecentBlogs() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mt-16 mb-16 pb-10 ">
      <Heading title={"Recent Blog's"} />
      <Carousel
        interval={2000}
        data-bs-theme="dark"
        className="text-black"
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <div className="!flex !justify-center !md:w-full">
            <RowCard
              w={"w-[78%]"}
              category={"Gaming"}
              img="https://img.freepik.com/free-vector/hand-drawn-collage-design_23-2149543516.jpg?w=1800&t=st=1704117689~exp=1704118289~hmac=0a705010ddebae55ffecf9e6e512879446cbec702b9e0b5d09d8f23fad362df7"
              title={"How to activate cheat in gta"}
              des={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, mollitia! Corporis neque cumque quae, repudiandae est illum modi eaque dolores obcaecati, quidem illo corrupti in consectetur dolores obcaecati, quidem illo corrupti in consectetur dolores obcaecati, quidem illo corrupti in consecteturdolores obcaecati, quidem illo corrupti in consectetur "
              }
              date={"24, Dec by Mohanraj"}
              href={"blog"}

            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="!flex !justify-center !md:w-full">
          <RowCard
              w={"w-[78%]"}
              category={"Gaming"}
              img="https://img.freepik.com/free-vector/hand-drawn-collage-design_23-2149543516.jpg?w=1800&t=st=1704117689~exp=1704118289~hmac=0a705010ddebae55ffecf9e6e512879446cbec702b9e0b5d09d8f23fad362df7"
              title={"How to activate cheat in gta"}
              des={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, mollitia! Corporis neque cumque quae, repudiandae est illum modi eaque dolores obcaecati, quidem illo corrupti in consectetur dolores obcaecati, quidem illo corrupti in consectetur dolores obcaecati, quidem illo corrupti in consecteturdolores obcaecati, quidem illo corrupti in consectetur "
              }
              date={"24, Dec by Mohanraj"}
              href={"blog"}

            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="!flex !justify-center !md:w-full">
          <RowCard
              w={"w-[78%]"}
              category={"Gaming"}
              img="https://img.freepik.com/free-vector/hand-drawn-collage-design_23-2149543516.jpg?w=1800&t=st=1704117689~exp=1704118289~hmac=0a705010ddebae55ffecf9e6e512879446cbec702b9e0b5d09d8f23fad362df7"
              title={"How to activate cheat in gta"}
              des={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, mollitia! Corporis neque cumque quae, repudiandae est illum modi eaque dolores obcaecati, quidem illo corrupti in consectetur dolores obcaecati, quidem illo corrupti in consectetur dolores obcaecati, quidem illo corrupti in consecteturdolores obcaecati, quidem illo corrupti in consectetur "
              }
              date={"24, Dec by Mohanraj"}
              href={"blog"}

            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

