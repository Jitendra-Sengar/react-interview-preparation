import React, { useState } from 'react'

const ShowUserInput = () => {
    const [input,setInput]=useState("")

    const handleInput=(e)=>{
        setInput(e.target.value)
    }


  return (
    <div>
        <h1>Show User Input</h1>
      <input type="text"  placeholder='Enter your Name Here' onChange={handleInput} value={input}/>
      <h1>{input}</h1>
    </div>
  )
}

export default ShowUserInput
