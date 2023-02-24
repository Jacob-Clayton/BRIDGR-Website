'use client';

import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const Story = () => {
    const isMdScreen = useMediaQuery({ minWidth: 768 });

    return (
        <section className={`${styles.paddings} relative z-10`} id="Story">
            <motion.div
            variants={staggerContainer}
            initial={isMdScreen ? 'hidden' : 'visible'}
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
            <TypingText title="| Origins " textStyles="text-center" />
            <TitleText title={<>The Story Behind BRIDGR</>} textStyles="text-center" />
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="mt-8 mb-[50px] font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-center text-secondary-white"
            >
                Our founders are passionate about Web3 and the endless possibilities of decentralised 
                online ecosystems powered by blockchain. At the same time, we are saddened whenever we see time, energy, 
                and money being lost to the bad apples of this Space. So, we started BRIDGR to create a positive movement of 
                like-minded & well-established Web3 enthusiasts who are here for the right reasons.
            </motion.p>
            <TypingText title="| Fine Print " textStyles="text-left ml-10 mb-5" />
            <motion.div 
                className='' 
                id='team'
                variants={fadeIn('left', 'tween', 0.2, 1)}
            >
                    <div className='flex flex-row items-center'>     
                        <div className='relative'>
                            <a href="https://jacobclayton.gitbook.io/bridgr-services/bridgr-collective/partner-program">
                                <button type="button" className="flex py-3 px-6 bg-black bg-opacity-40 rounded-[32px] gap-[12px]">
                                    <img
                                    src="/book.svg"
                                    alt="book"
                                    className="hidden sm:block w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[23px] md:h-[23px] lg:w-[24px] lg:h-[24px] xl:w-[25px] xl:h-[25px] object-contain"
                                    />
                                    <span className="font-normal text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] text-white">
                                        Docs
                                    </span>
                                </button>
                            </a>
                        </div>
                        <motion.p
                            variants={fadeIn('up', 'tween', 0.2, 1)}
                            className="ml-5 text-center font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-secondary-white"
                        >
                            Read more about all our services and business model
                        </motion.p>
                    </div>
            </motion.div>
            </motion.div>
        </section>
    );
};

export default Story;
