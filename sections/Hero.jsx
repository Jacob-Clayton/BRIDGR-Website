'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const isMdScreen = useMediaQuery({ minWidth: 768 });
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: false });

  return (
  <section className= 'mx-auto' id='Home'>
    <motion.div
      variants={staggerContainer}
      initial={isMdScreen ? 'hidden' : 'visible'}
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="fixed inset-x-0 top-[7%] sm:top-[6%] md:top-[8%] lg:top-[9%] xl:top-[11%] 2xl:top-[10%] text-center flex justify-center items-center flex-col absolute z-20">
        <motion.h1 
          variants={textVariant(0.6)}
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
        className="relative w-full"
      >
        <Image
          src="/cover.png"
          alt="hero_cover"
          className="mx-auto overflow-visible sm:mt-[16%] md:mt-[7%] lg:mt-[4%] xl:mt-[2%] 2xl:mt-[2%] mt-[25%] opacity-[90%] object-cover rounded-tl-[140px] z-10 relative"
          quality={95}
          width={1600}
          height={1000}
          priority
        />
        {/* <Image 
          src='/bridgrround.png'
          alt='Bridgr logo faded in background'
          className="absolute lg:block hidden z-[0] w-[92%] top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[15%]"
          quality={60}
          width={900}
          height={900}
          priority
        /> */}
        <a href="https://t.me/bridgr">
          <div className="absolute fixed left-2/3 top-3/4 z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="2xl:w-[170px] 2xl:h-[170px] xl:w-[160px] xl:h-[160px] lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] sm:w-[120px] sm:h-[120px] w-[90px] h-[90px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
    
  </section>
);
};

export default Hero;
