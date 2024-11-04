import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Outlet} from 'react-router-dom'

const App = () => {
  

  return (
    <div className=' bg-black min-w-screen min-h-screen '>
      <Navbar/>
    <Outlet/>
    </div>
  )
}

export default App

