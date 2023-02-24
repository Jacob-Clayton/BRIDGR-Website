'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import { useMediaQuery } from 'react-responsive';

const Events = () => {
  const isMdScreen = useMediaQuery({ minWidth: 768 });

  return (
    <section className={`${styles.paddings} relative z-10`} id="Events">
      <motion.div
        variants={staggerContainer}
        initial={isMdScreen ? 'hidden' : 'visible'}
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Events" textStyles="text-center" />
        <TitleText title={(<>Web3 Events</>)} textStyles="text-center" />
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          initial={isMdScreen ? 'hidden' : 'visible'}
          whileInView="show"
          className="mt-8 font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-center text-secondary-white"
        >
          Come along to a 'WEB3 SOCIAL' event near you and network with industry professionals from around the world over drinks.
          <br/> Follow us on <a href='http://twitter.com/brizgrxyz' className='text-white'> Twitter </a> to stay up to date with our events.
        </motion.p>

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mx-auto sm:mt-[68px] mt-[35px] flex w-full lg:h-full md:h-[390px] sm:h-[280px] h-400px"
        >
          <Image 
            src="/map.png" 
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
