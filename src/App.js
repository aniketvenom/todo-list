import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './My_Components/Header';
import Todoos from "./My_Components/Todos";
import Footer from "./My_Components/Footer";
import AddTodo from "./My_Components/AddTodo";
import { useState, useEffect } from 'react';


function App() {

  let inittodo;
  if (localStorage.getItem("todos")===null) {
    inittodo = [];
  }
  else {
    inittodo = JSON.parse(localStorage.getItem("todos"))
  }

  function onDelete(todo) {
    console.log("i'm delete", todo);
    // let newTodo = todo.pop();
    settodos(todos.filter((e) => {
      return e !== todo;

    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addtodo = (title, desc) => {
    let sno = 0;
    console.log("I'm adding title and description", title, desc);
    if (todos.length == 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const mytodo = {
      sno: sno,
      work: title,
      desc: desc
    }
    console.log(mytodo);
    settodos([...todos, mytodo]);
    localStorage.setItem("todos", JSON.stringify(mytodo));

  }

  const [todos, settodos] = useState([inittodo]);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos])

  return (
    <div>
      <Header title="Todos list" />
      <AddTodo addtodo={addtodo}></AddTodo>
      <Todoos todo={todos} onDelete={onDelete} />

      <Footer />

    </div>
  );
}

export default App;
