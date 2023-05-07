
"use client"
import React, { useState,useContext } from 'react'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { pContext } from '../../components/Client'
import {redirect} from  'next/navigation'

const page = () => {

  const [Email,setEmail]=useState("")
  const [Password,setPassword]=useState("")
  const [Name,setName]=useState("")
  const {user,setUser}=useContext(pContext)

  const registerForm=async(e)=>{

    e.preventDefault()
   try {

    const res= await fetch('/api/auth/register',{method:"POST",
    body: JSON.stringify({
      email: Email,
      password: Password,
      name:Name
    }),
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }})
    const data=await res.json()
    if(!data.sucess) return toast.error(data.msg)

    setUser(data)
    toast.success(data.msg)



    
   } catch (error) {
    return toast.error(data.msg)
    
   }
   if(user._id) {
    console.log('user id entering')
    return redirect("/")
  }


  }
  return (
   <>
    <form  onSubmit={registerForm}>
        <label htmlFor='email'>Email</label>
    <input id="email" value={Email} onChange={(e)=>{setEmail(e.target.value)}} type="email"/>
    <label htmlFor='name'>Name</label>
    <input id='name'value={Name}  onChange={(e)=>{setName(e.target.value)}} type='text'/>
    <label htmlFor='password'>Password</label>
    <input id='password' value={Password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
    <button  type='submit'>Submit</button>
   
</form>
 <Link href={'/login'}>Login</Link>
 </>
  )
}

export default page