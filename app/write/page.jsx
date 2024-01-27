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
    
  return (
    <div>
      <h1>write blogs</h1>
    </div>
  )
}
