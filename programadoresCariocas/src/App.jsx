import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <Header/>
      sadasdsad
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
