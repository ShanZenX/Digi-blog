"use client"
import React, { useEffect, useState } from 'react'
import {db} from "../firebase"
import { collection, getDocs } from 'firebase/firestore'
import { BlogContext } from '../context/BlogContext'



async function fetchDataFromFirebase(){
  const querySnapshot = await getDocs(collection(db , "blogs"))
  const  data = [];
  querySnapshot.forEach((doc)=>{
  data.push({id : doc.id , ...doc.data()})
  })
  return data;

}

export default function layout({children}) {
const [blogData ,setBlogData]= useState()

useEffect(()=>
{
  async function fetchData(){
    const data = await fetchDataFromFirebase()
    setBlogData(data)
  }
  fetchData()
},[])

  return (
    <BlogContext.Provider value={blogData}>  {children}
    </BlogContext.Provider>
  )
}
