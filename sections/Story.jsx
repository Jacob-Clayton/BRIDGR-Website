'use client';

import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import Image from 'next/image';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const Story = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
        <TypingText title="| Story " textStyles="text-center" />
        <TitleText title={<>The Story behind BRIDGR</>} textStyles="text-center" />
        <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-8 mb-[50px] font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-center text-secondary-white"
        >
            BRIDGR’s founders are all passionate about Web3 and the endless possibilities enabled through decentralised 
            online ecosystems powered by blockchain. At the same time, we are saddened whenever we see time, energy, 
            and money being lost to the bad apples of this Space. So, we started BRIDGR to create a positive movement of 
            like-minded & well-established Web3 enthusiasts who are here for the right reasons.
        </motion.p>
        <TypingText title="| Fine Print " textStyles="text-left ml-10 mb-5" />
        <motion.div 
            className='' 
            id='team'
            variants={fadeIn('left', 'tween', 0.2, 1)}
            initial="hidden"
            whileInView="show"
        >

                <div className='flex flex-row items-center'>     
                    <div className='relative'>
                        <a href="https://jacobclayton.gitbook.io/bridgr-services/bridgr-collective/partner-program">
                            <button type="button" className="flex py-4 px-6 bg-black bg-opacity-40 rounded-[32px] gap-[12px]">
                                <img
                                src="/book.svg"
                                alt="book"
                                className="w-[24px] h-[24px] object-contain"
                                />
                                <span className="font-normal text-[16px] text-white">
                                    Whitepaper
                                </span>
                            </button>
                        </a>
                    </div>
                    <motion.p
                        variants={fadeIn('up', 'tween', 0.2, 1)}
                        className="ml-3 text-center font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-secondary-white"
                    >
                        Read more about all our services and business model
                    </motion.p>
                </div>
        </motion.div>
        </motion.div>
    </section>
);

export default Story;
