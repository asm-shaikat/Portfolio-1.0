import React from 'react';
import './navbar.css';
import { AiOutlineMenu } from "react-icons/ai";
import {Link} from 'react-router-dom';
const Navbar = () => {
    const closeNav = () =>{
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }
    const openNav = () =>{
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    return (
        <div>
            <div id="mySidebar" className="sidebar">
                <Link to="/" className="closebtn" onClick={closeNav}>×</Link>
                <Link to="/projects" >Project</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="menu-btn">
                <button className='openbtn' onClick={openNav}><AiOutlineMenu/></button>
            </div>
        </div>
    );
};

export default Navbar;