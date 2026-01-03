import React from 'react'
import { PiChatDotsDuotone } from "react-icons/pi";
import { IoIosClose, IoIosMenu } from "react-icons/io";


const Navbar = () => {
    const navLinks = [
    {name: 'Home', href: '#'},
    {name: 'Portfolio', href: '#portfolio'},
    {name: 'About', href: '#about'},
    {name: 'Resume', href: '#resume'},
    {name: 'Contact', href: '#contact'},
    ]
  return (
    <header className='fixed top-0 left-0 w-full transition-all duration-500 ease-out'>
        <nav className='flex items-center justify-between max-w-6xl mx-auto w-[90%] h-16 py-4'>
             
            <a href="#" className='text-2xl md:text-3xl font-bold mr-6'>
                Mukesh<span className='text-primary text-3xl'>.</span></a>

                {/* Navbar Links */}
            <div className='hidden min-[825px]:flex items-center gap-4 bg-base shadow-lg opacity-80 px-8 py-4 rounded-full '>
                {navLinks.map((link, index)=>(
                    <a key={index} href={link.href} className='text-content text-[15px] font-bold hover:text-content-alter transition-all duration-300 ease-in-out'>{link.name}</a>
                ))}
                </div> 

                {/* desktop let's talk button    */}
                <a href='#' className='hidden min-[825px]:flex font-semibold custom-gradient py-3 px-8 text-white rounded-full items-center gap-2 hover:opacity-80 transition-opacity'>
                Let's Talk    <PiChatDotsDuotone className='text-lg' /></a>

                {/* for mobile button */}
                <button className='min-[825px]:hidden p-2 text-gray-700 hover:text-gray-900'>
                    <IoIosClose className='text-2xl' />

                    
                 <div>
                    <IoIosMenu className='text-2xl' />


                </div>

                </button>
               


        </nav>

        {/* mobile menu  */}
        <div className='min-[825px]:hidden fixed top-[80px] z-40'>

        </div>
    </header>
   
  )
}

export default Navbar
