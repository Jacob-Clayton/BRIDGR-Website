'use client';

import Image from 'next/image';
import styles from '../styles';

const Hero = () => {

  return (
    <section id="Home" className={` h-screen flex mx-auto text-center ${styles.innerWidth}`}>
      <div className='flex sm:flex-row flex-col my-auto sm:gap-0 gap-10'>      
      <div className={`sm:w-3/4 w-full flex-col items-center self-center z-20`}>
          <p className={`${styles.heroHeading} sm:text-left text-center 2xl:px-0 sm:px-6 px-0`}>
            Accelerate your Web3 business
          </p>
          <div className='sm:mt-8 md:mt-10 mt-5 sm:mx-[0px] mx-auto xl:max-w-[700px] lg:max-w-[600px] md:max-w-[550px] sm:max-w-[500px] max-w-[500px]'>
          <p className= {`${styles.xPaddings} xl:w-3/4 sm:w-4/5 font-light sm:text-left text-center 2xl:text-2xl xl:text-xl md:text-xl sm:text-lg text-md text-off-white`}>
              We are a collective of Web3 companies offering our combined strength to help you grow.
            </p>
          </div>
          <div className="flex flex-row justify-center sm:justify-start gap-2">
            <div className='2xl:pl-0 px-6 sm:pr-8 sm:mt-8 md:mt-10 mt-5'>
                <button className="bg-off-white text-primary-black py-2 px-6 items-center flex flex-row rounded">
                  <a className={` text-sm sm:text-l md:text-xl font-normal hover:text-white cursor-pointer`} href="https://twitter.com/bridgrxyz">
                    Follow</a><Image src="/twitterB.svg" className="sm:w-[22px] sm:h-[22px] w-[18px] h-[18px] ml-3" width={20} height={20} alt="twitter"/>
                </button>
            </div>
            <div className='sm:mt-8 md:mt-10 mt-5'>
                <button className=' bg-violet text-off-white py-2 px-5 items-center flex flex-row rounded'>
                  <a className={` text-sm sm:text-l md:text-xl font-normal cursor-pointer`} href="#Contact">
                    Contact</a><Image src="/email.svg" className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] ml-3" width={20} height={20} alt="email"/>
                </button>
            </div>
          </div>
      </div>

      <div className='w-[320px] h-[1px] block sm:hidden rounded-2xl mx-auto bg-white bg-opacity-20 mb-5 mt-5' />
      {/* <div className='w-[1px] h-[460px] sm:block hidden rounded-2xl my-auto bg-white bg-opacity-20' /> */}
      <div className={`sm:w-1/4 mx-auto my-auto`}>
        <div className='flex sm:flex-row flex-col justify-end'>
        
        
          <div className="flex sm:flex-col items-center justify-center xl:gap-14 lg:gap-12 md:gap-14 sm:gap-14 gap-6 flex-row my-auto sm:h-screen 2xl:px-16 xl:px-14 lg:px-10 md:px-8 px-6 py-0">
            <div className=''>
              <p className={`flex flex-col font-light 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[16px] text-[15px] text-center text-secondary-white`}>
                <span className={`sm:mb-2 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-off-white font-bold`}>
                  10
                </span>
                Partners
              </p>
            </div>

            <div className=''>
              <p className={`flex flex-col font-light 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[16px] text-[15px] text-center text-secondary-white`}>
                <span className={`sm:mb-2 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-off-white font-bold`}>
                  250
                    <span className='ml-1 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg'>
                      K
                    </span>
                </span>
                Community
              </p>
            </div>

            <div className=''>
              <p className={`flex flex-col ${styles.descriptionText} text-center`}>
                <span className={`sm:mb-2 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-off-white font-bold`}>
                  Global
                </span>
                Web3 events
              </p>
            </div>

          </div>
        </div>
      </div>

      </div>
  </section>
);
};

export default Hero;
