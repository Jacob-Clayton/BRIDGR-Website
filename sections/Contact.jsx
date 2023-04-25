'use client';

import { TitleText, ContactForm } from '../components';
import styles from '../styles';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { Poppins } from '@next/font/google';
import { useMediaQuery } from 'react-responsive';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
	display: 'swap',
})


export default function Contact() {  
  const isLgScreen = useMediaQuery({ minWidth: 1024 });
  
  return (
    <section className={`${styles.paddings} ${poppins.variable} relative z-10`} id='Contact'>
      <div className={`${styles.innerWidth} mx-auto`}>
        <TitleText title={<>Contact</>} textStyles="text-center" />
        <motion.div 
          className='flex relative sm:flex-row flex-col gap-10 mx-auto sm:mt-10 mt-5'
          variants={fadeIn('up', 'tween', 0.2, 1)}
          initial={isLgScreen ? 'hidden' : 'visible'}
          viewport={{ once: false, amount: 0.01 }}
          whileInView="show"
        >

          <div className='flex flex-col sm:w-1/2 w-full mx-auto text-secondary-white sm:py-2'>
            <p className={`${styles.descriptionText} font-poppins mx-auto lg:w-3/4 w-full text-center`}>
              Connect with us via the contact form, send an email or book a video call to talk to us face to face.
            </p>

            <div className="mx-auto md:mt-10 sm:mt-8 mt-5">
              <div className="space-y-4">

                <p className="flex items-center font-poppins">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-5 h-5 mr-2 sm:mr-6">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Based in Singapore</span>
                </p>
                
                <p className="flex items-center font-poppins">
                  <a href='https://calendly.com/bridgrxyz/30min-call' className='flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>Book a call</span>
                  </a>
                </p>
                
                <p className="flex items-center font-poppins">
                <a href='mailto:bridgrxyz@gmail.com' className='flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>bridgrxyz@gmail.com</span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className='flex sm:w-1/2 w-full mx-auto items-center'>
            <ContactForm />
          </div>

        </motion.div>
        
        {/* <motion.div 
          className='flex flex-col md:mt-10 mt-5 justify-center items-center'
          variants={fadeIn('up', 'tween', 0.2, 1)}
          initial={isLgScreen ? 'hidden' : 'visible'}
          viewport={{ once: false, amount: 0.01 }}
          whileInView="show"
        >  
          <div className=''>
            <p className="flex flex-col font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[14px] text-center text-secondary-white">
                <span className=" mb-1 lg:text-3xl md:text-2xl text-xl text-off-white font-bold">
                    We are the<span className={`${urbanist.variable} font-urbanist lg:text-4xl md:text-3xl text-2xl text-off-white font-extrabold`}> BRIDGR </span> 
                    collective</span>
                Together we are stronger
            </p>
          </div>
          <div className='relative mt-3'>
            <button className='border-[1px] border-white border-opacity-30 shadow-md hover:bg-slate-200 hover:bg-opacity-10 text-off-white py-1 px-5 items-center flex flex-row rounded-lg duration-500'>
                <a className= "font-normal xl:text-xl lg:text-lg md:text-md text-sm hover:text-white duration-400 cursor-pointer" href="https://t.me/bridgr">
                Join us</a><Image src="/telegram.svg" className="sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] ml-3" width={20} height={20} alt="telegram"/>
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};
