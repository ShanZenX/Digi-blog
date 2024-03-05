"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Raleway } from 'next/font/google';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const fontRaleway = Raleway({
  weight: '600',
  style: 'normal',
  subsets: ['latin'],
});

let DynamicJoditEditor;

try {
  DynamicJoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
} catch (error) {
  console.error('Error while loading JoditEditor:', error);
  DynamicJoditEditor = () => <div>Error loading editor</div>;
}

export default function Page() {
  const [value, setValue] = useState('');

  const [blogData, setBlogData] = useState({
    little_title: '',
    title: '',
    description: '',
    image_url: '',
    category: '',
    date: '',
    additional_info: '',
    additional_info_2: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(blogData);
    if (blogData.category !== '') {
      await addDoc(collection(db, 'blogs'), {
        little_title: blogData.little_title,
        title: blogData.title,
        description: blogData.description,
        image_url: blogData.image_url,
        category: blogData.category,
        date: blogData.date,
        additional_info: blogData.additional_info,
        additional_info_2: blogData.additional_info_2,
      });
      alert('Your blog created successfully');
    } else {
      alert('There is an issue in the website please try again');
    }
  };

  const handleChange = (content) => {
    console.log(content);
    setValue(content);
  };

  return (
    <div className={`flex flex-col items-center justify-center md:mx-40 md:my-24 bg-white text-black ${fontRaleway.className}`}>
      <DynamicJoditEditor
        tabIndex={1}
        onBlur={(newContent) => setValue(newContent)}
        onChange={(newContent) => handleChange(newContent)}
      />
      <p>{value}</p>
    </div>
  );
}
