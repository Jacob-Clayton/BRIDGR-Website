'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import { useMediaQuery } from 'react-responsive';

const Events = () => {
  const isLgScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <section className={`${styles.paddings} relative z-10`} id="Events">
      <motion.div
        variants={staggerContainer}
        initial={isLgScreen ? 'hidden' : 'visible'}
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto sm:mt-20 mt-10 flex flex-col`}
      >
        <TitleText title={(<>Web3 Events</>)} textStyles="text-center" />
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          initial={isLgScreen ? 'hidden' : 'visible'}
          whileInView="show"
          className="mt-10 font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-center text-secondary-white"
        >
          Recieve worldwide exposure at our 'WEB3 SOCIAL' events. 
          Your company will be given a professional speech, promotional graphics on screens around the event, plus video and images for your own use.
          Come along and network with industry professionals from around the world over drinks. It's a blast!
          Follow us on <a href='http://twitter.com/brizgrxyz' className='text-white font-medium'> Twitter </a> to stay up to date.
        </motion.p>

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mx-auto sm:mt-[68px] mt-10 mb-10 flex w-full lg:h-full md:h-[390px] sm:h-[280px] h-400px"
        >
          <Image 
            src="/map-bare.png" 
            alt="map" 
            className="w-full h-full object-cover" 
            quality={100}
            width={1170}
            height={546}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Events;
