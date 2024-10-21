import React, { useState } from 'react'


const Counter = () => {

    const [count, setCount]=useState(0)

  const handleIncrement=()=>{
    setCount(count+1)
  }

  const handleDecrement=()=>{
    setCount(count-1)
  }
  return (
    <div>
        <h1>Show Counter</h1>
      <button onClick={()=>handleIncrement()}>+</button>
     {count}
     <button onClick={()=>handleDecrement()}>-</button>
    </div>
  )
}

export default Counter;
