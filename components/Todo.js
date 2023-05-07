import React from 'react'
import { cookies } from 'next/headers'
import { TodoItem } from './ServerComponent'
import { redirect, useRouter } from 'next/navigation'


const fetchTodo=async (token)=>{

    try {
      const res= await fetch("http://localhost:3000/api/allmytask",{cache:"no-cache",
      headers:{
        cookie:`token=${token}`,
      }
      
    
    })
    
      const data=await res.json()
      console.log('data',data)
    
    
      
      if(!data.sucess) return [];
      return data.todo
      
    } catch (error) {
      return []
      
    }
    }



const Todo = async() => {
    const token=cookies().get('token')?.value
    if(!token) return redirect('/login')
    const task= await fetchTodo(token)
  

  return (
    <div>

{ task?.map((key)=>(

<TodoItem key={key._id} title={key.title} description={key.description} id={key._id} completed={key.isCompleted}/>

   ))} 


    </div>
  )
}

export default Todo