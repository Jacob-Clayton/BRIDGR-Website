'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import CarouselElement from '../components/Carousel';

const Quotes = () => {

  return (
    <div className='relative'>
      <motion.section className={`${styles.paddings} flex`}>
        <CarouselElement/>
      </motion.section>
      <div className='wave-blue2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1935a3" fill-opacity="1" d="M0,128L120,112C240,96,480,64,720,64C960,64,1200,96,1320,112L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      </div>
    </div>
  );
};

export default Quotes;
