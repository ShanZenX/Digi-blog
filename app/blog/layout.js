// Layout.js
"use client"
import React, { useEffect, useState } from 'react'
import { BlogContext } from '../context/BlogContext'
import axios from 'axios'



export default function Layout({ children }) {
  useEffect(() => {
    axios.get("http://localhost:3004/blogData")
    .then(res => (setBlogData(res)))
    .catch((err)=>(console.log(err)))
      console.log(blogData)
  },[])
  
  const [blogData, setBlogData] = useState()



  return (
    <BlogContext.Provider value={blogData}>
      {children}
    </BlogContext.Provider>
  )
}
