'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const News = () => (
    <section className={`${styles.paddings} relative z-10`} id="News">
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
        <TypingText title="| News" textStyles="text-center" />
        <TitleText title={<>What we're up to</>} textStyles="text-center" />

            <div className="mt-[50px] flex flex-col gap-[30px]">
                <motion.div
                    variants={fadeIn('up', 'spring', 0.5, 1)}
                    className="flex md:flex-row flex-col gap-4"
                >
                    <img
                    src="/balinews.jpg"
                    alt="bali event"
                    className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
                    />
                    <div className="w-full flex justify-between items-center">
                        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                            <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
                            BRIDGR goes to Bali
                            </h4>
                            <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                            We've gone tropical
                            </p>
                        </div>
                        
                        <a href='https://twitter.com/Bridgrxyz/status/1625104846675386369?s=20'>
                            <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
                                    <img
                                        src="/arrow.svg"
                                        alt="arrow"
                                        className="w-[40%] h-[40%] object-contain"
                                    /> 
                            </div>
                        </a>  
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
);

export default News;