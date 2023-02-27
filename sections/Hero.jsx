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
    
    <section id="Home" className={`flex sm:flex-row flex-col mx-auto text-center sm:text-left pb-5 sm:pb-0 ${styles.innerWidth}`}>

      <motion.div 
        ref={ref}
        animate={inView ? "show" : "hidden"}
        variants={staggerContainer}
        initial={isLgScreen ? 'hidden' : 'visible'}
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className={`flex-2 ${styles.flexStart} flex-col mt-[28%] sm:mt-[17%] sm:mb-[4%] md:mt-[16%] md:mb-[1%] lg:mt-[10%] lg:mb-[0%] xl:mt-[12%] xl:mb-[6%] 2xl:mt-[16%] 2xl:mb-[10%] z-20`}
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
              className= {`${styles.xPaddings} sm:mt-8 md:mt-6 mt-5 max-w-[500px] font-normal 2xl:text-[20px] xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] text-left text-secondary-white`}
            >
              A collective of Web3 companies offering our combined services and communities to accelerate your growth.
            </motion.p>

            <div className='flex flex-row justify-center sm:justify-start'>
              <motion.div 
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className='sm:pl-16 pl-6 sm:pr-8 pr-4 sm:mt-8 md:mt-6 mt-5'
              >
                  <button className='bg-[#4AA1CF] hover:bg-[#67B4DC] text-white py-2 px-6 items-center flex flex-row rounded duration-500'>
                    <a className= "text-sm sm:text-l md:text-xl font-bold text-off-white duration-400 cursor-pointer " href="https://t.me/bridgr">
                      Join Us</a><Image src="/telegram.svg" className="sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] ml-4" width={20} height={20} />
                  </button>
              </motion.div>
              <motion.div 
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className='sm:mt-8 md:mt-6 mt-5'
              >
                  <button className='bg-[#4AA1CF] hover:bg-[#67B4DC] text-white py-2 px-6 items-center flex flex-row rounded duration-500'>
                    <a className= "text-sm sm:text-l md:text-xl font-bold text-off-white duration-400 cursor-pointer " href="mailto:bridgrxyz@gmail.com">
                      Contact</a><Image src="/email.svg" className="sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] ml-4" width={20} height={20} />
                  </button>
              </motion.div>
            </div>
          </div>
      </motion.div>

      <div className={`flex-1 flex sm:justify-end justify-center sm:px-6 sm:pt-20 md:px-14 md:px-8 md:pt-20 lg:px-10 lg:pt-20 xl:px-10 xl:pt-20 2xl:px-0 2xl:pt-20 px-4 pb-6 pt-12 sm:pb-0 sm:pb-0 items-center `}>
        <Image 
          src='/cover.png' 
          alt="cover" 
          quality={95}
          width={1600}
          height={1000}
          priority
          className="absolute w-[65%] sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[48%] 2xl:w-[40%] z-10 opacity-[94%]" 
        />
        <div className="absolute z-[0] w-[40%] h-[50%] rounded-full gradient-01 opacity-[25%] lg:block hidden" />
      </div>
  </section>
);
};

export default Hero;
