import React from 'react'

const TodoList = ({todos,handleDelete})=>{

  const todoList = todos.length ? (
    todos.map(todo=>
       (
         <div onClick = {()=>handleDelete(todo.id)} className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
         </div>
       )  
    )
  ):(
    <p className='center'>You Have no todo's left</p>
  )
  return todoList;
}

export default TodoList