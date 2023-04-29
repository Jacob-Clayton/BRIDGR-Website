import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import Image from 'next/image'
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

function MobileNav({open, setOpen}) {
  return (   
    <div className={`absolute z-50 top-0 right-0 h-screen 2xl:w-[15%] xl:w-[20%] lg:w-[25%] md:w-[35%] sm:w-[40%] w-[55%] bg-cetecean-blue rounded-tl rounded-bl border-l-[1px] border-gray-500 border-opacity-30 transform ${open ? "right-0" : "transform translate-x-full"} transition-transform duration-100 ease-in-out filter `}>
      <div className={`text-off-white text-md sm:text-lg md:text-xl gap-5 z-100 flex flex-col items-center mt-[20%] sm:mt-[22%] md:mt-[20%] lg:mt-[25%] font-normal`}>

          <Link 
            className=" cursor-pointer" 
            href="/" 
            onClick={() => setOpen(false)}>
            Home
          </Link>
          {/* <a 
            className={`cursor-pointer`} 
            href="/#About" 
            onClick={() => setOpen(false)}>
            About
          </a> */}
          <a 
            className="cursor-pointer" 
            href="/#Team" 
            onClick={() => setOpen(false)}>
            Team
          </a>
          <a 
            className="cursor-pointer" 
            href="/#Story" 
            onClick={() => setOpen(false)}>
            Story
          </a>
          <a 
            className="cursor-pointer" 
            href="/#Services" 
            onClick={() => setOpen(false)}>
            Services
          </a>
          <a 
            className="cursor-pointer" 
            href="/#Pricing" 
            onClick={() => setOpen(false)}>
            Pricing
          </a>
          <a 
            className="cursor-pointer" 
            href="/#Events" 
            onClick={() => setOpen(false)}>
            Events
          </a>
          {/* <a 
            className="cursor-pointer" 
            href="/#News" 
            onClick={() => setOpen(false)}>
            News
          </a> */}
          <a 
            className="cursor-pointer" 
            href="/#Contact" 
            onClick={() => setOpen(false)}>
            Contact
          </a>
          <a 
            className="cursor-pointer" 
            href="https://docs.bridgr.xyz" 
            onClick={() => setOpen(false)}>
            <button className='bg-lavender py-2 px-5 items-start flex flex-row rounded'>
              Whitepaper<img src="/external-link.svg" className="sm:w-[10px] sm:h-[10px] w-[9px] h-[9px] ml-[2px]" alt='external link'/>
            </button>
          </a>
          <div className='w-full h-[1px] rounded-xl bg-gray-500 bg-opacity-30 fixed bottom-[17%]'/>
          <div className="flex sm:gap-4 gap-3 fixed bottom-[10%] " id='socials'>
            <a href="https://twitter.com/bridgrxyz"><Image src='/twitter.svg' className='w-[22px] h-[22px] object-contain cursor-pointer' width={20} height={20} alt='twitter'/></a>
            <a href="https://t.me/bridgr"><Image src='/telegram.svg' className='w-[22px] h-[22px] object-contain cursor-pointer' width={20} height={20} alt='telegram'/></a>
            <a href="https://discord.com/invite/j2ayV98Dc2"><Image src='/discord.svg' className='w-[22px] h-[22px] object-contain cursor-pointer' width={20} height={20} alt='discord'/></a>
            <a href="mailto:bridgrxyz@gmail.com"><Image src='/email.svg' className='w-[21px] h-[21px] object-contain cursor-pointer' width={20} height={20} alt='email'/></a>
            <a href='https://www.linkedin.com/company/bridgr-xyz' ><Image src='/linkedin.svg' className='w-[20px] h-[20px] object-contain cursor-pointer' width={20} height={20} alt='linkedin'/></a>
          </div>
      </div>  
    </div>
  );
};

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <motion.nav id="navbar">
          <div className={`fixed top-0 lg:h-[65px] md:h-[62px] sm:h-[60px] h-[55px] flex z-50 w-full bg-cetecean-blue border-gray-500 border-b-[1px] border-opacity-30`}>
            <div className={`${styles.interWidth} ${styles.descriptionText} flex mx-auto justify-between`}>
              <Link className='flex items-center' href='/'>
                <Image
                  src="/b-logo-02.png" 
                  alt="bridgr logo"
                  className='2xl:w-[170px] xl:w-[160px] lg:w-[150px] md:w-[130px] sm:w-[120px] w-[110px]' 
                  height={100} 
                  width={1000} 
                />
              </Link>
              
              <div className='flex items-center'>
                <div className='lg:flex hidden h-full gap-5'>
                  <ul className={`flex gap-4 items-center hover:text-white cursor-pointer`}>
                      {/* <li className="hover-underline-animation duration-500">
                        <Link href="/">Home</Link>
                      </li> */}
                      {/* <li className=" hover-underline-animation duration-500">
                        <a href="/#About">About</a>
                      </li> */}
                      <li className="hover-underline-animation duration-500">
                        <a href="/#Team">Team</a>
                      </li>
                      {/* <li className=" hover-underline-animation duration-500">
                        <a href="/#Story">Story</a>
                      </li> */}
                      <li className=" hover-underline-animation duration-500">
                        <a href="/#Services">Services</a>
                      </li>
                      <li className=" hover-underline-animation duration-500">
                        <a href="/#Pricing">Pricing</a>
                      </li>
                      <li className=" hover-underline-animation duration-500">
                        <a href="/#Events">Events</a>
                      </li>
                      <li className=" hover-underline-animation duration-500">
                        <a href="/#Contact">Contact</a>
                      </li>
                      {/* <li className=" hover-underline-animation duration-500">
                        <a href="https://docs.bridgr.xyz" className='flex'>Whitepaper<img src="/external-link.svg" className="sm:w-[10px] sm:h-[10px] w-[9px] h-[9px] ml-[1px]" alt='external link'/></a>
                      </li> */}
                  </ul>
                  <div className='h-full w-[1px] bg-gray-500 bg-opacity-30'/>
                  <div className="flex items-center gap-3">
                    <a href="https://twitter.com/bridgrxyz"><Image src='/twitter.svg' class='w-[18px] h-[18px] object-contain cursor-pointer' width={20} height={20} alt='twitter'/></a>
                    <a href="https://t.me/bridgr"><Image src='/telegram.svg' class='w-[18px] h-[18px] object-contain cursor-pointer' width={20} height={20} alt='telegram'/></a>
                    <a href='https://www.linkedin.com/company/bridgr-xyz' ><Image src='/linkedin.svg' class='w-[17px] h-[17px] object-contain cursor-pointer' width={20} height={20} alt='linkedin'/></a>
                  </div>
                </div>
                

                <MobileNav open={open} setOpen={setOpen} />
                <div 
                  className="flex lg:hidden group z-50 relative w-6 h-6 cursor-pointer flex-col justify-between" 
                  alt="menu"
                  onClick={() => {setOpen(!open)}}
                >
                  {/* hamburger button */}
                  <span className={`h-1 w-full bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                  <span className={`h-1 w-full bg-white rounded-lg cursor-pointer transition-all duration-1 ease-in-out ${open ? "w-0" : "w-full"}`} />
                  <span className={`h-1 w-full bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                </div>
              </div>
              
              </div>
            </div>
        </motion.nav>
    );
};

export default Navbar