import React, { useState } from "react";
import { PiChatDotsDuotone } from "react-icons/pi";
import { IoIosClose, IoIosMenu } from "react-icons/io";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }


  return (
    <header className="fixed top-0 left-0 w-full transition-all duration-500 ease-out">
      <nav className="flex items-center justify-between max-w-6xl mx-auto w-[90%] h-16 py-4">
        <a href="#" className="text-2xl md:text-3xl font-bold mr-6">
          Mukesh<span className="text-primary text-3xl">.</span>
        </a>

        {/* Navbar Links */}
        <div className="hidden min-[825px]:flex items-center gap-4 bg-base shadow-lg opacity-80 px-8 py-4 rounded-full ">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-content text-[15px] font-bold hover:text-content-alter transition-all duration-300 ease-in-out"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* desktop let's talk button    */}
        <a
          href="#"
          className="hidden min-[825px]:flex font-semibold custom-gradient py-3 px-8 text-white rounded-full items-center gap-2 hover:opacity-80 transition-opacity"
        >
          Let's Talk <PiChatDotsDuotone className="text-lg" />
        </a>

        {/* for mobile button */}
        <button
        onClick={toggleMenu} aria-label="Toggle Menu"
         className="min-[825px]:hidden p-2 text-gray-700 hover:text-gray-900">
          {isMenuOpen ? (
            <div>
               <IoIosClose className="text-2xl" />


            </div>  

          ) : (
            <div>
            <IoIosMenu className="text-2xl" />
          </div>

          )}

          
        </button>
      </nav>

      {/* mobile menu  */}

      {isMenuOpen && (
      <div className="min-[825px]:hidden fixed w-full top-20 z-40">
        <div className="bg-white shadow-lg rounded-2xl mx-4 p-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
              onClick={closeMenu}
                key={index}
                href={link.href}
                className="text-content text-[18px] font-bold hover:text-content-alter py-3 border-b border-gray-100 transition-all duration-300 ease-in-out"
              >
                {link.name}
              </a>
            ))}

            {/* mobile let's talk button    */}
            <a
            onClick={closeMenu}
              href="#"
              className="flex font-semibold custom-gradient py-4 px-8 justify-center mt-4 text-white rounded-full items-center gap-2 hover:opacity-80 transition-opacity"
            >
              Let's Talk <PiChatDotsDuotone className="text-lg" />
            </a>
          </div>
        </div>
      </div>
      )}
    </header>
  );
};

export default Navbar;
