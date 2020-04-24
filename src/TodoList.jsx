import React from 'react'

const TodoList = ({todos})=>{
  
  const todoList = todos.length ? (
    todos.map( todo=>
       (
         <div class="collection-item" key={todo.id}>
           <span>{todo.content}</span>
         </div>
       )  
    )
  ):(
    <p className='center'>You Have no todo left</p>
  )
  return todoList;
}

export default TodoList