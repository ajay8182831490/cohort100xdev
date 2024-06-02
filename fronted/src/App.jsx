import { useEffect, useState } from 'react'

import CreateTodo from './componets/createtodo'
import Todo from './componets/todo'




function App() {

  const [todo,settodo]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:1000/todo').then(async(res)=>{
          const value=await res.json();
        

          settodo(value);

          
    })
},[])

  return (
    <>
   <CreateTodo   todo={todo} setTodo ={settodo}></CreateTodo>
    <Todo todo={todo} settodo={settodo}></Todo>
      
    </>
  )
}

export default App
