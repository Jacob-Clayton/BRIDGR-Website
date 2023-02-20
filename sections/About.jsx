'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
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
