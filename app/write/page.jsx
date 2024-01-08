"use client"
import React, { useState } from 'react'

export default function page() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        category: "",
        date: "",
        additionalInfo: "", // Additional text field for paragraph
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the form submission logic here
        console.log("Form submitted:", formData);
        // Reset form data after submission
        setFormData({
          title: "",
          description: "",
          image: "",
          category: "",
          date: "",
          additionalInfo: "",
        });
      };
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10">
      <div className="mb-4">
        <label htmlFor="title" className="block text-lg font-semibold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-lg font-semibold mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-lg font-semibold mb-2">
          Image URL
        </label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-lg font-semibold mb-2">
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-lg font-semibold mb-2">
          Date
        </label>
        <input
          type="text"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="additionalInfo" className="block text-lg font-semibold mb-2">
          Additional Info
        </label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Submit
      </button>
    </form>
    </div>
  )
}
