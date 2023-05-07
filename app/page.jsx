import React, {Suspense} from 'react'
import { toast } from 'react-hot-toast'
import { TodoItem } from '../components/ServerComponent'
import AddTodoform from './AddTodoform'
import { cookies } from 'next/headers'
import { redirect } from 'next/dist/server/api-utils'
import Todo from '../components/todo'




const page =  () => {

  return (
   
<div>

 <AddTodoform/>
 <Suspense fallback={<div>loading...</div>}>
<Todo/>
</Suspense>
  
 

</div>
  

  )
}

export default page