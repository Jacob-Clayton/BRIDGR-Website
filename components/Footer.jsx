'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { footerVariants } from '../utils/motion';
import { Newsletter } from '../components';

const Footer = () => {
  const isMdScreen = useMediaQuery({ minWidth: 768 });

  return (
    <motion.footer
      variants={footerVariants}
      initial={isMdScreen ? 'hidden' : 'visible'}
      whileInView="show"
      className={` py-10 relative h-full`}
    >
    
      <div className="footer-gradient opacity-[60%] lg:block hidden" />
      <div className={`${styles.interWidth} mx-auto flex flex-col`}>
    
        <div className='flex sm:flex-row flex-col justify-between items-center mb-4'>
          <div className='space-y-5'>
            <Image 
              src="/bridgrlogo.png" 
              alt="bridgr logo"
              className='w-[80px] sm:w-[130px] sm:mx-0 mx-auto'
              quality={100}
              height={316}
              width={1346}
            />   
            <div className="flex flex-row gap-4 items-center">
              <a href="https://twitter.com/bridgrxyz"><Image src='/twitter.svg' class='w-[20px] h-[20px] object-contain cursor-pointer' width={20} height={20} alt='twitter'/></a>
              <a href="https://t.me/bridgr"><Image src='/telegram.svg' class='w-[20px] h-[20px] object-contain cursor-pointer' width={20} height={20} alt='telegram'/></a>
              <a href="https://discord.com/invite/j2ayV98Dc2"><Image src='/discord.svg' class='w-[20px] h-[20px] object-contain cursor-pointer' width={20} height={20} alt='discord'/></a>
              <a href='https://medium.com/@bridgrxyz' ><Image src='/medium.svg' class='w-[20px] h-[20px] object-contain cursor-pointer' width={20} height={20} alt='medium'/></a>
              <a href='https://www.linkedin.com/company/bridgr-xyz' ><Image src='/linkedin.svg' class='w-[17px] h-[17px] object-contain cursor-pointer' width={20} height={20} alt='linkedin'/></a>
              <a href="mailto:bridgrxyz@gmail.com"><Image src='/email.svg' class='w-[20px] h-[20px] object-contain cursor-pointer' width={20} height={20} alt='email'/></a>
              <a href='https://calendly.com/bridgrxyz/30min-call' ><Image src='/phone.svg' class='w-[18px] h-[18px] object-contain cursor-pointer' width={20} height={20} alt='video call'/></a>
            </div>
          </div>
          <div className='sm:mt-0 mt-4'>
            <Newsletter />
          </div>
        </div>
        
        <div className="my-3 h-[1px] w-full bg-gray-500 opacity-30" />

        <div className="flex mx-auto mt-3">
            <p className="font-normal text-[11px] sm:text-[12px] md:text-[12px] lg:text-[14px] text-gray-600 text-center">
              © 2023 BRIDGR. All rights reserved.
            </p>
        </div>
        
      </div>
    </motion.footer>
  );
};

export default Footer;
