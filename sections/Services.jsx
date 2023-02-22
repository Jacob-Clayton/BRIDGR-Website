'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const Services = () => {
    const isMdScreen = useMediaQuery({ minWidth: 768 });

    return (
        <section className='mb-20' id="explore">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
            <TypingText title="| Services" textStyles="text-center" />
            <TitleText
                title={<>Our Services<br className="md:block hidden" /></>}
                textStyles="text-center"
            />
                <motion.div 
                    className='place-items-center grid grid-cols-1 lg:grid-cols-2 sm:gap-18 gap-1 sm:mt-12 md:mt-16 mt-8' 
                    id='team'
                    variants={fadeIn('up', 'tween', 0.3, 1)}
                    initial={isMdScreen ? 'hidden' : 'visible'}
                    whileInView="show"
                >
                    <div className=" relative max-w-max sm:max-w-[500px] md:max-w-[680px] lg:max-w-[490px] xl:max-w-max 2xl:max-w-max ml-[20px] mr-[20px]">
                        <Image 
                            src='/planet-01.png' 
                            alt="Global Events" 
                            className="max-w-[200px] sm:max-w-[400px] md:max-w-[420px] lg:max-w-[370px] xl:max-w-[380px] 2xl:max-w-[400px] mx-auto rounded-bl-[35px] rounded-br-[35px] sm:rounded-tr-[0px] sm:rounded-tl-[0px] rounded-tr-[35px] rounded-tl-[35px]"
                            quality={100}
                            width={1000}
                            height={625}
                        />
                        <div class="relative overflow-hidden w-full bottom-0 left-0 py-3 px-6 rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-tl-[35px]">
                            <p class="mb-2 text-center font-bold text-white text-[1rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] ">
                                Global Events</p>
                            <p class="mb-0 font-regular text-secondary-white text-[0.8rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.1rem] xl:text-[1.2rem]">
                                Get real-world exposure at our 'WEB3 SOCIAL' events worldwide. Filled with founders, 
                                investors and professionals it's the perfect environment to network 
                                and get the word out about your company. 
                                <a href='https://jacobclayton.gitbook.io/bridgr-services/services/global-events' className='text-white'> Read more...</a></p>
                        </div>
                    </div>
                
                    <div className="relative max-w-max sm:max-w-[500px] md:max-w-[680px] lg:max-w-[490px] xl:max-w-max 2xl:max-w-max ml-[20px] mr-[20px]">
                        <Image 
                            src='/planet-02.png' 
                            alt="Web3 Acceleration" 
                            className=" max-w-[200px] sm:max-w-[400px] md:max-w-[420px] lg:max-w-[370px] xl:max-w-[380px] 2xl:max-w-[400px] mx-auto rounded-bl-[35px] rounded-br-[35px] sm:rounded-tr-[0px] sm:rounded-tl-[0px] rounded-tr-[35px] rounded-tl-[35px]"
                            quality={100}
                            width={1000}
                            height={625}
                        />
                        <div class="relative overflow-hidden w-full bottom-0 left-0 py-3 px-6 rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-tl-[35px]">
                            <p class='mb-2 text-center font-bold text-white text-[1rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]'>
                                Web3 Acceleration</p>
                            <p class='mb-0 font-regular text-secondary-white text-[0.8rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.1rem] xl:text-[1.2rem]'>
                                We offer: Web development, smart contract builds & audits, metaverse game integration, events exposure, Web3 legal services, 
                                a network of Web3 professionals to tap into, community building and marketing services 
                                including celebrity & influencer access. 
                                <a href='https://jacobclayton.gitbook.io/bridgr-services/services/web3-acceleration' className='text-white'> Read more...</a></p>
                        </div>
                    </div>
                
                    <div className="relative max-w-max sm:max-w-[500px] md:max-w-[680px] lg:max-w-[490px] xl:max-w-max 2xl:max-w-max ml-[20px] mr-[20px]">
                        <Image 
                            src='/planet-04.png' 
                            alt="Shared Community" 
                            className="max-w-[200px] sm:max-w-[400px] md:max-w-[420px] lg:max-w-[370px] xl:max-w-[380px] 2xl:max-w-[400px] mx-auto rounded-bl-[35px] rounded-br-[35px] sm:rounded-tr-[0px] sm:rounded-tl-[0px] rounded-tr-[35px] rounded-tl-[35px]"
                            quality={100}
                            width={1000}
                            height={625}
                        />
                        <div class="relative overflow-hidden w-full bottom-0 left-0 py-3 px-6 rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-tl-[35px]">
                            <p className='mb-2 text-center font-bold text-white text-[1rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]'>
                                Shared Community</p>
                            <p className='mb-0 font-regular text-secondary-white text-[0.8rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.1rem] xl:text-[1.2rem] '>
                                Share our network of multiple well-established communities worldwide, and reap the 
                                benefits of the exposure that comes with it. 
                                <a href='https://jacobclayton.gitbook.io/bridgr-services/services/shared-community' className='text-white'> Read more...</a></p>
                        </div>
                    </div>
                
                    <div className="relative max-w-max sm:max-w-[500px] md:max-w-[680px] lg:max-w-[490px] xl:max-w-max 2xl:max-w-max ml-[20px] mr-[20px]">
                        <Image 
                            src='/planet-03.png' 
                            alt="Web3 Onboarding" 
                            className="max-w-[200px] sm:max-w-[400px] md:max-w-[420px] lg:max-w-[370px] xl:max-w-[380px] 2xl:max-w-[400px] mx-auto rounded-bl-[35px] rounded-br-[35px] sm:rounded-tr-[0px] sm:rounded-tl-[0px] rounded-tr-[35px] rounded-tl-[35px]"
                            quality={100}
                            width={1000}
                            height={625}
                        />
                        <div class="relative overflow-hidden w-full bottom-0 left-0 py-3 px-6 rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-tl-[35px]">
                            <p className='mb-2 text-center font-bold text-white text-[1rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]'>
                                Web3 Onboarding</p>
                            <p className='mb-0 font-regular text-secondary-white text-[0.8rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.1rem] xl:text-[1.2rem] '>
                                Bridge from Web2 to Web3 with our full onboarding service. 
                                <a href='https://jacobclayton.gitbook.io/bridgr-services/services/web3-onboarding' className='text-white'> Read more...</a></p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Services;
