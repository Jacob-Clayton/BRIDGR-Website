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
            {/* <div className="feedback-gradient overflow-visible z-0 lg:block hidden" /> */}
            <TitleText title={<>Our Story</>} textStyles="text-center" />

            <motion.div
                variants={staggerContainer}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto mt-10 flex flex-row gap-10`}
            >
                <div className='flex-1'>
                    <TypingText title="Story" textStyles="text-center" />
                    <motion.p
                        variants={fadeIn('up', 'tween', 0.2, 1)}
                        className="mt-2 border-[1px] border-white border-opacity-[20%] p-5 rounded-2xl mb-[50px] font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-left text-secondary-white"
                    >
                        Our founders love Web3 and the potential of decentralized online systems. 
                        Unfortunately, we've witnessed good people losing time, energy, and resources to shady players. 
                        That's why, in late 2022, we created BRIDGR, a network of trustworthy Web3 companies 
                        working together to provide a more authentic and cooperative Web3 platform.
                    </motion.p>
                </div>
            
                <div className='flex-1'>
                    <TypingText title="Mission" textStyles="text-center" />
                    <motion.p
                        variants={fadeIn('up', 'tween', 0.2, 1)}
                        className="mt-2 border-[1px] border-white border-opacity-[20%] p-5 rounded-2xl font-normal 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-left text-secondary-white"
                    >
                        BRIDGR's mission is to establish a cooperative Web3 ecosystem guided by positive values. 
                        We are convinced that by uniting a group of committed and reputable Web3 advocates, 
                        we can spark creativity and cooperation, leading to a more equitable and decentralized tomorrow. 
                        Our collective aspiration is to build an improved Web3 that benefits everyone.
                    </motion.p>
                </div>            
            </motion.div>

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
        </section>
    );
};

export default Story;
