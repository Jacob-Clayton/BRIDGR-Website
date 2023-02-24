import { useState } from 'react'
import Image from 'next/image'
import Button from './Button';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

function MobileNav({open, setOpen}) {
  return (   
    <div className={`absolute z-50 top-0 right-0 h-screen 2xl:w-[14%] xl:w-[15%] lg:w-[19%] md:w-[25%] sm:w-[30%] w-[40%] bg-black bg-opacity-[60%] rounded-br-[10px] rounded-tl-[10px] rounded-bl-[10px] transform ${open ? "right-0" : "transform translate-x-full"} transition-transform duration-100 ease-in-out filter  `}>
      <div className="z-100 flex flex-col items-center mt-[40%] sm:mt-[38%] md:mt-[35%] lg:mt-[25%]">

          <a 
            className="text-md sm:text-l md:text-xl font-bold my-3 text-white cursor-pointer" 
            href="#Home" 
            onClick={() => setOpen(false)}>
            Home
          </a>
          <a 
            className="text-md sm:text-l md:text-xl font-bold my-3 text-white cursor-pointer" 
            href="#About" 
            onClick={() => setOpen(false)}>
            About
          </a>
          <a 
            className="text-md sm:text-l md:text-xl font-bold my-3 text-white cursor-pointer" 
            href="#Services" 
            onClick={() => setOpen(false)}>
            Services
          </a>
          <a 
            className="text-md sm:text-l md:text-xl font-bold my-3 text-white cursor-pointer" 
            href="#Events" 
            onClick={() => setOpen(false)}>
            Events
          </a>
          <a 
            className="text-md sm:text-l md:text-xl font-bold my-3 text-white cursor-pointer" 
            href="#Team" 
            onClick={() => setOpen(false)}>
            Team
          </a>
          <a 
            className="text-md sm:text-l md:text-xl font-bold my-3 text-white cursor-pointer" 
            href="#Story" 
            onClick={() => setOpen(false)}>
            Origins
          </a>
          <a 
            className="text-md sm:text-l md:text-xl font-bold my-3 text-white cursor-pointer" 
            href="https://jacobclayton.gitbook.io/bridgr-services/" 
            onClick={() => setOpen(false)}>
            <Button>Docs</Button>
          </a>
          <div className="flex gap-4 fixed bottom-[12%]" id='socials'>
            <a href="https://twitter.com/bridgrxyz"><img src='/twitter.svg' class='w-[24px] h-[24px] object-contain cursor-pointer'/></a>
            <a href="https://t.me/bridgr"><img src='/telegram.svg' class='w-[24px] h-[24px] object-contain cursor-pointer'/></a>
            <a href="https://discord.com/invite/j2ayV98Dc2"><img src='/discord.svg' class='w-[24px] h-[24px] object-contain cursor-pointer'/></a>
            <a href="mailto:bridgrxyz@gmail.com"><img src='/email.svg' class='w-[24px] h-[24px] object-contain cursor-pointer'/></a>
            <a href='https://www.linkedin.com/company/bridgr-xyz' ><img src='/linkedin.svg' class='w-[24px] h-[24px] object-contain cursor-pointer'/></a>
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
            className={`${styles.xPaddings} py-8 relative navbar absolute inset-0 gradient-01 md:block hidden`}
          />
          <div className=' fixed top-0 pt-4 z-50 w-full backdrop-blur-sm'>
            <div className=' mx-auto flex justify-end items-center'>
              <Image
                src="/bridgrlogo.png" 
                className='mx-auto 2xl:w-[180px] sm:w-[150px] w-[100px]' 
                height={60} 
                width={180} 
              />
              <MobileNav open={open} setOpen={setOpen}/>
                <div 
                  className="group z-50 right-5 relative w-6 h-6 cursor-pointer flex-col justify-between flex" 
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
        </motion.nav>
    );
};

export default Navbar