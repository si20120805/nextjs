"use client"

import Link from "next/link"
import { redirect, useRouter } from 'next/navigation'
import { useState,createContext, useContext, useEffect } from "react"
import { toast, Toaster } from "react-hot-toast"

 export const pContext=createContext({})

export const Provider=({children})=>{
    const [user,setUser]=useState({})

    useEffect(()=>{

        fetch("/api/auth/me").then((res)=>res.json()).then(data=>{
            if(data.sucess) return setUser(data.user)
        })
    },[])

return (

<pContext.Provider value={{user,setUser}}>
  

{children}
<Toaster/>

</pContext.Provider>




)}



export const LButton=()=>{


    const {user,setUser}=useContext(pContext)

    const handler=async()=>{
try {
    console.log('entering')
   const res=await  fetch('/api/auth/logout')
     const data= await res.json()
    if(data.sucess) return  toast.success(data.msg)
    setUser({});
  

    
} catch (error) {
    return toast.error(data.msg)
  
    
}
        
    }

    console.log(user._id)

    return user._id ?(<div>
        ( <button onClick={handler}>Logout</button>)
        
        </div>):<Link href={'/login'}>Login</Link> 
}



export const TodoButton=({id,completed})=>{
    const router=useRouter()

    const UpdateTodo=async(id)=>{
        try {
         
         const  res= await fetch(`/api/task/${id}`,{
             method:"PUT",
         })
         const data= await  res.json()

         console.log(data.success)
         if(!data.sucess) return toast.error(data.msg)
         toast.success(data.msg)
        router.refresh()
     
     
     
        } catch (error) {
         return toast.error(error)
         
        }
     
         }
     

    const DeleteTodo=async(id)=>{
   try {
    
    const  res= await fetch(`/api/task/${id}`,{
        method:"DELETE",
    })
    const data= await  res.json()
    console.log(data.success)
    if(!data.sucess) return toast.error(data.msg)
    toast.success(data.msg)
   router.refresh()



   } catch (error) {
    return toast.error(error)
    
   }

    }


    return(
        <div>
        <input type='checkbox' onChange={()=>{UpdateTodo(id)}} checked={completed}/>
        <button onClick={()=>{DeleteTodo(id)}}>Delete</button>
        
        
        </div>
    )
}