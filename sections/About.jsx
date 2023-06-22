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
        <div className='lg:mt-12 md:mt-10 mt-5'>
          <Logos />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
