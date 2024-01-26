import React from "react";
import RowCard from "../Components/cards/RowCard";
import Heading from "../Components/Heading";
import rowData from  "../data/blogContent.json"
export default function page() {
  return (<>

    <div className="w-full flex justify-center items-center  md:p-10 p-2 flex-wrap">
      <div className="flex flex-col w-[78%] items-center pt-10">
      <Heading title={"Blog's"} />
      {rowData.map(item => (
        <RowCard
        href={"blog/blogPage"}
          key={item.id}
          category={item.category}
          img={item.image_url}
          title={item.title}
          des={item.description}
          date={item.date}
        />
      ))}
      </div>
    </div></>
  );
}
