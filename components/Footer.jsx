'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => {
  const isMdScreen = useMediaQuery({ minWidth: 768 });

  return (
    <motion.footer
      variants={footerVariants}
      initial={isMdScreen ? 'hidden' : 'visible'}
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
    
      <div className="footer-gradient opacity-[60%] lg:block hidden" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex flex-col">
          <div className="mb-[30px] mt-[0px] h-[1px] bg-white opacity-20" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Image 
              src="/bridgrlogo.png" 
              alt="bridgr logo"
              className='w-[80px] sm:w-[130px]'
              quality={100}
              height={316}
              width={1346}
            />
            <p className="font-normal text-[11px] sm:text-[12px] md:text-[12px] lg:text-[14px] text-off-white text-center opacity-[50%]">
              © 2023 BRIDGR. All rights reserved.
            </p>
            <div className="flex gap-5">
              <a href="https://twitter.com/bridgrxyz"><img src='/twitter.svg' class='w-[20px] h-[20px] object-contain cursor-pointer' alt='twitter'/></a>
              <a href="https://t.me/bridgr"><img src='/telegram.svg' class='w-[20px] h-[20px] object-contain cursor-pointer' alt='telegram'/></a>
              <a href="https://discord.com/invite/j2ayV98Dc2"><img src='/discord.svg' class='w-[20px] h-[20px] object-contain cursor-pointer' alt='discord'/></a>
              <a href="mailto:bridgrxyz@gmail.com"><img src='/email.svg' class='w-[19px] h-[19px] object-contain cursor-pointer' alt='email'/></a>
              <a href='https://www.linkedin.com/company/bridgr-xyz' ><img src='/linkedin.svg' class='w-[19px] h-[19px] object-contain cursor-pointer' alt='linkedin'/></a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
