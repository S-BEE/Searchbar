import logo from './../assets/images/logo(1).png'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'
import {SlArrowDown} from 'react-icons/sl'
import {CgGlobeAlt} from 'react-icons/cg'
import {FiUser} from 'react-icons/fi'
import './navbar.css'

const Navbar = ()=>{
    const [isClicked, setIsClicked] = useState(false)

    function toggle(){
        setIsClicked(!isClicked)
        console.log(isClicked)
    }

    return(
        <>
        <div>
            <header className="w-full fixed top-0 bg-[#000] py-[1%] px-[2%] z-40 flex justify-between ">
                <div className="flex gap-[5%] items-center ">
                    <a href="www.uberfreight.com">
                        <img src={logo} alt="uber-logo" width="100%"/>
                    </a>
                    <nav className={isClicked? "expanded":"menulist"}>
                        <ul className='flex gap-[3%] list-none '>
                            <li className='hover:bg-[#7e7d7d] px-[1rem] py-[0.3rem] hover:rounded-full '>
                                <a href="www.uberfreight.com/shipper/" className='text-[#fff] text-[1.5rem] font-bold'>Shipper</a></li>
                            <li className='hover:bg-[#7e7d7d] px-[1rem] py-[0.3rem] hover:rounded-full '>
                                <a href="www.uberfreight.com/carrier/" className='text-[#fff] text-[1.5rem] font-bold' >Carrier</a></li>
                            <li className='hover:bg-[#7e7d7d] px-[1rem] py-[0.3rem] hover:rounded-full '>
                                <a href="#" className='text-[#fff] text-[1.5rem] font-bold flex gap-4 items-center '> Resources <SlArrowDown/></a></li>
                            <li className='hover:bg-[#7e7d7d] px-[1rem] py-[0.3rem] hover:rounded-full ' >
                                <a href="#" className='text-[#fff] text-[1.5rem] font-bold flex gap-4 items-center ' > Company <SlArrowDown/></a></li>
                            <li className='hover:bg-[#7e7d7d] px-[1rem] py-[0.3rem] hover:rounded-full '>
                                <a href="#"className='text-[#fff] text-[1.5rem] font-bold flex gap-4 items-center ' > Support <SlArrowDown/></a></li>
                        </ul>    
                    </nav>
                </div>
                <div className="flex gap-[2rem] md:gap-4 sm:gap-4 items-center ">
                    <a href="#" id='lang' className='flex gap-2 items-center text-[#fff] text-[1.5rem] font-bold' ><CgGlobeAlt/><span>EN</span> </a>
                    <a href="#" className='flex gap-2 items-center text-[#fff] text-[1.5rem] font-bold' ><FiUser /><span className='log'>Log in</span></a>       
                    <a href="#" className='text-[#000] text-[1.5rem] sm:text-sm md:text-base rounded-full bg-[#eee] px-[1rem] py-[0.3rem] sm:px-2 md:p-[7px] ' >
                        <button> Get started </button>
                    </a>
                    <button className="hamburger" onClick={toggle}>
                        <GiHamburgerMenu />
                    </button>
                </div>
            </header>
        </div>
        
        </>
    )
}

export default Navbar