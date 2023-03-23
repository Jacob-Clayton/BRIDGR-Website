'use client';

import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import Image from 'next/image';
import { Urbanist } from '@next/font/google';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const Story = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
        <section className={`${styles.paddings} relative z-10`} id="Story">
            <div className="feedback-gradient overflow-visible z-0 lg:block hidden" />
            <motion.div
                variants={staggerContainer}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto mt-10 flex flex-col`}
            >
            <TitleText title={<>Our Story</>} textStyles="text-center" />
            <TypingText title="| Origins " textStyles="text-left mt-10" />
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="mt-4 mb-[50px] font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-left text-secondary-white"
            >
                Our founders are passionate about Web3 and the endless possibilities of decentralised 
                online ecosystems powered by blockchain. At the same time, we are saddened whenever we see time, energy, 
                and money being lost to the bad apples of this Space. So, in late 2022 we started BRIDGR, 
                a collective of well-established and morally sound Web3 companies.
                For a better, genuine and collaborative Web3.
            </motion.p>
            
            <TypingText title="| Mission " textStyles="text-left" />
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="mt-4 font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-left text-secondary-white"
            >
                BRIDGR aims to build a thriving and collaborative Web3 ecosystem that is driven by the right motives. 
                We believe that by bringing together a community of like-minded and well-established Web3 enthusiasts, 
                we can drive innovation and collaboration towards a more equitable and decentralized future. 
                Together, we are determined to build a better Web3 for all.
            </motion.p>

                <motion.div 
                    className='flex flex-col mt-20 justify-center items-center'
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                >  
                    <div>
                        <p className="flex flex-col font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[14px] text-center text-secondary-white">
                            <span className=" mb-1 lg:text-3xl md:text-2xl text-xl text-off-white font-bold">
                                We are the<span className={`${urbanist.variable} font-urbanist lg:text-4xl md:text-3xl text-2xl text-off-white font-extrabold`}> BRIDGR </span> 
                                collective</span>
                            Together we are stronger
                        </p>
                    </div>
                    <div className='relative mt-3'>
                        <button className='bridgr-blue hover:bg-blue-800 text-off-white py-2 px-6 items-center flex flex-row rounded-2xl duration-500'>
                            <a className= "text-sm sm:text-l md:text-xl font-medium hover:text-white duration-400 cursor-pointer" href="https://t.me/bridgr">
                            Join us</a><Image src="/telegram.svg" className="sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] ml-3" width={20} height={20} />
                        </button>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Story;
