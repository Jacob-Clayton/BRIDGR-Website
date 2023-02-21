'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const Services = () => {

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
                className=' place-items-center grid grid-cols-1 lg:grid-cols-2 sm:gap-18 gap-5 sm:mt-12 md:mt-16 mt-8' 
                id='team'
                variants={fadeIn('up', 'tween', 0.3, 1)}
                initial="hidden"
                whileInView="show"
            >
                <div className=" relative max-w-max sm:max-w-[500px] md:max-w-[680px] lg:max-w-[490px] xl:max-w-max 2xl:max-w-max ml-[20px] mr-[20px]">
                    <Image 
                        src='/planet-01.png' 
                        alt="Mepusica" 
                        className="max-w-[200px] sm:max-w-[500px] md:max-w-max lg:max-w-[500px] xl:max-w-max 2xl:max-w-max mx-auto rounded-bl-[35px] rounded-br-[35px] sm:rounded-tr-[0px] sm:rounded-tl-[0px] rounded-tr-[35px] rounded-tl-[35px]"
                        quality={100}
                        width={600}
                        height={500}
                    />
                    <div class="relative overflow-hidden w-full bottom-0 left-0 py-3 px-6 bg-black bg-opacity-40 rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-tl-[35px]">
                        <p class="mb-2 font-bold text-white text-[1rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] ">Global Events</p>
                        <p class="mb-2 font-regular text-secondary-white text-[0.8rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem]">Get real-world exposure at our Web3 events worldwide. Filled with founders, investors and professionals it's the perfect environment to get the word out about your Web3 company. Or just join us for a beer.</p>
                    </div>
                </div>
            
                <div className="relative max-w-max sm:max-w-[500px] md:max-w-[680px] lg:max-w-[490px] xl:max-w-max 2xl:max-w-max ml-[20px] mr-[20px]">
                    <Image 
                        src='/planet-02.png' 
                        alt="Jacob" 
                        className="max-w-[200px] sm:max-w-[500px] md:max-w-max lg:max-w-[500px] xl:max-w-max 2xl:max-w-max mx-auto rounded-bl-[35px] rounded-br-[35px] sm:rounded-tr-[0px] sm:rounded-tl-[0px] rounded-tr-[35px] rounded-tl-[35px]"
                        quality={100}
                        width={600}
                        height={500}
                    />
                    <div class="relative overflow-hidden w-full bottom-0 left-0 py-3 px-6 bg-black bg-opacity-40 rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-tl-[35px]">
                        <p class='mb-2 font-bold text-white text-[1rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]'>Web3 Acceleration</p>
                        <p class='mb-2 font-regular text-secondary-white text-[0.8rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] '>We offer: Web Development, Smart contract builds & audits, Worldwide Events Exposure, Web3 Legal Services, A network of Web3 professionals to tap into, Community Engagement, Marketing Services including Celebrity & Influencer access.</p>
                    </div>
                </div>
            
                <div className="relative max-w-max sm:max-w-[500px] md:max-w-[680px] lg:max-w-[490px] xl:max-w-max 2xl:max-w-max ml-[20px] mr-[20px]">
                    <Image 
                        src='/planet-03.png' 
                        alt="Kishor" 
                        className="max-w-[200px] sm:max-w-[500px] md:max-w-max lg:max-w-[500px] xl:max-w-max 2xl:max-w-max mx-auto rounded-bl-[35px] rounded-br-[35px] sm:rounded-tr-[0px] sm:rounded-tl-[0px] rounded-tr-[35px] rounded-tl-[35px]"
                        quality={100}
                        width={600}
                        height={500}
                    />
                    <div class="relative overflow-hidden w-full bottom-0 left-0 py-3 px-6 bg-black bg-opacity-40 rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-tl-[35px]">
                        <p className='mb-2 font-bold text-white text-[1rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]'>Shared Community</p>
                        <p className='mb-2 font-regular text-secondary-white text-[0.8rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] '>Share our network of multiple well-established communities worldwide, and reap the benefits of the exposure that comes with it.</p>
                    </div>
                </div>
            
                <div className="relative max-w-max sm:max-w-[500px] md:max-w-[680px] lg:max-w-[490px] xl:max-w-max 2xl:max-w-max ml-[20px] mr-[20px]">
                    <Image 
                        src='/planet-04.png' 
                        alt="Joss" 
                        className="max-w-[200px] sm:max-w-[500px] md:max-w-max lg:max-w-[500px] xl:max-w-max 2xl:max-w-max mx-auto rounded-bl-[35px] rounded-br-[35px] sm:rounded-tr-[0px] sm:rounded-tl-[0px] rounded-tr-[35px] rounded-tl-[35px]"
                        quality={100}
                        width={600}
                        height={500}
                    />
                    <div class="relative overflow-hidden w-full bottom-0 left-0 py-3 px-6 bg-black bg-opacity-40 rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-tl-[35px]">
                        <p className='mb-2 font-bold text-white text-[1rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]'>Web3 Onboarding</p>
                        <p className='mb-2 font-regular text-secondary-white text-[0.8rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] '>Bridge from Web2 to Web3 with our full onboarding service.</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </section>
);
};

export default Services;
