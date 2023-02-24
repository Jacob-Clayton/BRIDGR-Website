'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
import { useMediaQuery } from 'react-responsive';

const GetStarted = () => {
  const isMdScreen = useMediaQuery({ minWidth: 768 });

  return (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial={isMdScreen ? 'hidden' : 'visible'}
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row-reverse flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How BRIDGR Works" />
        <TitleText title={<>Get started in just a few steps</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          <div className={`${styles.flexCenter} flex-row sm:w-[500px] w-[330px]`}>
            <div
              className={`${styles.flexCenter} sm:w-[60px] sm:h-[60px] w-[30px] h-[30px] rounded-[24px] bg-black bg-opacity-40`}
            >
              <p className="font-bold sm:text[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] text-[12px] text-white">
                01</p>
            </div>
            <p className="flex-1 ml-[20px] font-normal xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] text-[#B0B0B0] leading-[32.4px]">
              Get in touch with us via<a className='text-white' href='mailto:bridgrxyz@gmail.com'> email </a>or <a className='text-white' href='https://www.linkedin.com/company/bridgr-xyz'>linkedin</a></p>
          </div>
          <div className={`${styles.flexCenter} flex-row sm:w-[500px] w-[330px]`}>
            <div
              className={`${styles.flexCenter} sm:w-[60px] sm:h-[60px] w-[30px] h-[30px] rounded-[24px] bg-black bg-opacity-40`}
            >
              <p className="font-bold sm:text[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] text-[12px] text-white">
                02</p>
            </div>
            <p className="flex-1 ml-[20px] font-normal xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] text-[#B0B0B0] leading-[32.4px]">
              Tell us how we can help you,
              <br/> or enquire about joining our collective.</p>
          </div>
          <div className={`${styles.flexCenter} flex-row sm:w-[500px] w-[330px]`}>
            <div
              className={`${styles.flexCenter} sm:w-[60px] sm:h-[60px] w-[30px] h-[30px] rounded-[24px] bg-black bg-opacity-40`}
            >
              <p className="font-bold sm:text[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] text-[12px] text-white">
                03</p>
            </div>
            <p className="flex-1 ml-[20px] font-normal xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] text-[#B0B0B0] leading-[32.4px]">
              We’ll get to work together right away</p>
          </div>
            
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
          src="/get-started.png"
          alt="get-started"
          className="object-contain"
          quality={90}
          width={1333}
          height={833}
        />
      </motion.div>
    </motion.div>
  </section>
);
};

export default GetStarted;
