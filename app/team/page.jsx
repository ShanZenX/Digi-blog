import React from 'react'
import Heading from '../Components/Heading';

const teamData = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    image: "https://placekitten.com/200/200",
    para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est molestias voluptatem libero ." // Replace with actual image URL
  },{
    id: 2,
    name: "John Doe",
    role: "Frontend Developer",
    image: "https://placekitten.com/200/200", // Replace with actual image URL
    para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est molestias voluptatem libero ." // Replace with actual image URL

  },
  {
    id: 3,
    name: "John Doe",
    role: "Frontend Developer",
    image: "https://placekitten.com/200/200", // Replace with actual image URL
    para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est molestias voluptatem libero ." // Replace with actual image URL

  },
];
export default function page() {
  return (
    <div className='w-full md:h-[75vh] flex items-center justify-center md:mt-5 flex-col'>

<Heading title={"Our Team"}/>
    <div className="container flex flex-wrap item-center justify-evenly py-4 gap-5   w-full">

      {teamData.map((member) => (
        <div
          key={member.id}
          className="bg-black text-white p-4 shadow-md rounded-lg text-center w-4/5 md:w-3/12"
        >
          <img
            src={member.image}
            alt={member.name}
            className="rounded-full mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold">{member.name}</h3>
          <p className="text-gray-500">{member.role}</p>
          <p>{member.para}</p>
        </div>
      ))}
    </div>
    </div>
  )
}
