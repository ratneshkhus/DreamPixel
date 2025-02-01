import React ,{ useState,useEffect } from 'react'
import './App.css'
import { Dreamai } from './component/Dreamai'
import Home from './component/Home/Home'
import Aboutdev from './component/Aboutpages/AboutDev'
import Aboutpro from './component/Aboutpages/AboutProj'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutdev" element={<Aboutdev />} />
          <Route path="aboutproject" element={<Aboutpro />} />
          <Route path="dreamai" element={<Dreamai />} />
          {/* <Route path="dreamgpt" element={<DreamGpt />} /> */}
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
