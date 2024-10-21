import React, { useState } from 'react'

const ToggleSwitch = () => {
    const [toggle,setToggle]=useState(false);
    const handleToggle=()=>{
        setToggle(!toggle)
    }
  return (
    <div>
        <h1>Toggle Switch</h1>
      {toggle?"  Light is On":"  Light is off"}
      <button onClick={()=>handleToggle()}>Toggle</button>
    </div>
  )
}

export default ToggleSwitch
