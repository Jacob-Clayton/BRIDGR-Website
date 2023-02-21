'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: false });
  return (
  <section className='mx-auto'>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="fixed inset-x-0 top-[9%] sm:top-[11%] md:top-[8%] lg:top-[11%] xl:top-[11%] 2xl:top-[10%] text-center flex justify-center items-center flex-col absolute z-50">
        <motion.h1 
          variants={textVariant(0.6)}
          initial="hidden"
          whileInView="show" 
          className={styles.heroHeading}
        >
          The best of Web3
        </motion.h1>
        <motion.div
          variants={textVariant(0.7)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>in one place</h1>
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        animate={inView ? "show" : "hidden"}
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="relative w-full lg:-mt-[8px] md:-mt-[10px] mt-[12px]"
      >
        <Image
          src="/cover.png"
          alt="hero_cover"
          className="mx-auto overflow-visible sm:mt-[3%] md:mt-[2%] lg:mt[1%] xl:mt-[0%] mt-[2%] opacity-[90%] object-cover rounded-tl-[140px] z-10 relative"
          quality={95}
          width={1600}
          height={1000}
          priority
        />
        <Image 
          src='/bridgrround.png'
          alt='Bridgr logo faded in background'
          className="absolute z-[0] w-[92%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[19%]"
          quality={60}
          width={900}
          height={900}
        />
        {/* <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[90px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[205px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a> */}
      </motion.div>
    </motion.div>
    
  </section>
);
};

export default Hero;
