'use client';

import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const Story = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
        <section className={`${styles.paddings} relative z-10`} id="Story">
            <div className='wave-blue'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#4386ff" fill-opacity="1" d="M0,128L120,112C240,96,480,64,720,64C960,64,1200,96,1320,112L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                </svg>
            </div>
            {/* <div className="feedback-gradient overflow-visible z-0 lg:block hidden" /> */}
            <motion.div 
                className='md:mt-20 sm:mt-10 mt-5'
                variants={staggerContainer}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
            <TitleText title={<>Our Story</>} textStyles="text-center" />
                <motion.div
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className={`${styles.innerWidth} mx-auto md:mt-10 mt-5 flex md:flex-row flex-col md:gap-10`}
                >
                    <div className='mx-auto'>
                        {/* <TypingText title="Story" textStyles="text-center" /> */}
                        <motion.p
                            variants={fadeIn('up', 'tween', 0.2, 1)}
                            className="mb-10 font-normal 2xl:text-[21px] xl:text-xl md:text-lg text-md text-center text-secondary-white"
                        >
                            Our founders love Web3 and the potential of decentralized online systems. 
                            Unfortunately, we've witnessed good people losing time, energy, and resources to shady players. 
                            That's why, in late 2022, we created BRIDGR, a network of trustworthy Web3 companies 
                            working together to provide a more authentic and cooperative Web3 platform.
                        </motion.p>
                    </div>
                
                    {/* <div className='flex-1'>
                        <TypingText title="Mission" textStyles="text-center" />
                        <motion.p
                            variants={fadeIn('up', 'tween', 0.2, 1)}
                            className="mt-2 border-[1px] border-white border-opacity-[20%] p-5 rounded-2xl font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-left text-secondary-white"
                        >
                            BRIDGR's mission is to establish a cooperative Web3 ecosystem guided by positive values. 
                            We are convinced that by uniting a group of committed and reputable Web3 advocates, 
                            we can spark creativity and cooperation, leading to a more equitable and decentralized tomorrow. 
                            Our collective aspiration is to build an improved Web3 that benefits everyone.
                        </motion.p>
                    </div>             */}
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Story;
