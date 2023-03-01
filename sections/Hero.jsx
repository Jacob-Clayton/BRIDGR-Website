'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const isLgScreen = useMediaQuery({ minWidth: 1024 });
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: false });

  return (
    <div className="bg-image">
    <section id="Home" className={`h-screen flex sm:flex-row flex-col mx-auto text-center sm:text-left ${styles.innerWidth}`}>

      <motion.div 
        ref={ref}
        animate={inView ? "show" : "hidden"}
        variants={staggerContainer}
        initial={isLgScreen ? 'hidden' : 'visible'}
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className={`flex-2 ${styles.flexStart} mx-auto flex-col mt-[28%] sm:mt-[17%] md:mt-[16%] lg:mt-[10%] xl:mt-[12%] 2xl:mt-[16%] z-20`}
      >
        <div>
          <motion.h1 variants={textVariant(0.2)} className={`${styles.heroHeading} sm:px-16 px-6 flex-1`}>
            The Best of Web3
          </motion.h1>
          <motion.h1 variants={textVariant(0.25)} className={`${styles.heroHeading} sm:px-16 px-6 flex-1`}>
            in one place
          </motion.h1>
        
          <motion.p
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className= {`${styles.xPaddings} sm:mt-8 md:mt-10 mt-5 lg:max-w-[550px] max-w-[500px] font-normal 2xl:text-[20px] xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] text-left text-secondary-white`}
            >
              A collective of Web3 companies offering our combined services and communities to accelerate your growth.
            </motion.p>

            <div className='flex flex-row justify-center sm:justify-start'>
              <motion.div 
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className='sm:pl-16 pl-6 sm:pr-8 pr-4 sm:mt-8 md:mt-10 mt-5'
              >
                  <button className='bg-[#4AA1CF] hover:bg-[#67B4DC] text-off-white py-2 px-6 items-center flex flex-row rounded duration-500'>
                    <a className= "text-sm sm:text-l md:text-xl font-bold hover:text-white duration-400 cursor-pointer " href="https://t.me/bridgr">
                      Join Us</a><Image src="/telegram.svg" className="sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] ml-4" width={20} height={20} />
                  </button>
              </motion.div>
              <motion.div 
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className='sm:mt-8 md:mt-10 mt-5'
              >
                  <button className='bg-[#4AA1CF] hover:bg-[#67B4DC] text-off-white py-2 px-6 items-center flex flex-row rounded duration-500'>
                    <a className= "text-sm sm:text-l md:text-xl font-bold hover:text-white duration-400 cursor-pointer " href="mailto:bridgrxyz@gmail.com">
                      Contact</a><Image src="/email.svg" className="sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] ml-4" width={20} height={20} />
                  </button>
              </motion.div>
            </div>
          </div>
      </motion.div>

      <div className={` flex-1 mx-auto mt-[8%] sm:mt-[17%] md:mt-[16%] lg:mt-[9%] xl:mt-[11%] 2xl:mt-[15%] flex sm:justify-end justify-center `}>
        <Image 
          src='/cover.png' 
          alt="cover" 
          quality={95}
          width={1600}
          height={1000}
          priority
          className="absolute w-[95%] sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[48%] 2xl:w-[44%] z-10 opacity-[90%]" 
        />
        <div className="absolute z-[0] w-[40%] h-[50%] rounded-full gradient-01 opacity-[25%] lg:block hidden" />
      </div>
  </section>
  </div>
);
};

export default Hero;
