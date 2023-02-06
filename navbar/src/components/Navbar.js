import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {navItems} from './NavItems.js';
import {FaTree} from 'react-icons/fa';
import Dropdown from './Dropdown.js';
import './Navbar.css';

const Navbar=()=>{
    const [dropdown,setDropdown]=useState(false)
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
                            if(navItem.title==='Services')
                            {
                                return (
                                 <li key={navItem.id} className={navItem.cName} onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
                                <Link to={navItem.path} >{navItem.title}</Link>
                                {dropdown && <Dropdown/>}
                                </li>
                                )
                            }
                            else
                            {
                                return (
                                 <li key={navItem.id} className={navItem.cName} >
                                <Link to={navItem.path} >{navItem.title}</Link>
                                </li>
                                )
                            }
                })}
            </ul>
            <button className="btn">Sign up</button>
           </nav>
            
        </>
    )
}
export default Navbar;