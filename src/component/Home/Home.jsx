import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../Navbar/Navbar'
import "./Home.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom';

import img1 from '../../assets/img2.jpeg'
import img2 from '../../assets/img1.jpeg'
import img3 from '../../assets/img4.jpeg'
import img4 from '../../assets/img7.jpeg'
import img5 from '../../assets/img3.jpeg'
import img6 from '../../assets/img5.jpeg'
import img7 from '../../assets/img6.jpeg'

function Home() {
  const gsapref = useRef()

  useGSAP(() => {
    const t0 = gsap.timeline();
    const t1 = gsap.timeline();

    t0.to('.ttlone', { duration: 1.5, x: "30%", ease: "easeInOut" }, 'ones')
      .to('.ttltwo', { duration: 1.5, x: "-30%", ease: "easeInOut" }, 'ones')
      .to('.morph1', { delay: 0.4, duration: 1, x: "20", y: "50",ease: "power4.out" }, 'ones')
      .to('.morph2', { delay: 0.5, duration: 1, x: "-20", y: "42",ease: "power4.out"  }, 'ones')
      .to('.morph3', { delay: 0.7, duration: 1, x: "20",ease: "power4.out" }, 'ones')
      .to('.morph4', { delay: 0.9, duration: 1, x: "-20", y: "-10",ease: "power4.out" }, 'ones')
      .to('.logo_liqiud_morph', { duration: 1.5, height: "15vh", width: "15vw" },'ones')


    t0.to('.ttlone', { duration: 1, x: "-140%", ease: "easeInOut" }, 'twos')
      .to('.ttltwo', { duration: 1, x: "140%", ease: "easeInOut" }, 'twos')
      .to('.logo_liqiud_morph', { duration: 0.5, width: "22vw", position: "absolute", bottom: -45, ease: "easeIn" }, 'twos')
      .to('.portal', { delay: 0.3, duration: 0.6, opacity: 1, ease: "easeIn" }, 'twos')

    t0.to('.overlay', { display: "none" })


    t1.to([".c1", ".c2", ".c3", ".c4", ".c5", ".c6", ".c7"], {
      delay: 2.1,
      y: 0,
      duration: 0.9,
      ease: "back.out(0.3)",
      stagger: 0.1,
    });

    t1.to('.c1', { delay: 0.3, duration: 0.7, zIndex: 7, left: 0, rotate: 2, ease: "easeInOut" }, "cards")
      .to('.c2', { delay: 0.3, duration: 0.7, zIndex: 5, left: 150, rotate: -5, y: -5, ease: "easeInOut" }, "cards")
      .to('.c3', { delay: 0.3, duration: 0.7, zIndex: 4, left: 340, rotate: 3, y: -30, ease: "easeInOut" }, "cards")
      .to('.c4', { delay: 0.3, duration: 0.7, zIndex: 6, rotate: 0, x: -10, ease: "easeInOut" }, "cards")
      .to('.c5', { delay: 0.3, duration: 0.7, zIndex: 6, right: 350, rotate: 3, y: -20, ease: "easeInOut" }, "cards")
      .to('.c6', { delay: 0.3, duration: 0.7, zIndex: 6, right: 190, rotate: 8, y: 15, ease: "easeInOut" }, "cards")
      .to('.c7', { delay: 0.3, duration: 0.7, zIndex: 5, right: 0, rotate: -3, ease: "easeInOut" }, "cards")
      .to('.bottom_section', { delay: 0.3, duration: 1, opacity: 1, ease: "easeInOut" }, "cards")
      .to('.topdesign_section_ttl_lbls', { delay: 0.3, duration: 1, opacity: 1, ease: "easeInOut" }, "cards");

  }, []);


  const navigate = useNavigate();

  const handleClick = () => {
    gsap.to(".portal", {
      width: "100%",
      height: "100%",
      duration: 1,
      ease: "power3.out",
      borderRadius: 0,
      onComplete: () => navigate("/dreamai"),
    });

  };


  return (
    <>
      <div className="overlay">
        <h1 className='ttlone'>Imagine, create, and redefine reality </h1>

        <div className="logo_liqiud_morph">
          <div className="morphani_logo morph1"></div>
          <div className="morphani_logo morph2"></div>
          <div className="morphani_logo morph3"></div>
          <div className="morphani_logo morph4"></div>
        </div>

        <h1 className='ttltwo'>Imagine, create, and redefine reality </h1>
        <svg id='filterbby'>
          <filter id='gooey'>
            <feGaussianBlur in='SourceGraphic' stdDeviation="10" />
            <feColorMatrix values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0 
        0 0 0 50 -10" />
          </filter>
        </svg>
      </div>



      <div className="mywraper">

        <div className="homewrapper">
          <Navbar />

          <div className="topdesign_section_ttl_lbls">
            <div className="modelsinfo">

            </div>
            <div className="title_slogn">
              <h1>DreamPixel</h1>
              <span>Text to image & video generator</span> <br />
              <span style={{ opacity: 0.7 }}>DreamPixel V5o</span>
            </div>
            <div className="modelinfo">

            </div>
          </div>

          <div ref={gsapref} className="cardholder">
            <div className="card c1">
              <img src={img1} alt="img1" />
            </div>
            <div className="card c2">
              <img src={img2} alt="img2" />
            </div>
            <div className="card c3">
              <img src={img3} alt="img3" />
            </div>
            <div className="card c4">
              <img src={img4} alt="img4" />
            </div>
            <div className="card c5">
              <img src={img5} alt="img5" />
            </div>
            <div className="card c6">
              <img src={img6} alt="img6" />
            </div>
            <div className="card c7">
              <img src={img7} alt="img7" />
            </div>
          </div>

          <div className="bottom_section">

            <p style={{ width: "38vw", fontSize: "0.7em", marginTop: "20px", textAlign: "center", opacity: "0.8" }}>
              Unleash your creativity with our cutting-edge AI-powered image generator!
              Transform your ideas into stunning, high-quality visuals in seconds, whether you need
              artwork, designs, or unique concepts—perfect for every creator, designer, or dreamer
            </p>

            <div className="btnholders">

              <button className="secondrybtn btn" onClick={handleClick} >
                Try Dreampixel
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
                  <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="lightbtn btn">
                Login
              </div>
            </div>
          </div>
          <div className="portal"></div>
        </div>

      </div>


    </>
  )
}

export default Home