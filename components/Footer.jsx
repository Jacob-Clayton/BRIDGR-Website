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
      <div className="footer-gradient lg:block hidden" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex flex-col">
          <div className="mb-[30px] mt-[0px] h-[1px] bg-white opacity-10" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Image 
              src="/bridgrlogo.png" 
              alt="bridgr logo"
              className='w-[80px] sm:w-[130px]'
              quality={100}
              height={316}
              width={1346}
            />
            <p className="font-normal text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] text-white text-center opacity-50">
              © 2023 BRIDGR. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/bridgrxyz"><img src='/twitter.svg' class='w-[24px] h-[24px] object-contain cursor-pointer'/></a>
              <a href="https://t.me/bridgr"><img src='/telegram.svg' class='w-[24px] h-[24px] object-contain cursor-pointer'/></a>
              <a href="https://discord.com/invite/j2ayV98Dc2"><img src='/discord.svg' class='w-[24px] h-[24px] object-contain cursor-pointer'/></a>
              <a href="mailto:bridgrxyz@gmail.com"><img src='/email.svg' class='w-[24px] h-[24px] object-contain cursor-pointer'/></a>
              <a href='https://www.linkedin.com/company/bridgr-xyz' ><img src='/linkedin.svg' class='w-[24px] h-[24px] object-contain cursor-pointer'/></a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
