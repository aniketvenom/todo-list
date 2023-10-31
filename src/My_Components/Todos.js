import React from 'react'
import TodoItem from "./TodoItem"

const Todos = (props) => {
  return (
    <div>
      <div className='container my-5'>
        <h3 className='text-center my-5'>Todos</h3>
        {
          props.todo.length==0 ? "No Todo to display":
          props.todo.map((do1) => {

            return <TodoItem todo={do1} onDelete={props.onDelete}/>;
          })
          
      }


      </div>
    </div>
  )
}

export default Todos
