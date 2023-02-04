import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {navItems} from './NavItems.js';
import {FaTree} from 'react-icons/fa';
import './Navbar.css';

const Navbar=()=>{
    return (
        <> 
           <nav>
            <div className="navbar">
                <Link to="/" className="nav-logo">
                    Navbar
                    <FaTree/>
                </Link>
            </div>
            <ul className="nav-links">
                {
                    navItems.map((navItem)=>{
                        return (
                            <li key={navItem.id} className={navItem.cName} >
                                <Link to={navItem.path} >{navItem.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="btn">Sign up</button>
           </nav>
        
        </>
    )
}
export default Navbar;