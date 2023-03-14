'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText, PricingTable } from '../components';

const Services = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
        <section className={`${styles.paddings}`} id="Services">
            
            <motion.div
                variants={staggerContainer}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
            <TitleText title={<>Benefits</>}textStyles="text-center mb-10" />
                <motion.p
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    initial={isLgScreen ? 'hidden' : 'visible'}
                    whileInView="show"
                    className="font-light 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-center text-secondary-white"
                >
                    Join the BRIDGR collective as a Friend or full Member, either way you'll become part of the family.
                </motion.p>

                <PricingTable/>
                <TypingText title="| More Details " textStyles="text-center mt-20" />

                <motion.div 
                    className='place-items-top grid grid-cols-1 lg:grid-cols-3 mt-5' 
                    id='team'
                    variants={fadeIn('up', 'tween', 0.3, 1)}
                >
                    <div className=" relative max-w-max sm:max-w-[500px] md:max-w-[680px] lg:max-w-[490px] xl:max-w-max 2xl:max-w-max">
                        <div class="relative overflow-hidden w-full bottom-0 left-0 py-3 px-6 rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-tl-[35px]">
                            <p className="mb-4 text-center font-regular text-white text-[1rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] ">
                                Visibility</p>
                            <p className="mb-0 font-light text-secondary-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.1rem]">
                                Get real-world exposure at our 'WEB3 SOCIAL' events worldwide. Filled with founders, 
                                investors and professionals it's the perfect environment to promote your company. 
                                {/* <a href='https://docs.bridgr.xyz/' className='text-white'> Read more...</a> */}
                            </p>
                        </div>
                    </div>
                
                    <div className="relative max-w-max sm:max-w-[500px] md:max-w-[680px] lg:max-w-[490px] xl:max-w-max 2xl:max-w-max">
                        <div class="relative overflow-hidden w-full bottom-0 left-0 py-3 px-6 rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-tl-[35px]">
                            <p className='mb-4 text-center font-regular text-white text-[1rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]'>
                                Web3 Education</p>
                            <p className='mb-0 font-light text-secondary-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.1rem]'>
                                We arrange weekly seminars conducted by Web3 industry experts. Can you afford to miss out?
                                {/* <a href='https://docs.bridgr.xyz/' className='text-white'> Read more...</a> */}
                            </p>
                        </div>
                    </div>
                
                    <div className="relative max-w-max sm:max-w-[500px] md:max-w-[680px] lg:max-w-[490px] xl:max-w-max 2xl:max-w-max">
                        <div class="relative overflow-hidden w-full bottom-0 left-0 py-3 px-6 rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-tl-[35px]">
                            <p className='mb-4 text-center font-regular text-white text-[1rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]'>
                                Web3 Business Model Design</p>
                            <p className='mb-0 font-light text-secondary-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.1rem]'>
                                More than 90% of all Web3 business models are flawed. We help ensure yours is designed right.
                                {/* <a href='https://docs.bridgr.xyz/' className='text-white'> Read more...</a> */}
                            </p>
                        </div>
                    </div>
                
                    <div className="relative max-w-max sm:max-w-[500px] md:max-w-[680px] lg:max-w-[490px] xl:max-w-max 2xl:max-w-max">
                        <div class="relative overflow-hidden w-full bottom-0 left-0 py-3 px-6 rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-tl-[35px]">
                            <p className='mb-4 text-center font-regular text-white text-[1rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]'>
                                Web3 Focus Groups</p>
                            <p className='mb-0 font-light text-secondary-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.1rem]'>
                                Reduce the risk of commercial failure by leveraging on BRIDGR’s diverse community of seasoned Web3 professionals for product feedback prior to launch. 
                                {/* <a href='https://docs.bridgr.xyz/' className='text-white'> Read more...</a> */}
                            </p>
                        </div>
                    </div>

                    <div className="relative max-w-max sm:max-w-[500px] md:max-w-[680px] lg:max-w-[490px] xl:max-w-max 2xl:max-w-max">
                        <div class="relative overflow-hidden w-full bottom-0 left-0 py-3 px-6 rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-tl-[35px]">
                            <p className='mb-4 text-center font-regular text-white text-[1rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]'>
                                Access Investors</p>
                            <p className='mb-0 font-light text-secondary-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.1rem]'>
                                We provide direct access to multiple VC investors with a solid track record of investing in Web3 startups.
                                {/* <a href='https://docs.bridgr.xyz/' className='text-white'> Read more...</a> */}
                            </p>
                        </div>
                    </div>

                    <div className="relative max-w-max sm:max-w-[500px] md:max-w-[680px] lg:max-w-[490px] xl:max-w-max 2xl:max-w-max">
                        {/* <Image 
                            src='/planet-03.png' 
                            alt="Web3 Onboarding" 
                            className="max-w-[200px] sm:max-w-[400px] md:max-w-[420px] lg:max-w-[370px] xl:max-w-[380px] 2xl:max-w-[400px] mx-auto rounded-bl-[35px] rounded-br-[35px] sm:rounded-tr-[0px] sm:rounded-tl-[0px] rounded-tr-[35px] rounded-tl-[35px]"
                            quality={100}
                            width={1000}
                            height={625}
                        /> */}
                        <div class="relative overflow-hidden w-full bottom-0 left-0 py-3 px-6 rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-tl-[35px]">
                            <p className='mb-4 text-center font-regular text-white text-[1rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]'>
                                Web3 Legal Advice</p>
                            <p className='mb-0 font-light text-secondary-white text-[0.8rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.1rem]'>
                                If you ever find yourself in a tight spot you’ll want the support from someone you can trust. Our legal partners have been practicing crypto law since 2018.
                                {/* <a href='https://docs.bridgr.xyz/' className='text-white'> Read more...</a> */}
                            </p>
                        </div>
                    </div>
                </motion.div>
                
            </motion.div>
            
        </section>
    );
};

export default Services;
