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
    <footer className={`bg-primary-black sm:pt-14 pt-8 relative h-full overflow-hidden`}>
      <div className="absolute top-0 h-[1px] w-full bg-gray-500 opacity-20" />
      <div className="footer-gradient opacity-[20%] lg:block hidden" />

      <motion.div 
        className={`${styles.interWidth} mx-auto flex flex-col`}
        variants={footerVariants}
        initial={isMdScreen ? 'hidden' : 'visible'}
        whileInView="show"
      >
    
        <div className='flex sm:flex-row gap-2 sm:gap-0 flex-col justify-between items-center mb-6'>
          <div className='space-y-5'>
            <Image 
              src="/b-logo-02.png" 
              alt="bridgr logo"
              className='w-[80px] sm:w-[130px] sm:mx-0 mx-auto'
              quality={100}
              height={316}
              width={1346}
            />   
            <div className="flex flex-row gap-4 items-center">
              <a href="https://twitter.com/bridgrxyz"><Image src='/twitter.svg' className='w-[20px] h-[20px] object-contain cursor-pointer' width={20} height={20} alt='twitter'/></a>
              <a href="https://t.me/bridgr"><Image src='/telegram.svg' className='w-[20px] h-[20px] object-contain cursor-pointer' width={20} height={20} alt='telegram'/></a>
              <a href="https://discord.com/invite/j2ayV98Dc2"><Image src='/discord.svg' className='w-[20px] h-[20px] object-contain cursor-pointer' width={20} height={20} alt='discord'/></a>
              <a href='https://medium.com/@bridgrxyz' ><Image src='/medium.svg' className='w-[20px] h-[20px] object-contain cursor-pointer' width={20} height={20} alt='medium'/></a>
              <a href='https://www.linkedin.com/company/bridgr-xyz' ><Image src='/linkedin.svg' className='w-[18px] h-[18px] object-contain cursor-pointer' width={20} height={20} alt='linkedin'/></a>
              {/* <a href="mailto:bridgrxyz@gmail.com"><Image src='/email.svg' className='w-[20px] h-[20px] object-contain cursor-pointer' width={20} height={20} alt='email'/></a> */}
              {/* <a href='https://calendly.com/bridgrxyz/30min-call' ><Image src='/phone.svg' className='w-[18px] h-[18px] object-contain cursor-pointer' width={20} height={20} alt='video call'/></a> */}
            </div>
          </div>
          <div className='sm:mt-0 mt-4'>
            <Newsletter />
          </div>
        </div>
        
        <div className="my-3 h-[1px] w-full bg-gray-500 opacity-30" />

        <div className="flex mx-auto mt-3 mb-5">
            <p className="font-normal text-[11px] sm:text-[12px] md:text-[12px] lg:text-[14px] text-gray-600 text-center">
              © 2023 Bridgr. All rights reserved.
            </p>
        </div>
        
      </motion.div>
    </footer>
  );
};

export default Footer;
