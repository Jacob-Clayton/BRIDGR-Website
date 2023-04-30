'use client';

import { motion } from 'framer-motion';
import { Logos } from '../components';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';

const About = () => {
  const isLgScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <section className={`${styles.paddings} relative z-10`} id="About" >
      <motion.div
        variants={staggerContainer}
        initial={isLgScreen ? 'hidden' : 'visible'}
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className={`${styles.innerWidth} mx-auto flex-col ${styles.flexCenter}`}
      >
        {/* <TitleText title={<>About Us</>} textStyles="text-center" />
        <motion.div 
          className='w-full flex justify-center md:mt-20 md:mb-20 mt-10 mb-10'
          variants={fadeIn('up', 'tween', 0.2, 1)}
        >
          <p className='font-normal 2xl:text-[22px] xl:text-xl md:text-lg text-md text-center text-off-white'>
            Web3 companies raised $94 billion since 2016, yet 9 out of 10 fail.<span className={`${urbanist.variable} font-urbanist font-extrabold`}> BRIDGR </span>is here to change that!
          </p>
        </motion.div> */}
        {/* <motion.div 
          className="mx-auto flex flex-row w-full md:mt-20 md:mb-20 mt-10 mb-10"
          variants={fadeIn('up', 'tween', 0.2, 1)}
        >

          <div className='flex-1'>
            <p className=" flex flex-col font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-center text-secondary-white">
              <span className={`${urbanist.variable} font-urbanist mb-2 xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl text-lg text-off-white font-extrabold`}>BRIDGR</span>
              Accelerates Web3 growth
            </p>
          </div>

          <div className='flex-1 px-2'>
            <p className=" flex flex-col font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-center text-secondary-white">
              <span className="mb-2 xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl text-lg text-off-white font-bold">10</span>
              Partner companies
            </p>
          </div>

          <div className='flex-1'>
            <p className=" flex flex-col font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[14px] text-center text-secondary-white">
              <span className="mb-2 xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl text-lg text-off-white font-bold">220,000<span className='ml-1 xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-md align-middle'>+</span></span>
              Combined community
            </p>
          </div>
        </motion.div> */}
        <Logos />
      </motion.div>
    </section>
  );
};

export default About;
