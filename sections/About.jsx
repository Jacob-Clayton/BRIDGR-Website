'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import Image from 'next/image';

import styles from '../styles';
import { fadeIn, staggerContainer, footerVariants } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0 md:block hidden" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Us" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal lg:text:-[35px] md:text-[30px] sm:text-[26px] text-[16px] text-center text-secondary-white"
      >
        Looking to accelerate your growth in the world of Web3?
        <br/>Look no further than BRIDGR. We are a 
        <span className="font-extrabold text-white"> collective </span> 
        of Web3 companies offering a unique 
        <span className="font-extrabold text-white"> cooperative </span> approach to growth. 
        By partnering with us, you'll tap into our global network of Web3 companies and gain access to our combined 
        services and communities. 
        <br/> Let BRIDGR be the bridge to your Web3 success story. 
      </motion.p>

      <motion.div 
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className='relative'
    >
      <div className="mt-20">
        <div className=' place-items-center grid grid-cols-3 md:grid-cols-6 sm:gap-18 gap-10 sm:mt-12 md:mt-16 mt-8'>
            <a className="p-1 col-span-1" href='https://apegang.art/'>
                <Image 
                  src='/apegang.png' 
                  alt="Ape Gang" 
                  className="" 
                  style={{opacity:'0.95'}}
                  quality={100}
                  width={938}
                  height={249}
                />
            </a>
            <a className="p-1 col-span-1" href='https://ethlas.com/'>
                <Image 
                  src='/ethlas.png' 
                  alt="Ethlas" 
                  className="" 
                  style={{opacity:'0.95'}}
                  quality={100}
                  width={1531}
                  height={681}
                />
            </a>
            <a className="p-1 col-span-1" href='https://madfornfts.com/'>
                <Image 
                  src='/madfornft.png' 
                  alt="Mad for NFTs" 
                  className="" 
                  style={{opacity:'0.95'}}
                  quality={100}
                  width={1092}
                  height={586}
                />
            </a>
            <a className="p-1 col-span-1" href='https://www.cryptofemale.org/'>
                <Image 
                  src='/cryptofemale.png' 
                  alt="Crypto Female" 
                  className="" 
                  style={{opacity:'0.85'}}
                  quality={100}
                  width={1000}
                  height={596}
                />
            </a>
            <a className="p-1 col-span-1" href='https://globalb.com.tr/'>
                <Image 
                  src='/globalb.png' 
                  alt="GlobalB" 
                  className="" 
                  style={{opacity:'0.95'}}
                  quality={100}
                  width={832}
                  height={372}
                />
            </a>
            <a className="p-1 col-span-1" href="https://www.crowdfundjunction.com/">
                <Image 
                  src='/cfj.png' 
                  alt="Crowd Fund Junction" 
                  className="" 
                  style={{opacity:'0.95'}}
                  quality={100}
                  width={1240}
                  height={399}
                />
            </a>
        </div>
      </div>
    </motion.div>

      {/* <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      /> */}
    </motion.div>
  </section>
);

export default About;
