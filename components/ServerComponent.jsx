import React from 'react'
import { TodoButton } from './Client'

 export const TodoItem = ({title,description,id,completed}) => {
  return (
 < div >
<h1>{title}</h1>
<h3>{description}</h3>
<div>
    <TodoButton id={[id]} completed={completed}/>
</div>


 </div >
  )
}

