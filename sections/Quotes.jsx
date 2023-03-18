'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import CarouselElement from '../components/Carousel';

const Quotes = () => {

  return (
    <motion.section className={`${styles.paddings}`}>
      <CarouselElement/>
    </motion.section>
  );
};

export default Quotes;
