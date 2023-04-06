'use client';

import Image from 'next/image';
import styles from '../styles';
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
  display: 'swap',
})

const Hero = () => {

  return (
    <section id="Home" className={`h-screen flex flex-row mx-auto text-center ${styles.innerWidth} ${montserrat.variable} font-montserrat`}>
      <div 
        className={`${styles.flexStart} mx-auto flex-col self-center z-20`}
      >
        <div>
          <p className={`${styles.heroHeading} 2xl:px-0 sm:px-6 px-2`}>
            Accelerate your Web3 business
          </p>
          {/* <motion.h1 variants={textVariant(0.25)} className={`${styles.heroHeading} 2xl:px-0 px-6 flex-1`}>
            
          </motion.h1> */}
          <div className='mx-auto sm:mt-8 md:mt-10 mt-5 xl:max-w-[700px] lg:max-w-[600px] md:max-w-[550px] sm:max-w-[500px] max-w-[500px]'>
          <p className= {`${styles.xPaddings} font-normal text-center 2xl:text-2xl xl:text-xl md:text-lg text-md text-secondary-white`}>
              We are a collective of Web3 companies offering our combined strength to help you grow.
            </p>
          </div>
          

            <div className='flex flex-row justify-center'>
              <div className='2xl:pl-0 px-6 sm:pr-8 pr-4 sm:mt-8 md:mt-10 mt-5'>
                  <button className='border-[1px] border-white border-opacity-30 shadow-md hover:bg-white hover:bg-opacity-10 text-off-white py-2 px-6 items-center flex flex-row rounded-lg duration-500'>
                    <a className= "text-sm sm:text-l md:text-xl font-medium hover:text-white duration-400 cursor-pointer " href="https://t.me/bridgr">
                      Join us</a><Image src="/telegram.svg" className="sm:w-[22px] sm:h-[22px] w-[18px] h-[18px] ml-3" width={20} height={20} alt="telegram"/>
                  </button>
              </div>
              <div className='sm:mt-8 md:mt-10 mt-5'>
                  <button className='border-[1px] border-white border-opacity-30 shadow-md hover:bg-white hover:bg-opacity-10 text-off-white py-2 px-6 items-center flex flex-row rounded-lg duration-500'>
                    <a className= "text-sm sm:text-l md:text-xl font-medium hover:text-white duration-400 cursor-pointer " href="#Contact">
                      Contact</a><Image src="/email.svg" className="sm:w-[22px] sm:h-[22px] w-[18px] h-[18px] ml-3" width={20} height={20} alt="email"/>
                  </button>
              </div>
            </div>
          </div>
      </div>
      {/* <div className={`flex flex-1 mx-auto mt-0 sm:mt-[18%] md:mt-0 lg:mt-[2%] xl:mt-[2%] 2xl:mt-[4%] items-center sm:justify-end justify-center`}>
      <object className='absolute w-[85%] sm:w-[50%] md:w-[50%] lg:w-[45%] xl:w-[42%] 2xl:w-[38%] max-w-[900px] 2xl:right-[16%] z-10 opacity-[90%]' type="image/svg+xml" data="bridgrlogoanimatedslow.svg">
        <img src="bridgrlogoanimatedslow.svg" alt='bridgr logo animated'/>
      </object>
        <Image 
          src='/bridgrlogoanimated.svg' 
          alt="cover" 
          quality={95}
          width={1500}
          height={1500}
          priority
          className="absolute w-[85%] sm:w-[50%] md:w-[50%] lg:w-[45%] xl:w-[42%] 2xl:w-[36%] max-w-[900px] 2xl:right-[17%] z-10 opacity-[90%]" 
        />
      </div> */}
  </section>
);
};

export default Hero;
