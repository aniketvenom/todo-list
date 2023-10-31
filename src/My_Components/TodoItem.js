import React from 'react'

const TodoItem = ({todo,onDelete}) => {
  return (
    <div>
      <div className='container m-4'>
      <h4>
      {todo.work}
      </h4>
        
      
      <p>
        {todo.desc}
      </p>
      
      <button className="btn btn-danger btn-sm" onClick={()=>onDelete(todo)}>Delete</button>
    </div>
        </div>
  )
}

export default TodoItem
