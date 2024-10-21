import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        
            const FetchApi=async ()=>{
                try {
                const response= await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
                const data = await response.json()
                console.log(data);
                
                setData(data)
                return data;
            } catch (error) {
                console.log("Error", error);
            }

            }
            FetchApi()
        
    },[])
    
  return (
    <div>
        <h1>Fetch Data</h1>
        {data.map((item,id)=>(
            <div key={id}> {item.url}</div>
        ))}
    </div>
  )
}

export default Fetch
