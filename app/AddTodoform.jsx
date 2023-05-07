"use client"

import { redirect, useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import { pContext } from '../components/Client'

const AddTodoform = () => {
  const [title,settitle]=useState("")
  const [task,settask]=useState("")
  const router =useRouter()
  const {user}=useContext(pContext)

  const subhandler=async(e)=>{
    e.preventDefault()
    try {

      const res =await fetch('/api/createtask',{
        method:"POST",
        body: JSON.stringify({
          description:task,
         title
        }),
         headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })

    const data= await res.json()
    console.log(data)

    if(!data.sucess) return toast.error(data.msg)

    toast.success(data.msg)
    router.refresh()
    settitle('')
    settask('')

    if(!user._id) return redirect('/login')

      
      
    } catch (error) {

      return toast.error(data.msg)
      
    }


  }
  
  return (
    <form onSubmit={subhandler} >
   <input type='text'value={title} onChange={(e)=>{settitle(e.target.value)}} placeholder='Task Title'/>
   <input type='text' value={task} onChange={(e)=>{settask(e.target.value)}} placeholder='Task Description'/>
     
     <button  type='submit '>Add Task</button>
  </form>
  )
}

export default AddTodoform