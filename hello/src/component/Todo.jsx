import React, { useState } from 'react'

const Todo = () => {

    const [todos,setTodos]=useState([])
    const [todo,setTodo]=useState("")

    const handleChange=(e)=>{
         setTodo(e.target.value)
    }

    const addTodo=()=>{
        setTodos([...todos,todo])
        setTodo("")
    }
  return (
    <div>
      <h1>Todo</h1>
      <input type="text" placeholder='Enter a Todo' onChange={(e)=>handleChange(e)} value={todo}/>
      <button onClick={addTodo}>addTodo</button>

      {todos.map((todo)=>(
        <li>{todo}</li>
      ))}
    </div>
  )
}

export default Todo
