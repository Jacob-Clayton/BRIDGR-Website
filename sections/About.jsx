'use client';

import { motion } from 'framer-motion';
import { Logos, TitleText } from '../components';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const About = () => {
  const isLgScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <section className={`${styles.paddings} relative z-10 `} id="About" >
      <motion.div
        variants={staggerContainer}
        initial={isLgScreen ? 'hidden' : 'visible'}
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className={`${styles.innerWidth} mx-auto flex-col md:mt-10 mt-5 ${styles.flexCenter}`}
      >
        <TitleText title={<>About Us</>} textStyles="text-center" />
        <motion.p
          variants={fadeIn('up', 'tween', 0.05, 1)}
          initial={isLgScreen ? 'hidden' : 'visible'}
          whileInView="show"
          viewport={{ once: false, amount: 0.01 }}
          className={`${styles.descriptionText} md:mt-10 mt-5 lg:w-3/4 w-full mx-auto text-center`}
        >
          The Bridgr collective is made up of 10 Web3 companies from around the world covering every area of the industry. 
          Each reputable and acomplished in their own right, when grouped as one we are formidable collective working to provide our members with everything needed to become a successful Web3 business.
        </motion.p>
        {/* <motion.div 
          className="mx-auto flex flex-row w-full md:mt-20 md:mb-20 mt-10 mb-10"
          variants={fadeIn('up', 'tween', 0.2, 1)}
        >

          <div className='flex-1'>
            <p className=" flex flex-col font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-center text-secondary-white">
              <span className={`${urbanist.variable} font-urbanist mb-2 xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl text-lg text-off-white font-extrabold`}>BRIDGR</span>
              Accelerates Web3 growth
            </p>
          </div>

          <div className='flex-1 px-2'>
            <p className=" flex flex-col font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-center text-secondary-white">
              <span className="mb-2 xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl text-lg text-off-white font-bold">10</span>
              Partner companies
            </p>
          </div>

          <div className='flex-1'>
            <p className=" flex flex-col font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[14px] text-center text-secondary-white">
              <span className="mb-2 xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl text-lg text-off-white font-bold">220,000<span className='ml-1 xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-md align-middle'>+</span></span>
              Combined community
            </p>
          </div>
        </motion.div> */}
        <div className='md:mt-10 mt-5'>
          <Logos />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
