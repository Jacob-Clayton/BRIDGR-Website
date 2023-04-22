'use client';

import { TitleText, ContactForm, Newsletter } from '../components';
import styles from '../styles';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { Urbanist, Poppins } from '@next/font/google';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
	display: 'swap',
})


export default function Contact() {  
  const isLgScreen = useMediaQuery({ minWidth: 1024 });
  
  return (
    <section className={`${styles.paddings} relative z-10`} id='Contact'>
      <div className={`${styles.innerWidth} mx-auto`}>
        <TitleText title={<>Contact</>} textStyles="text-center sm:mb-10 mb-5" />
        <p className={`${styles.descriptionText} ${poppins.variable} font-poppins text-center`}>
          Connect with us via the contact form, send us an 
            <a href='mailto:bridgrxyz@gmail.com' className='text-white font-medium'> email </a>
          or book a 30-minute
            <a href='https://calendly.com/bridgrxyz/30min-call' className='text-white font-medium'> call </a>
          to talk to us face to face.
        </p>
        <motion.div 
          className='sm:mt-10 mt-5 flex flex-col lg:flex-row w-full items-center justify-around'
          variants={fadeIn('up', 'tween', 0.2, 1)}
          initial={isLgScreen ? 'hidden' : 'visible'}
          viewport={{ once: false, amount: 0.01 }}
          whileInView="show"
        >
          <ContactForm />
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
