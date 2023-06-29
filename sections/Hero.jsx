'use client';

import Image from 'next/image';
import Link from 'next/link';
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
          <p className={`${styles.heroHeading} font-britanica text-violet sm:text-left text-center 2xl:px-0 sm:px-6 px-0`}>
            Accelerate Your Web3 Business.
          </p>
          <div className='sm:mt-6 md:mt-8 mt-5 sm:mx-[0px] mx-auto'>
            <p className= {`${styles.xPaddings} font-regular 2xl:text-[24px] xl:text-[21px] md:text-lg sm:text-[17px] text-md 2xl:leading-[29px] xl:leading-[27px] lg:leading-[25px] md:leading-[23px] sm:leading-[22px] leading-[21px] text-off-white sm:w-2/3 sm:text-left text-center`}>
              We host Web3 events, panels and networking sessions around the world. Join us to headline them and connect your business to more people!
            </p>
          </div>
          <div className={`${styles.xPaddings} flex flex-row justify-center sm:justify-start sm:gap-8 gap-4 sm:mt-8 md:mt-10 mt-6`}>
            <button className="bg-violet border border-violet text-off-white py-2 px-6 items-center flex flex-row rounded">
              <Link className={`${styles.descriptionText}`} href="/apply/member">
                Join Us</Link>
            </button>
            <button className='border border-violet text-off-white py-2 px-6 items-center flex flex-row rounded'>
              <Link className={`${styles.descriptionText}`} href="/contact">
                Contact</Link>
            </button>
          </div>
      </div>

      <div className='w-[320px] h-[1px] block sm:hidden rounded-2xl mx-auto bg-white bg-opacity-20 mb-5 mt-5' />
      <div className='w-[1px] h-[350px] sm:block hidden rounded-2xl my-auto bg-white bg-opacity-20' />

        <div className='sm:w-1/4 flex sm:flex-row flex-col text-off-white text-center'>
        
          <div className="flex sm:flex-col flex-row items-center justify-center mx-auto my-auto xl:gap-14 lg:gap-12 md:gap-14 sm:gap-14 gap-6">
            <div className=''>
              <p className={`flex flex-col ${styles.descriptionText}`}>
                <span className={`font-britanica sm:mb-1 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl`}>
                  14
                </span>
                Members
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
