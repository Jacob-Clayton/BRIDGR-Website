'use client';

import { motion } from 'framer-motion';
import { TitleText, CarouselElement } from '../components';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const Story = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
        <section id='Story' className='relative xl:pb-20 md:pb-10 pb-5'>
            <div className={`${styles.innerWidth} mx-auto xl:mt-20 md:mt-10 mt-5 relative`}>
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
        </section>
    );
};

export default Story;
