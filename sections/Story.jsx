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
            <motion.div
                variants={staggerContainer}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
            <TypingText title="| Story " textStyles="text-center mt-8" />
            <TitleText title={<>Our Story</>} textStyles="text-center" />
            <TypingText title="| Origins " textStyles="text-left mt-8" />
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="mt-4 mb-[50px] font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-left text-secondary-white"
            >
                Our founders are passionate about Web3 and the endless possibilities of decentralised 
                online ecosystems powered by blockchain. At the same time, we are saddened whenever we see time, energy, 
                and money being lost to the bad apples of this Space. So, in late 2022 we started BRIDGR, 
                a positive movement of like-minded & well-established Web3 enthusiasts who are here for the right reasons.
                For a better, genuine and collaborative Web3.
            </motion.p>
            <TypingText title="| Mission " textStyles="text-left" />
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="mt-4 mb-[50px] font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-left text-secondary-white"
            >
                BRIDGR aims to build a thriving and collaborative Web3 ecosystem that is driven by the right motives. 
                We believe that by bringing together a community of like-minded and well-established Web3 enthusiasts, 
                we can drive innovation and collaboration towards a shared vision of a more equitable and decentralized future. 
                Together, we are determined to build a better Web3 for all.
            </motion.p>
            <motion.div 
                variants={fadeIn('left', 'tween', 0.2, 1)}
            >
                <div className='flex flex-row justify-center items-center'>

                
                    <div className='flex flex-col justify-center items-center'>  
                        <motion.p
                            variants={fadeIn('up', 'tween', 0.2, 1)}
                            className="text-center font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-white"
                        >
                            Read more about our full services and business model
                        </motion.p>   
                        <div className='relative'>
                            <a href="https://jacobclayton.gitbook.io/bridgr-services/bridgr-collective/partner-program">
                                <button type="button" className="flex py-3 px-6 mt-6 bg-black bg-opacity-40 rounded-[32px] gap-[12px]">
                                    <img
                                        src="/book.svg"
                                        alt="book"
                                        className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[23px] md:h-[23px] lg:w-[24px] lg:h-[24px] xl:w-[25px] xl:h-[25px] object-contain"
                                    />
                                    <span className="font-normal text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] text-white">
                                        Docs
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
            </motion.div>
        </section>
    );
};

export default Story;
