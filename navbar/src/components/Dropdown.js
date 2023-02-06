import React,{useState} from 'react';
import {serviceDropdown} from './NavItems.js';
import {Link} from 'react-router-dom';
import './Dropdown.css';
const Dropdown =()=>{
    const [dropdown,setDropdown]=useState(false)
   return (
    <>
     <ul className={dropdown?'dropdown-menu clicked':'dropdown-menu'} onClick={()=>setDropdown(!dropdown)}>
    {serviceDropdown.map((dropdownItem)=>{
        return (
          <li key={dropdownItem.id} className={dropdown?`${dropdownItem.cName} clicked`:dropdownItem.cName} onClick={()=>setDropdown(false)}>
            <Link to={dropdownItem.path}>
                {dropdownItem.title}
          </Link></li> 
        )
    })}  
       </ul>
    </>
   )
}
export default Dropdown;