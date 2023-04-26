'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { footerVariants } from '../utils/motion';
import { Newsletter, Button } from '../components';

const Footer = () => {
  const isMdScreen = useMediaQuery({ minWidth: 768 });

  return (
    <motion.footer
      variants={footerVariants}
      initial={isMdScreen ? 'hidden' : 'visible'}
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative h-full`}
    >
    
      <div className="footer-gradient opacity-[60%] lg:block hidden" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mb-3 mt-0 h-[1px] bg-white opacity-20" />
        <div className="flex flex-row items-center justify-between">
          <Image 
            src="/bridgrlogo.png" 
            alt="bridgr logo"
            className='w-[80px] sm:w-[130px]'
            quality={100}
            height={316}
            width={1346}
          />
          <div className="flex gap-4 items-center">
            <a href="https://twitter.com/bridgrxyz"><img src='/twitter.svg' class='w-[20px] h-[20px] object-contain cursor-pointer' alt='twitter'/></a>
            <a href="https://t.me/bridgr"><img src='/telegram.svg' class='w-[20px] h-[20px] object-contain cursor-pointer' alt='telegram'/></a>
            <a href="https://discord.com/invite/j2ayV98Dc2"><img src='/discord.svg' class='w-[20px] h-[20px] object-contain cursor-pointer' alt='discord'/></a>
            <a href='https://medium.com/@bridgrxyz' ><img src='/medium.svg' class='w-[20px] h-[20px] object-contain cursor-pointer' alt='medium'/></a>
            <a href='https://www.linkedin.com/company/bridgr-xyz' ><img src='/linkedin.svg' class='w-[17px] h-[17px] object-contain cursor-pointer' alt='linkedin'/></a>
            <a href="mailto:bridgrxyz@gmail.com"><img src='/email.svg' class='w-[20px] h-[20px] object-contain cursor-pointer' alt='email'/></a>
            <a href='https://calendly.com/bridgrxyz/30min-call' ><img src='/phone.svg' class='w-[17px] h-[17px] object-contain cursor-pointer' alt='video call'/></a>

          </div>
        </div>
        <div className='flex my-2 justify-center'>
          <Newsletter />     
        </div>
        <div className='flex flex-row mx-auto mt-2'>
          <p className="font-normal text-[11px] sm:text-[12px] md:text-[12px] lg:text-[14px] text-secondary-white text-center opacity-70">
            © 2023 BRIDGR. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
