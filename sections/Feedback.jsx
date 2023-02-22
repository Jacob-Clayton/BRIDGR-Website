'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#ffffff] border-opacity-[30%] relative"
      >
        <div className="feedback-gradient md:block hidden" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Kishor
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Founder of BRIDGR
          </p>
        </div>

        <p className="mt-[24px] font-normal xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] text-[16px] text-white">
          “Community is everything in Web3, it's also a struggle for companies joining. BRIDGR solves this. 
          We provide immideate access to a worldwide Web3 community ontop of the technical development, legal advice, 
          marketing and events exposure. ”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/planet-09.jpeg"
          alt="planet-09"
          className="w-full lg:block hidden lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
          width={1200}
          height={900}
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <a href='https://t.me/bridgr'>
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
