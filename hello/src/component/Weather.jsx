import React, { useEffect, useState } from 'react'

const Weather = () => {

    const [weather,setWeather]=useState(null)
    const apikey='44964122c96971622fdcceec44f5b0c4'

    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                const latitude=position.coords.latitude;
                const longitude=position.coords.longitude
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`)
                .then((res)=>res.json())
                .then((data)=>setWeather(data))
            })
        }
    },[])
  return (
    <div>
      <h1>Weather</h1>
      <p>Temp:{weather && weather.main.temp}</p>
    </div>
  )
}

export default Weather
