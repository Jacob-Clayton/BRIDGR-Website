'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const News = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });
    const { ref, inView } = useInView({ threshold: 0, triggerOnce: false });

    return (
        <section className={`${styles.paddings} relative z-10`} id="News">
            <motion.div
                variants={staggerContainer}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                ref={ref}
                animate={inView ? "show" : "hidden"}
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
            <TypingText title="| News" textStyles="text-center" />
            <TitleText title={<>What we're up to</>} textStyles="text-center" />
                <div className="mt-[50px] flex flex-col gap-[30px]">

                    <motion.div variants={fadeIn('up', 'spring', 0.5, 1)}className="flex sm:flex-row flex-col gap-4">
                        <Image
                            src="/balinews.jpg"
                            alt="bali event"
                            className="w-[220px] h-[200px] rounded-[32px] object-cover"
                            width={220} height={200}
                        />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                                <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
                                    Beachside in Bali </h4>
                                <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                                    We went tropical and threw a huge red carpet event at the Lighthouse Studios Bali on 
                                    <span className='text-white'> 24th Feb 2023.</span></p>
                            </div>
                            <a href='https://twitter.com/Bridgrxyz/status/1625104846675386369?s=20'>
                                <div className="lg:flex hidden items-center justify-center w-[70px] h-[70px] rounded-full bg-transparent border-[1px] border-white">
                                        <img src="/arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain"/> 
                                </div>
                            </a>  
                        </div>
                    </motion.div>

                    <motion.div variants={fadeIn('up', 'spring', 0.5, 1)} className="flex sm:flex-row flex-col gap-4">
                        <Image
                            src="/singaporefeb.jpg"
                            alt="singapore event"
                            className="w-[220px] h-[200px] rounded-[32px] object-cover"
                            width={220} height={200}
                        />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                                <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
                                    Singapore Social</h4>
                                <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                                    Singapore's first NFT bar, The Parlour Singapore, hosted another one of our sold out 'WEB3 SOCIAL' events on 
                                    <span className='text-white'> Feb 3rd 2023.</span></p>
                            </div>
                            <a href='https://twitter.com/Bridgrxyz/status/1622586625552429057?s=20'>
                                <div className="lg:flex hidden items-center justify-center w-[70px] h-[70px] rounded-full bg-transparent border-[1px] border-white">
                                        <img src="/arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain" /> 
                                </div>
                            </a>  
                        </div>
                    </motion.div>

                    <motion.div variants={fadeIn('up', 'spring', 0.5, 1)} className="flex sm:flex-row flex-col gap-4">
                        <Image
                            src="/istanbulnews.jpg"
                            alt="istanbul event"
                            className="w-[220px] h-[200px] rounded-[32px] object-cover"
                            width={220} height={200}
                        />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                                <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
                                    Istanbul Blockchain Week</h4>
                                <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                                    BRIDGR hosted the official Blockchain Week afterparty at one of our good friend's bar, Youplace, on 
                                    <span className='text-white'> Nov 14th 2022.</span></p>
                            </div>
                            <a href='https://twitter.com/Bridgrxyz/status/1592214170996703232?s=20'>
                                <div className="lg:flex hidden items-center justify-center w-[70px] h-[70px] rounded-full bg-transparent border-[1px] border-white">
                                        <img src="/arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain"/> 
                                </div>
                            </a>  
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
};

export default News;