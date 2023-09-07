import './navbar.css'
import { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
const Navbar = ()=>{
    const [expanded, setExpand] = useState(false)
    const expand = ()=>{
        setExpand(!expanded);
    }
    return(
        <>
        <div className='nav' >
            <h1>LOGO</h1>
            <div className="menuIcon" onClick={expand}>
                {expanded ? <FaTimes/> : <GiHamburgerMenu/>}
            </div> 
            <div className={expanded ? "show" : "hide"}>
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">SERVICE</a></li>
                    <li><a href="">CONTACT</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">SIGNUP</a></li>
                </ul>
            </div>
            
        </div>
        </>
    )
    }
    export default Navbar
