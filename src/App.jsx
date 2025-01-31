import { useState } from 'react'
import './App.css'
import { Dreamai } from './component/Dreamai'
import Home from './component/Home/Home'
import Demo from './component/Home/Demo'
// import DreamGpt from './component/DreamGpt/DreamGpt.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="demo" element={<Demo />} />
          <Route path="dreamai" element={<Dreamai />} />
          {/* <Route path="dreamgpt" element={<DreamGpt />} /> */}
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
