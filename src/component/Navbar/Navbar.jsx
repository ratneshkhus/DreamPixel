import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
    return (
        <header>
            <div className="navlogo">
                <img src={logo} alt="logo" />
                <h3>
                    DreamPixel
                </h3>
            </div>
            <ul>
                <li>
                    <Link to={"/"} >home </Link>
                </li>
                <li>
                    <Link to={"/"} >home </Link>
                </li>
                <li>
                    <Link to={"/"} >home </Link>
                </li>
                <li>
                    <Link to={"/"} >home </Link>
                </li>
            </ul>
            <Link className='AIbtn' style={{ padding: "5px 1.3em" , height : "35px" }}>sign up</Link>
        </header>
    )
}
