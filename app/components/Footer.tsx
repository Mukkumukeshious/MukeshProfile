import React from 'react'
import { FaInstagramSquare,  FaFacebookF,  FaLinkedin, FaTwitter  } from "react-icons/fa";

const Footer = () => {
  const scocialMediaIcons = [
    { icon: FaInstagramSquare, href: 'https://www.instagram.com/' },
    { icon: FaFacebookF, href: 'https://www.facebook.com/' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/' },
    { icon: FaTwitter, href: 'https://www.twitter.com/' },
  ];
  return (
    <footer className='py-12 px-4 text-center'>
      <div className='flex justify-center gap-2 md:gap-6 mb-8'>
        {
          scocialMediaIcons.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a href={item.href} key={index} className='p-4 rounded-2xl border-outer hover:bg-primary/10 transition-all duration-300 ease-in-out'>
                <IconComponent className='text-xl md:text-2xl text-primary'/>
                </a>
          )})
        }
      </div>
    <p className='text-xl md:text-2xl text-primary font-semibold max-w-3xl mx-auto mb-8'>
      Namaste, if you have any questions or want to connect, feel free to reach out! You can find me on social media
      
      </p>
      <hr className='border-outer mb-8'/> 
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-content'>
        <div>
          <p className='font-semibold'>Location</p>
          <p>Kathmandu, Nepal</p>
        </div>

        <div>
          <p className='font-semibold'>Gmail</p>
          <p>iammukehious@gmail.com</p>
        </div>

        <div>
          <p className='font-semibold'>Phone</p>
          <p>977-9821640914</p>
        </div>
        </div> 
    </footer>
  )
}

export default Footer
