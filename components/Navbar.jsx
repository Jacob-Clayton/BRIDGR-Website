import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { Button } from '../components'
import { Poppins } from '@next/font/google';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
  display: 'swap',
})

function MobileNav({open, setOpen}) {
  return (   
    <div className={`absolute z-50 top-0 right-0 h-screen 2xl:w-[15%] xl:w-[20%] lg:w-[25%] md:w-[35%] sm:w-[40%] w-[50%] bg-primary-lightBlue rounded-tl-[35px] rounded-bl-[35px] transform ${open ? "right-0" : "transform translate-x-full"} transition-transform duration-100 ease-in-out filter  `}>
      <div className={`${poppins.variable} font-poppins text-off-white gap-6 z-100 flex flex-col items-center mt-[20%] sm:mt-[22%] md:mt-[20%] lg:mt-[25%] font-normal`}>

          <Link 
            className="font-poppins text-md sm:text-lg md:text-xl cursor-pointer" 
            href="/" 
            onClick={() => setOpen(false)}>
            Home
          </Link>
          <a 
            className={`font-poppins text-md sm:text-lg md:text-xl cursor-pointer`} 
            href="/#About" 
            onClick={() => setOpen(false)}>
            
            About
          </a>
          <a 
            className="font-poppins text-md sm:text-lg md:text-xl cursor-pointer" 
            href="/#Story" 
            onClick={() => setOpen(false)}>
            Story
          </a>
          <a 
            className="font-poppins text-md sm:text-lg md:text-xl cursor-pointer" 
            href="/#Team" 
            onClick={() => setOpen(false)}>
            Team
          </a>
          <a 
            className="font-poppins text-md sm:text-lg md:text-xl cursor-pointer" 
            href="/#Services" 
            onClick={() => setOpen(false)}>
            Services
          </a>
          {/* <a 
            className="font-poppins text-md sm:text-lg md:text-xl cursor-pointer" 
            href="/#Pricing" 
            onClick={() => setOpen(false)}>
            Pricing
          </a> */}
          <a 
            className="font-poppins text-md sm:text-lg md:text-xl cursor-pointer" 
            href="/#Events" 
            onClick={() => setOpen(false)}>
            Events
          </a>
          <a 
            className="font-poppins text-md sm:text-lg md:text-xl cursor-pointer" 
            href="/#News" 
            onClick={() => setOpen(false)}>
            News
          </a>
          <a 
            className="font-poppins text-md sm:text-lg md:text-xl cursor-pointer" 
            href="/#Contact" 
            onClick={() => setOpen(false)}>
            Contact
          </a>
          <a 
            className="font-poppins text-md sm:text-lg md:text-xl cursor-pointer" 
            href="https://docs.bridgr.xyz" 
            onClick={() => setOpen(false)}>
            <Button>Whitepaper</Button>
          </a>
          <div className='w-[160px] sm:w-[200px] h-[1px] bg-white bg-opacity-30 fixed bottom-[16%]'/>
          <div className="flex sm:gap-4 gap-2 fixed bottom-[9%]" id='socials'>
            <a href="https://twitter.com/bridgrxyz"><img src='/twitter.svg' className='w-[22px] h-[22px] object-contain cursor-pointer' alt='twitter'/></a>
            <a href="https://t.me/bridgr"><img src='/telegram.svg' className='w-[22px] h-[22px] object-contain cursor-pointer' alt='telegram'/></a>
            <a href="https://discord.com/invite/j2ayV98Dc2"><img src='/discord.svg' className='w-[22px] h-[22px] object-contain cursor-pointer' alt='discord'/></a>
            <a href="mailto:bridgrxyz@gmail.com"><img src='/email.svg' className='w-[21px] h-[21px] object-contain cursor-pointer' alt='email'/></a>
            <a href='https://www.linkedin.com/company/bridgr-xyz' ><img src='/linkedin.svg' className='w-[20px] h-[20px] object-contain cursor-pointer' alt='linkedin'/></a>
          </div>
      </div>  
    </div>
  );
};

const Navbar = () => {
    const [open, setOpen] = useState(false);
    
    return (

        <motion.nav>
          <motion.div 
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className={`${styles.xPaddings} navbar absolute inset-0`}
          />
          <div className='fixed top-0 pt-3 pb-2 z-50 w-full backdrop-blur-sm'>
            <div className='flex justify-between'>
              <Link href='/'>
                <Image
                  src="/bridgrlogo.png" 
                  alt="bridgr logo"
                  className='flex flex-start md:ml-20 sm:ml-10 ml-5 2xl:w-[170px] sm:w-[150px] w-[100px]' 
                  height={60} 
                  width={180} 
                />
              </Link>
              
              <div className='flex justify-end mr-[2%]'>
                <div className='lg:flex hidden'>
                  <ul className={`${poppins.variable} font-poppins flex gap-4 lg:text-md xl:text-[1.1rem] items-center font-medium text-off-white cursor-pointer`}>
                      {/* <li className="px-3 hover:text-white duration-500">
                        <Link href="/">Home</Link>
                      </li> */}
                      <li className="hover:text-white duration-500">
                        <a href="/#About">About</a>
                      </li>
                      {/* <li className="hover:text-white duration-500">
                        <a href="/#Story">Story</a>
                      </li> */}
                      <li className="hover:text-white duration-500">
                        <a href="/#Team">Team</a>
                      </li>
                      <li className="hover:text-white duration-500">
                        <a href="/#Services">Services</a>
                      </li>
                      {/* <li className="hover:text-white duration-500">
                        <a href="/#Pricing">Pricing</a>
                      </li> */}
                      <li className="hover:text-white duration-500">
                        <a href="/#Events">Events</a>
                      </li>
                      <li className="hover:text-white duration-500">
                        <a href="/#Contact">Contact</a>
                      </li>
                      <li className="hover:text-white duration-500">
                        <a href="https://docs.bridgr.xyz" className='flex flex-1'>Whitepaper<img src="/external-link.svg" className="sm:w-[11px] sm:h-[11px] w-[10px] h-[10px] ml-[1px]" alt='external link'/></a>
                      </li>
                  </ul>
                  <div className='h-9 w-[1px] bg-white bg-opacity-20 mr-3 ml-2'/>
                  <div className="flex items-center gap-3">
                    <a href="https://twitter.com/bridgrxyz"><img src='/twitter.svg' class='w-[18px] h-[18px] object-contain cursor-pointer' alt='twitter'/></a>
                    <a href="https://t.me/bridgr"><img src='/telegram.svg' class='w-[18px] h-[18px] object-contain cursor-pointer' alt='telegram'/></a>
                    <a href='https://www.linkedin.com/company/bridgr-xyz' ><img src='/linkedin.svg' class='w-[17px] h-[17px] object-contain cursor-pointer' alt='linkedin'/></a>
                  </div>
                </div>
                

                <MobileNav open={open} setOpen={setOpen} />
                <div 
                  className="flex lg:hidden group z-50 relative mt-1 md:mr-20 sm:mr-10 mr-5 w-6 h-6 cursor-pointer flex-col justify-between" 
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