import React from 'react'
import './About.css'
import { FaBold, FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { color } from 'framer-motion';

export default function AboutDev() {
  return (
    <>
      <section className='aboutdev'>
        <header style={{position : "absolute" , top : 5 , color : "white", zIndex : 100}}>
          <div className="navlogo">
            <img src={logo} alt="logo" />
            <h3>
              DreamPixel
            </h3>
          </div>
          <ul>
            <li >
              <Link style={{color : "white"}} to={"/"} >home </Link>
            </li>
            <li >
              <Link style={{color : "white"}} to={"/aboutdev"} >about dev </Link>
            </li>
            <li >
              <Link style={{color : "white"}} to={"/aboutproject"} >this project </Link>
            </li>
          </ul>
          <Link className='AIbtn' style={{ padding: "5px 1.3em", height: "35px" }}>sign up</Link>
        </header>
        <div className="bgvid">
          <div className="profiletype">
            <div className="devname">
              <h3>Ratnesh kumawat</h3>
              <span style={{ marginLeft: "5px" }}>UI/UX Designer | Web Developer | 3D web-designing</span>
            </div>
          </div>
        <p style={{color : "white"}}>Get in touch !</p>

          <div className="profiletype">
            <a href="https://www.instagram.com/_ratnesh.design?igsh=M2lzNmRveTQ5MXFo"
              target="_blank" rel="noopener noreferrer">
              <FaInstagram fontSize={"1.3rem"} color='white' />
            </a>
            <a href="https://www.linkedin.com/in/ratnesh-kumawat-6301b425b"
              target="_blank" rel="noopener noreferrer">
              <CiLinkedin fontSize={"1.5rem"} color='white' />
            </a>
          </div>

        </div>
        <video
          src="https://www.dropbox.com/scl/fi/t12cmxx2ft7imkxc3j5lg/video_20240729_162351_edit.mp4?rlkey=mzxt33ok0eh2wqtv1xos274z9&st=9ebgs8bl&dl=1"
          autoPlay loop muted>
        </video>
      </section>
    </>
  )
}
