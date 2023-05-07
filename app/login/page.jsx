"use client"

import React, { useContext, useState } from 'react'
import Link from 'next/link'
// import handler from '../../pages/api/allmytask'
import { pContext } from '../../components/Client'
import {redirect} from  'next/navigation'


import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-hot-toast'


const Login = () => {
  const [Email,setEmail]=useState("")
  const [Password,setPassword]=useState("")
  const {user,setUser}=useContext(pContext)
  


  const hand=async (e)=>{
    
    e.preventDefault()
    try {
     const res= await fetch('/api/auth/login',{
        method:"POST",
        body: JSON.stringify({
          email: Email,
          password: Password,
        }),
         headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        

         
      })
      console.log(res)
     const data= await res.json()
     console.log(data)
   
     
   if(!data.sucess){
  return toast.error(data.msg)
 
   }
    setUser(data.user)
     toast.success(data.msg)

  
   
      
    } catch (error) {
      return toast.error(error)
     
    }
  }
  if(user._id) {
    console.log('user id entering')
    return redirect("/")
  }

  return (
    <div>
<form  onSubmit={hand}>
  <label htmlFor='email'>Email</label>
    <input id='email' value={Email} onChange={(e)=>{setEmail(e.target.value)}} type="email"/>
    <label htmlFor='password'>Password</label>
    <input id='password' type="password" value={Password} onChange={(e)=>{setPassword(e.target.value)}}/>
    <button  type='submit'>Login Submit</button>
    
</form>
<Link href={'/register'}>Register</Link>
</div>
  )
}

export default Login