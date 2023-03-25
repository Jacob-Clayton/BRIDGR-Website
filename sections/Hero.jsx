'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import { useInView } from 'react-intersection-observer';
import { Montserrat, Poppins } from '@next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat'
})

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: '--font-poppins'
})


const Hero = () => {
  const isLgScreen = useMediaQuery({ minWidth: 1024 });
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: false });

  return (
    <div className="bg-image">
    <section id="Home" className={`h-screen flex sm:flex-row flex-col mx-auto text-center sm:text-left ${styles.innerWidth} ${montserrat.variable} font-montserrat`}>

      <motion.div 
        ref={ref}
        animate={inView ? "show" : "hidden"}
        variants={staggerContainer}
        initial={isLgScreen ? 'hidden' : 'visible'}
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className={`flex-2 ${styles.flexStart} mx-auto flex-col sm:self-center mt-[38%] sm:mt-[17%] md:mt-0 z-20`}
      >
        <div>
          <motion.h1 variants={textVariant(0.2)} className={`${styles.heroHeading} 2xl:px-0 px-6 flex-1`}>
            The Best of Web3
          </motion.h1>
          <motion.h1 variants={textVariant(0.25)} className={`${styles.heroHeading} 2xl:px-0 px-6 flex-1`}>
            in one place
          </motion.h1>
        
          <motion.p
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className= {`${styles.xPaddings} sm:mt-8 md:mt-10 font-normal text-center mt-5 lg:max-w-[550px] max-w-[500px] 2xl:text-[21px] xl:text-xl md:text-lg text-md sm:text-left text-secondary-white`}
            >
              A collective of Web3 companies offering our combined services and communities to help you grow.
            </motion.p>

            <div className='flex flex-row justify-center sm:justify-start'>
              <motion.div 
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className='2xl:pl-0 px-6 sm:pr-8 pr-4 sm:mt-8 md:mt-10 mt-5'
              >
                  <button className='border-[2px] border-white border-opacity-20 shadow-md hover:bg-blue-800 hover:bg-opacity-30 text-off-white py-2 px-6 items-center flex flex-row rounded-2xl duration-500'>
                    <a className= "text-sm sm:text-l md:text-xl font-medium hover:text-white duration-400 cursor-pointer " href="https://t.me/bridgr">
                      Join us</a><Image src="/telegram.svg" className="sm:w-[22px] sm:h-[22px] w-[18px] h-[18px] ml-3" width={20} height={20} />
                  </button>
              </motion.div>
              <motion.div 
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className='sm:mt-8 md:mt-10 mt-5'
              >
                  <button className='border-[2px] border-white border-opacity-20 shadow-md hover:bg-blue-800 hover:bg-opacity-30 text-off-white py-2 px-6 items-center flex flex-row rounded-2xl duration-500'>
                    <a className= "text-sm sm:text-l md:text-xl font-medium hover:text-white duration-400 cursor-pointer " href="mailto:bridgrxyz@gmail.com">
                      Contact</a><Image src="/email.svg" className="sm:w-[19px] sm:h-[19px] w-[16px] h-[16px] ml-3" width={20} height={20} />
                  </button>
              </motion.div>
            </div>
          </div>
      </motion.div>

      <div className={`flex flex-1 mx-auto mt-0 sm:mt-[18%] md:mt-0 lg:mt-[2%] xl:mt-[2%] 2xl:mt-[4%] items-center sm:justify-end justify-center`}>
      <object className='absolute w-[85%] sm:w-[50%] md:w-[50%] lg:w-[45%] xl:w-[42%] 2xl:w-[38%] max-w-[900px] 2xl:right-[16%] z-10 opacity-[90%]' type="image/svg+xml" data="bridgrlogoanimatedslow.svg">
        <img src="bridgrlogoanimatedslow.svg" />
      </object>
        {/* <Image 
          src='/bridgrlogoanimated.svg' 
          alt="cover" 
          quality={95}
          width={1500}
          height={1500}
          priority
          className="absolute w-[85%] sm:w-[50%] md:w-[50%] lg:w-[45%] xl:w-[42%] 2xl:w-[36%] max-w-[900px] 2xl:right-[17%] z-10 opacity-[90%]" 
        /> */}
        <div className="absolute z-[0] w-[40%] h-[50%] rounded-full gradient-01 opacity-[25%] lg:block hidden" />
      </div>
  </section>
  </div>
);
};

export default Hero;
