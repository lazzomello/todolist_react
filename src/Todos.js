import React from 'react'
import TodoList from './TodoList'

const Todos = ({todos,handleDelete})=>{
 
  return (
   <div className="todos collection">
     <TodoList todos={ todos } handleDelete={ handleDelete }/>
   </div>
  ) 
}

export default Todos