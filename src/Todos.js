import React from 'react'
import TodoList from './TodoList'

const Todos = ({todos})=>{
  return (

   <div className="todos collection">
     <TodoList todos={todos}/>
   </div>
   
  ) 
   
}

export default Todos