'use client';

import { motion } from 'framer-motion';
import { TitleText, CarouselElement } from '../components';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const Story = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
        <section>
            <div className={`${styles.innerWidth} mx-auto relative`}>
                <motion.section 
                    className={`${styles.xPaddings} flex flex-col`}
                    variants={staggerContainer}
                    initial={isLgScreen ? 'hidden' : 'visible'}
                    whileInView="show"
                    viewport={{ once: false, amount: 0.01 }}
                >
                <TitleText title={<>Our Story</>} textStyles="text-center" />

                <motion.p
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className={`${styles.descriptionText} md:mt-10 mt-5 lg:w-3/4 mx-auto text-center`}
                >
                    Our founders love Web3 and the possibilities it brings. 
                    Unfortunately, we've witnessed good people losing time and resources to shady players. 
                    That's why, in late 2022, we created BRIDGR, a network of trustworthy Web3 companies 
                    working together to provide a more authentic and cooperative Web3 platform.
                </motion.p>
                </motion.section>
                <CarouselElement/>
            </div>
            <div className='wave-blue2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#170c4d" fill-opacity="1" d="M0,128L120,112C240,96,480,64,720,64C960,64,1200,96,1320,112L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            </div>
        </section>
    );
};

export default Story;
