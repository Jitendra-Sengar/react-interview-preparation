import React from 'react'
import Counter from './component/Counter'
import ShowUserInput from './component/ShowUserInput'
import ListOfItems from './component/ListOfItems'
import ToggleSwitch from './component/ToggleSwitch'
import Fetch from './component/Fetch'
import Timer from './component/Timer'
import Todo from './component/Todo'
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UploadImage from './component/UploadImage'
import Auth from './component/Auth'
import Pagination from './component/Pagination'
import Weather from './component/weather'

const App = () => {
  return (
   
    <BrowserRouter>
    <Navbar/>
    
      <Routes>
        <Route path="/" element={<ListOfItems/>} ></Route>
        <Route path="/counter" element={<Counter/>} ></Route>
        <Route path="/showuserinput" element={<ShowUserInput/>} ></Route>
        <Route path="/fetch" element={<Fetch/>} ></Route>
        <Route path="/timer" element={<Timer/>} ></Route>
        <Route path="/todo" element={<Todo/>} ></Route>
        <Route path="/uploadimage" element={<UploadImage/>} ></Route>
        <Route path="/toggleswitch" element={<ToggleSwitch/>} ></Route>
        <Route path="/auth" element={<Auth/>} ></Route>
        <Route path="/pagination" element={<Pagination/>} ></Route>
        <Route path="/weather" element={<Weather/>} ></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
