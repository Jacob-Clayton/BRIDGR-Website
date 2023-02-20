'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className='navbar absolute inset-0 gradient-01 md:block hidden'/>
    <div className={`${styles.innerWidth} mx-auto flex justify-center gap-8`}>
      <Image
        src='/bridgrlogomain.png' 
        alt="Bridgr name and logo"
        className='bridgrlogo 2xl:w[200px] xl:w-[190px] lg:w-[170px] md:w[160px] sm:w-[150px] w-[100px]'
        quality={100}
        width={200}
        height={50}
      />
      {/* <img src="/menu.svg" alt="menu" className='w-[24px] h-[24px]'/> */}
    </div>
  </motion.nav>
);

export default Navbar;
