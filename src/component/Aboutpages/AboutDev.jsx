import React,{useEffect} from 'react'
import './About.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

export default function AboutDev() {
  
  useEffect(() => {
    document.title = "Ratnesh kumawat";
  }, []);
  return (
    <>
      <section className='aboutdev'>
        <header style={{ position: "absolute", top: 5, color: "white", zIndex: 100 }}>
          <div className="navlogo">
            <img src={logo} alt="logo" />
            <h3>
              DreamPixel
            </h3>
          </div>
          <ul>
            <li >
              <Link style={{ color: "white" }} to={"/"} >home </Link>
            </li>
            <li >
              <Link style={{ color: "white" }} to={"/aboutdev"} >about dev </Link>
            </li>
            <li >
              <Link style={{ color: "white" }} to={"/aboutproject"} >this project </Link>
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
          <p style={{ color: "white" }}>Get in touch !</p>

          <div className="profiletype">
            <a href="https://www.instagram.com/_ratnesh.design?igsh=M2lzNmRveTQ5MXFo"
              target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={26} height={26} color={"#ffffff"} fill={"none"}>
                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ratnesh-kumawat-6301b425b"
              target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={26} height={26} color={"#ffffff"} fill={"none"}>
                <path d="M7 10V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.00801 7L6.99902 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
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
