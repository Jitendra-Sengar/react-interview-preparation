import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const [time,setTime]=useState(0);
    const [isRunning, setIsRunning]=useState(false);
    const timerRef = useRef(null); 

    useEffect(()=>{
        
        if(isRunning){
            timerRef.current = setInterval(() => {
                setTime(prevtime => prevtime+1);
            }, 1000)  
        }
        else {
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    },[isRunning])


    const handleStop=()=>{
        setIsRunning(false)
    }

    const handleStart=()=>{
        setIsRunning(true)
    }

  return (
    <div>
      <h1>Timer:{time}</h1>

      <button onClick={()=>handleStart()}>Start Timer</button>
      <button onClick={()=>handleStop()}>Stop Timer</button>

    </div>
  )
}

export default Timer
