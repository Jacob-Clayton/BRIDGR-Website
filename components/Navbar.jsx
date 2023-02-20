'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className='navbar absolute inset-0 gradient-01'/>
    <div className={`${styles.innerWidth} mx-auto flex justify-center gap-8`}>
      <img src='bridgrlogomain.png' className='bridgrlogo 2xl:w[200px] xl:w-[190px] lg:w-[170px] md:w[160px] sm:w-[150px] w-[100px] '/>
      {/* <img src="/menu.svg" alt="menu" className='w-[24px] h-[24px]'/> */}
    </div>
  </motion.nav>
);

export default Navbar;
