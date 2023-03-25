'use client';

import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, PricingTable } from '../components';

const Pricing = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
        <section className={`${styles.paddings}`} id="Pricing">
            <motion.div
                variants={staggerContainer}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto md:mt-20 sm:mt-10 mt-5 flex flex-col`}
            >
            <TitleText title={<>Pricing</>}textStyles="text-center" />
                <motion.p
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    initial={isLgScreen ? 'hidden' : 'visible'}
                    whileInView="show"
                    className="md:mt-10 mt-5 font-normal 2xl:text-[21px] xl:text-xl md:text-lg text-md text-center text-secondary-white"
                >
                    Become a Member to gain access to all our partner's services, communities and network.
                </motion.p>
                <PricingTable/>

                {/* <TypingText title="| More Details " textStyles="text-center mt-20" />

                <motion.div 
                    className='place-items-top grid grid-cols-1 lg:grid-cols-3 mt-5 mx-auto font-normal' 
                    id='details'
                    variants={fadeIn('up', 'tween', 0.3, 1)}
                >
                    <div className=" relative max-w-max sm:max-w-[500px] md:max-w-[680px] lg:max-w-[490px] xl:max-w-max 2xl:max-w-max">
                        <div class="relative overflow-hidden w-full bottom-0 left-0 py-3 px-6 rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-tl-[35px]">
                        <h1 className=" md:mt-[18px] md:ml-[0px] ml-[10px] font-normal text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] xl:text-[24px] text-white text-center mb-2">
                                Visibility</h1>
                                <p className=" md:mt-[16px] mt-[10px] font-normal xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] text-[#B0B0B0]">
                                Get real-world exposure at our 'WEB3 SOCIAL' events worldwide. Filled with founders, 
                                investors and professionals it's the perfect environment to promote your company. 
                                <a href='https://docs.bridgr.xyz/' className='text-white'> Read more...</a>
                            </p>
                        </div>
                    </div>
                
                    <div className="relative max-w-max sm:max-w-[500px] md:max-w-[680px] lg:max-w-[490px] xl:max-w-max 2xl:max-w-max">
                        <div class="relative overflow-hidden w-full bottom-0 left-0 py-3 px-6 rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-tl-[35px]">
                        <h1 className=" md:mt-[18px] md:ml-[0px] ml-[10px] font-normal text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] xl:text-[24px] text-white text-center mb-2">
                                Web3 Education</h1>
                                <p className=" md:mt-[16px] mt-[10px] font-normal xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] text-[#B0B0B0]">
                                We arrange weekly seminars conducted by Web3 industry experts. Can you afford to miss out?
                                <a href='https://docs.bridgr.xyz/' className='text-white'> Read more...</a>
                            </p>
                        </div>
                    </div>
                
                    <div className="relative max-w-max sm:max-w-[500px] md:max-w-[680px] lg:max-w-[490px] xl:max-w-max 2xl:max-w-max">
                        <div class="relative overflow-hidden w-full bottom-0 left-0 py-3 px-6 rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-tl-[35px]">
                        <h1 className=" md:mt-[18px] md:ml-[0px] ml-[10px] text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] xl:text-[24px] text-white text-center mb-2">
                                Business Model Design</h1>
                                <p className="md:mt-[16px] mt-[10px] font-normal xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] text-[#B0B0B0]">
                                More than 90% of all Web3 business models are flawed. We help ensure yours is designed right.
                                <a href='https://docs.bridgr.xyz/' className='text-white'> Read more...</a>
                            </p>
                        </div>
                    </div>
                
                    <div className="relative max-w-max sm:max-w-[500px] md:max-w-[680px] lg:max-w-[490px] xl:max-w-max 2xl:max-w-max">
                        <div class="relative overflow-hidden w-full bottom-0 left-0 py-3 px-6 rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-tl-[35px]">
                        <h1 className=" md:mt-[18px] md:ml-[0px] ml-[10px] text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] xl:text-[24px] text-white text-center mb-2">
                                Web3 Focus Groups</h1>
                                <p className="md:mt-[16px] mt-[10px] font-normal xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] text-[#B0B0B0]">
                                Reduce the risk of commercial failure by leveraging on BRIDGR’s diverse community of seasoned Web3 professionals for product feedback prior to launch. 
                                <a href='https://docs.bridgr.xyz/' className='text-white'> Read more...</a>
                            </p>
                        </div>
                    </div>

                    <div className="relative max-w-max sm:max-w-[500px] md:max-w-[680px] lg:max-w-[490px] xl:max-w-max 2xl:max-w-max">
                        <div class="relative overflow-hidden w-full bottom-0 left-0 py-3 px-6 rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-tl-[35px]">
                        <h1 className=" md:mt-[18px] md:ml-[0px] ml-[10px] text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] xl:text-[24px] text-white text-center mb-2">
                                Access Investors</h1>
                                <p className="md:mt-[16px] mt-[10px] font-normal xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] text-[#B0B0B0]">
                                We provide direct access to multiple VC investors with a solid track record of investing in Web3 startups.
                                <a href='https://docs.bridgr.xyz/' className='text-white'> Read more...</a>
                            </p>
                        </div>
                    </div>

                    <div className="relative max-w-max sm:max-w-[500px] md:max-w-[680px] lg:max-w-[490px] xl:max-w-max 2xl:max-w-max">
                        <div class="relative overflow-hidden w-full bottom-0 left-0 py-3 px-6 rounded-bl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-tl-[35px]">
                        <h1 className=" md:mt-[18px] md:ml-[0px] ml-[10px] text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] xl:text-[24px] text-white text-center mb-2">
                                Web3 Legal Advice</h1>
                                <p className="md:mt-[16px] mt-[10px] font-normal xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] text-[#B0B0B0]">
                                If you ever find yourself in a tight spot you’ll want the support from someone you can trust. Our legal partners have been practicing crypto law since 2018.
                                <a href='https://docs.bridgr.xyz/' className='text-white'> Read more...</a>
                            </p>
                        </div>
                    </div>
                </motion.div> */}
                
            </motion.div>
            
        </section>
    );
};

export default Pricing;
