import React from "react";
import Button from 'react-bootstrap/Button';


export default function FilterButton({ data }) {
  return (
    <div className="flex items-center flex-wrap justify-center">
      
      {data.map((val) => (
        <Button variant="dark" className="px-6 py-2 mx-2 my-2 !bg-white !text-black">{val.category}</Button>

      ))}
    </div>
  );
}
