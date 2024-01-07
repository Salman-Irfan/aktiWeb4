import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from "./pages/Home"
// import './App.css'
function App() {
  
  return (
    // empty react fragment <></>
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
          </>
  )
}

export default App
