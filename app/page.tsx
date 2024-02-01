"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  return (
    <>
   <h1 className='bg-black text-white justify-center p-5 text-5xl font-bold align text-center'> Sara's To-Do-List </h1>
  
   <form>

  <input className='text-2xl border-zinc-900 m-5 px-4 py-2' placeholder='Enter title here' value={title} onChange={(e)=>{
 settitle(e.target)
  }}/>
 
  <input className='text-2xl border-zinc-900 m-5 px-4 py-2' placeholder='Enter description here'/>
 
  <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'> Add task </button>
 
  </form>

    </>





 
  )
} 

export default page



