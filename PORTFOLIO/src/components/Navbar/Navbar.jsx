import './Navbar.css'
import { FiArrowUpRight } from "react-icons/fi";
import { GiLindenLeaf } from "react-icons/gi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { useState } from "react";

import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <GiLindenLeaf />
        <h2>Fatiha</h2>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>Home</li>
        <li ><a href="#projects">porfolio</a></li>
        <li><Link to="/about-me">About Me</Link></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <button className="hire-btn">
         <span>Hire Me</span>
        <FiArrowUpRight />
      </button>

      <div className="menu-icon" 
       onClick={() => {setIsOpen(!isOpen);
         console.log("clicked", !isOpen);
       }}>
      <HiOutlineMenuAlt3 />
      </div>

    </nav>
  )
}

export default Navbar