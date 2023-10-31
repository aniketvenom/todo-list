import React, { useState } from 'react'

const AddTodo = (props) => {
  const[title,settitle] = useState("");
  const[desc,setdesc]  =useState("");
  const submit = (e)=>{

    e.preventDefault();
    if(!title || !desc)
    {
      alert("Nor title not desc an be blank");
    }
    else{

      props.addtodo(title,desc);
    }

    
  }

  return (
    <div>
      <form className='container my-5' onSubmit={submit}>
        <h3>Add a todo</h3>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Todo list</label>
    <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} class="form-control" id="todolist" />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    <input type="text" value={desc} onChange={(e)=>setdesc(e.target.value)} class="form-control" id="desc"/>
  </div>
  
  <button type="submit" class="btn btn-success btn-sm">Add</button>
</form>
    </div>
  )
}

export default AddTodo

