'use client';

import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { fadeIn, staggerContainer, footerVariants } from '../utils/motion';


const About = () => {
  const isLgScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <section className={`${styles.paddings} relative z-10`} id="About" >
      <div className="gradient-02 overflow-visible z-0 lg:block hidden" />
      <motion.div
        variants={staggerContainer}
        initial={isLgScreen ? 'hidden' : 'visible'}
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TitleText title={<>About Us</>} textStyles="text-center" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-10 font-light 2xl:text-[27px] xl:text-[26px] lg:text-[24px] md:text-[20px] sm:text-[19px] text-[15px] text-center text-secondary-white"
        >
          Looking to accelerate your growth in the world of Web3,
          or make the jump from Web2?
          <br/>Look no further than BRIDGR. We are a
          <span className="font-bold text-white"> collective </span> 
          of Web3 companies offering a unique 
          <span className="font-bold text-white"> collaborative </span> platform to accelerate your Web3 growth. 
          By partnering with us you'll gain access to our partner's combined services, communities and network.
          <br/> Let BRIDGR be the bridge to your Web3 success story.
        </motion.p>
        <motion.div 
          variants={footerVariants}
          initial={isLgScreen ? 'hidden' : 'visible'}
          whileInView="show"
          className='relative'
        >
        <div className="mt-20">
        <TypingText title="| Partners" textStyles="text-left" />
          <div className=' place-items-center grid grid-cols-4 md:grid-cols-9 sm:gap-10 md:gap-2 gap-6 sm:gap-y-6 gap-y-3'>
            <a className="p-1 col-span-1" href='https://apegang.art/'>
              <Image 
                src='/apegang.png' 
                alt="Ape Gang" 
                className="max-w-[80%]" 
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
                className="max-w-[80%]" 
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
                className="max-w-[80%]" 
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
                className="max-w-[80%]" 
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
                className="max-w-[80%]" 
                style={{opacity:'0.95'}}
                quality={100}
                width={832}
                height={372}
              />
            </a>
            <a className="p-1 col-span-1 md:block hidden" href="https://twitter.com/theparloursg">
            <Image 
              src='/parlourQR.png' 
              alt="The Parlour Global" 
              className="max-w-[70%]" 
              style={{opacity:'0.95'}}
              quality={100}
              width={600}
              height={500}
            />
            </a>
            <a className="p-1 col-span-1" href="">
              <Image 
                src='/bighaus.png' 
                alt="Bighaus" 
                className="max-w-[80%] max-h-14" 
                style={{opacity:'0.95'}}
                quality={100}
                width={1000}
                height={700}
              />
            </a>
            <a className="p-1 col-span-1" href="https://boredisland.group/">
              <Image 
                src='/boredislandgroup.png' 
                alt="Bored Island Group" 
                className="max-w-[80%]" 
                style={{opacity:'0.95'}}
                quality={100}
                width={1000}
                height={600}
              />
            </a>
            <a className="p-1 col-span-1" href="https://www.crowdfundjunction.com/">
              <Image 
                src='/cfj.png' 
                alt="Crowd Fund Junction" 
                className="max-w-[80%]" 
                style={{opacity:'0.95'}}
                quality={100}
                width={1240}
                height={399}
              />
            </a>
          </div>

      <div className="mt-10">
        <TypingText title="| Friends" textStyles="text-left" />
          <div className='mt-5 place-items-center grid grid-cols-4 md:grid-cols-9 sm:gap-10 md:gap-2 gap-6 sm:gap-y-6 gap-y-3'>
            <a className="p-1 col-span-1" href='https://www.edns.domains/'>
              <Image 
                src='/edns.png' 
                alt="EDNS" 
                className="max-w-[80%]" 
                style={{opacity:'0.95'}}
                quality={100}
                width={938}
                height={249}
              />
            </a>
          </div>
        </div>


        </div>
      </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
