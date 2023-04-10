'use client';

import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { Poppins } from '@next/font/google';
import Image from 'next/image';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
    display: 'swap',
})

const Story = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
        <section className={`${styles.paddings} relative z-10`} id="Story">
            <div className='wave-blue'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#4386ff" fill-opacity="1" d="M0,128L120,112C240,96,480,64,720,64C960,64,1200,96,1320,112L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                </svg>
            </div>
            <motion.div 
                className={`${styles.innerWidth} mx-auto 2xl:mt-[150px] xl:mt-20 md:mt-20 sm:mt-10 mt-5`}
                variants={staggerContainer}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
            >
            <TitleText title={<>Our Story</>} textStyles="text-center" />
                <div className={`flex flex-row gap-10 mx-auto md:mt-10 mt-5`}>

                    <motion.div
                        variants={fadeIn('up', 'tween', 0.2, 1)}
                        className={`flex `}
                    >
                            <motion.p
                                variants={fadeIn('up', 'tween', 0.2, 1)}
                                className={`${poppins.variable} ${styles.descriptionText} font-poppins text-left`}
                            >
                                Our founders love Web3 and the potential of decentralized online systems. 
                                Unfortunately, we've witnessed good people losing time, energy, and resources to shady players. 
                                That's why, in late 2022, we created BRIDGR, a network of trustworthy Web3 companies 
                                working together to provide a more authentic and cooperative Web3 platform.
                            </motion.p>
                    </motion.div>

                </div>
                    
            </motion.div>
        </section>
    );
};

export default Story;
