'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TitleText } from '../components';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const News = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });
    const { ref, inView } = useInView({ threshold: 0, triggerOnce: false });

    return (
        <section className={`${styles.paddings} relative z-10`} id="News">
            <div className="gradient-02 overflow-visible z-0 lg:block hidden" />
            <motion.div
                variants={staggerContainer}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                ref={ref}
                animate={inView ? "show" : "hidden"}
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
            <TitleText title={<>News</>} textStyles="text-center" />
                <div className="mt-10 flex flex-col gap-[30px]">

                    <motion.div 
                        variants={fadeIn('up', 'spring', 0.5, 1)}
                        initial={isLgScreen ? 'hidden' : 'visible'}
                        className="flex sm:flex-row flex-col gap-4"
                    >
                        <Image
                            src="/balinews.jpg"
                            alt="bali event"
                            className="lg:w-[200px] lg:h-[180px] w-[150px] h-[130px] rounded-[32px] object-cover"
                            width={220} height={200}
                        />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                                <h4 className="font-normal 2xl:text-[31px] xl:text-[30px] lg:text-[28px] md:text-[24px] sm:text-[22px] text-[20px] text-white">
                                    Beachside in Bali </h4>
                                <p className="mt-[16px] font-normal 2xl:text-[20px] xl:text-[19px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] text-secondary-white">
                                    We went all tropical and decided to throw a huge red carpet event at the Lighthouse Studios Bali on 
                                    Feb 24th 2023.</p>
                            </div>
                            <a href='https://twitter.com/Bridgrxyz/status/1625104846675386369?s=20'>
                                <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white">
                                        <img src="/arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain"/> 
                                </div>
                            </a>  
                        </div>
                    </motion.div>

                    <motion.div variants={fadeIn('up', 'spring', 0.5, 1)} className="flex sm:flex-row flex-col gap-4">
                        <Image
                            src="/singaporefeb.jpg"
                            alt="singapore event"
                            className="lg:w-[200px] lg:h-[180px] w-[150px] h-[130px] rounded-[32px] object-cover"
                            width={220} height={200}
                        />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                                <h4 className="font-normal 2xl:text-[31px] xl:text-[30px] lg:text-[28px] md:text-[24px] sm:text-[22px] text-[20px] text-white">
                                    Singapore Social</h4>
                                <p className="mt-[16px] font-normal 2xl:text-[20px] xl:text-[19px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] text-secondary-white">
                                    Singapore's first NFT bar, The Parlour Singapore, hosted another fantastic sold out 'WEB3 SOCIAL' on 
                                    Feb 3rd 2023.</p>
                            </div>
                            <a href='https://twitter.com/Bridgrxyz/status/1622586625552429057?s=20'>
                                <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white">
                                        <img src="/arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain" /> 
                                </div>
                            </a>  
                        </div>
                    </motion.div>

                    <motion.div variants={fadeIn('up', 'spring', 0.5, 1)} className="flex sm:flex-row flex-col gap-4">
                        <Image
                            src="/istanbulnews.jpg"
                            alt="istanbul event"
                            className="lg:w-[200px] lg:h-[180px] w-[150px] h-[130px] rounded-[32px] object-cover"
                            width={220} height={200}
                        />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                                <h4 className="font-normal 2xl:text-[31px] xl:text-[30px] lg:text-[28px] md:text-[24px] sm:text-[22px] text-[20px] text-white">
                                    Istanbul Blockchain Week</h4>
                                <p className="mt-[16px] font-normal 2xl:text-[20px] xl:text-[19px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] text-secondary-white">
                                    BRIDGR hosted the official Blockchain Week afterparty at one of our good friend's bar, Youplace, on 
                                    Nov 14th 2022.</p>
                            </div>
                            <a href='https://twitter.com/Bridgrxyz/status/1592214170996703232?s=20'>
                                <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white">
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