'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| Global Prescence" textStyles="text-center" />
      <TitleText
        title={(
          <>Come to a BRIDGR <br/>event near you.
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mx-auto sm:mt-[68px] mt-[35px] flex w-full lg:h-full md:h-[390px] sm:h-[280px] h-400px"
      >
        <Image 
          src="/map.png" 
          alt="map" 
          className="w-full h-full object-cover" 
          quality={100}
          width={1300}
          height={1000}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
