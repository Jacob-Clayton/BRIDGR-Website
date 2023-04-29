'use client';

import Image from 'next/image';
import styles from '../styles';
import localFont from '@next/font/local';

const britanica = localFont({ 
	src: '../public/fonts/Britanica-BlackSemiExpanded.ttf',
  weight: '900',
	variable: '--font-britanica',
	display: 'swap',
});

const Hero = () => {

  return (
    <section id="Home" className={` h-screen flex mx-auto text-center ${styles.innerWidth} ${britanica.variable} `}>
      <div className='flex sm:flex-row flex-col my-auto sm:gap-0 gap-10'>      
      <div className={`sm:w-3/4 w-full flex-col items-center self-center z-20`}>
          <p className={`${styles.heroHeading} font-britanica sm:text-left text-center 2xl:px-0 sm:px-6 px-0`}>
            Accelerate Your Web3 Business.
          </p>
          <div className='sm:mt-6 md:mt-8 mt-5 sm:mx-[0px] mx-auto xl:max-w-[700px] lg:max-w-[600px] md:max-w-[550px] sm:max-w-[500px] max-w-[500px]'>
          <p className= {`${styles.xPaddings} xl:w-3/4 sm:w-4/5 font-light sm:text-left text-center 2xl:text-2xl xl:text-xl md:text-xl sm:text-lg text-md text-off-white`}>
              We are a collective of Web3 companies offering our combined strength to help you grow.
            </p>
          </div>
          <div className={`${styles.xPaddings} flex flex-row justify-center sm:justify-start sm:gap-8 gap-6 sm:mt-8 md:mt-10 mt-6`}>
            <div className=''>
                <button className="bg-off-white text-primary-black py-2 px-6 items-center flex flex-row rounded">
                  <a className={` text-sm sm:text-lg md:text-xl font-normal cursor-pointer`} href="https://twitter.com/bridgrxyz">
                    Follow</a><Image src="/twitterB.svg" className="sm:w-[22px] sm:h-[22px] w-[18px] h-[18px] ml-3" width={20} height={20} alt="twitter"/>
                </button>
            </div>
            <div className=''>
                <button className=' bg-violet text-off-white py-2 px-5 items-center flex flex-row rounded'>
                  <a className={` text-sm sm:text-lg md:text-xl font-normal cursor-pointer`} href="#Contact">
                    Contact</a><Image src="/email.svg" className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] ml-3" width={20} height={20} alt="email"/>
                </button>
            </div>
          </div>
      </div>

      <div className='w-[320px] h-[1px] block sm:hidden rounded-2xl mx-auto bg-white bg-opacity-20 mb-5 mt-5' />
      <div className='w-[1px] h-[360px] sm:block hidden rounded-2xl my-auto bg-white bg-opacity-20' />
        <div className='sm:w-1/4 flex sm:flex-row flex-col text-off-white text-center'>
        
          <div className="flex sm:flex-col flex-row items-center justify-center mx-auto my-auto xl:gap-14 lg:gap-12 md:gap-14 sm:gap-14 gap-6">
            <div className=''>
              <p className={`flex flex-col ${styles.descriptionText}`}>
                <span className={`font-britanica sm:mb-1 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl`}>
                  10
                </span>
                Partners
              </p>
            </div>

            <div className=''>
              <p className={`flex flex-col ${styles.descriptionText}`}>
                <span className={`font-britanica sm:mb-1 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl`}>
                  250
                    <span className='font-britanica sm:ml-1 ml-[1px] xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-sm'>
                      K
                    </span>
                </span>
                Community
              </p>
            </div>

            <div className=''>
              <p className={`flex flex-col ${styles.descriptionText}`}>
                <span className={`font-britanica sm:mb-1 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl`}>
                  Global
                </span>
                Web3 events
              </p>
            </div>

          </div>
        </div>

      </div>
  </section>
);
};

export default Hero;
