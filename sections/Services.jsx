'use client'

import styles from '../styles';
import { useMediaQuery } from 'react-responsive';
import { TitleText } from '../components';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Services = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return(
        <section className={`${styles.paddings} `} id="Services">
            <motion.div 
                className={`${styles.innerWidth} md:mt-20 sm:mt-10 mt-5 mx-auto`} 
                id='details'
                variants={fadeIn('up', 'tween', 0.3, 1)}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <TitleText title={<>Services</>}textStyles="text-center" />
                <div className='md:mt-10 mt-5 justify-center'>

                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center sm:gap-y-10 gap-y-6 gap-x-6'>

                    <div className="relative text-off-white border-[3px] border-white border-opacity-20 rounded-2xl p-5">
                    <img src="/worldwide.svg" className='sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] mb-2 mx-auto'/>
                            <p className="font-medium xl:text-2xl md:text-xl text-lg text-center mb-2">
                                Visibility</p>                        
                        <ul className='list-disc list-inside 2xl:text-[21px] xl:text-xl md:text-lg text-md text-secondary-white'>
                            <li>Global events</li>
                            <li>Shared community</li>
                            <li>Collaboration</li>
                        </ul>
                            {/* <p className=" md:mt-[16px] mt-[10px] font-normal xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] text-[#B0B0B0]">
                                Get real-world exposure at our 'WEB3 SOCIAL' events worldwide. Filled with founders, 
                                investors and professionals it's the perfect environment to promote your company. 
                                <a href='https://docs.bridgr.xyz/' className='text-white'> Read more...</a>
                            </p> */}
                    </div>

                    <div className="relative text-off-white border-[3px] border-white border-opacity-20 rounded-2xl p-5">
                        <img src="/construction.svg" className='sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] mb-2 mx-auto'/>
                        <p className="font-medium xl:text-2xl md:text-xl text-lg text-center mb-2">
                            Business Building</p>
                            <ul className='list-disc list-inside 2xl:text-[21px] xl:text-xl md:text-lg text-md text-secondary-white'>
                                <li>Focus groups</li>
                                <li>New revenue streams</li>
                                <li>Entrepreneurship</li>
                            </ul>
                        {/* <p className="md:mt-[16px] mt-[10px] font-normal xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] text-[#B0B0B0]">
                                More than 90% of all Web3 business models are flawed. We help ensure yours is designed right.
                                <a href='https://docs.bridgr.xyz/' className='text-white'> Read more...</a>
                            </p> */}
                    </div>

                    <div className="relative text-off-white border-[3px] border-white border-opacity-20 rounded-2xl p-5">
                        <img src="/investor.svg" className='sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] mb-2 mx-auto'/>
                        <p className="font-medium xl:text-2xl md:text-xl text-lg text-center mb-2">
                                Access Investors</p>
                            <ul className='list-disc list-inside 2xl:text-[21px] xl:text-xl md:text-lg text-md text-secondary-white'>
                                <li>Access our VCs</li>
                                <li>Pitch deck building</li>
                                <li>Pitch to investors</li>
                            </ul>
                        {/* <p className="md:mt-[16px] mt-[10px] font-normal xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] text-[#B0B0B0]">
                                We provide direct access to multiple VC investors with a solid track record of investing in Web3 startups.
                            <a href='https://docs.bridgr.xyz/' className='text-white'> Read more...</a>
                        </p> */}
                    </div>

                    <div className="relative text-off-white border-[3px] border-white border-opacity-20 rounded-2xl p-5">
                        <img src="/certificate.svg" className='sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] mb-2 mx-auto'/>
                        <p className="font-medium xl:text-2xl md:text-xl text-lg text-center mb-2">
                            Web3 Education</p>
                            <ul className='list-disc list-inside 2xl:text-[21px] xl:text-xl md:text-lg text-md text-secondary-white'>
                                <li>Training Certificates</li>
                                <li>Workships</li>
                                <li>Seminars</li>
                            </ul>
                            {/* <p className=" md:mt-[16px] mt-[10px] font-normal xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] text-[#B0B0B0]">
                                We arrange weekly seminars conducted by Web3 industry experts. Can you afford to miss out?
                                <a href='https://docs.bridgr.xyz/' className='text-white'> Read more...</a>
                            </p> */}
                    </div>

                    <div className="relative text-off-white border-[3px] border-white border-opacity-20 rounded-2xl p-5">
                        <img src="/law.svg" className='sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] mb-2 mx-auto'/>
                        <p className="font-medium xl:text-2xl md:text-xl text-lg text-center mb-2">
                                Web3 Legal Services</p>
                            <ul className='list-disc list-inside 2xl:text-[21px] xl:text-xl md:text-lg text-md text-secondary-white'>
                                <li>Corporate law</li>
                                <li>Blockchain adoption</li>
                                <li>IP law</li>
                            </ul>
                        {/* <p className="md:mt-[16px] mt-[10px] font-normal xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] text-[#B0B0B0]">
                            If you ever find yourself in a tight spot you’ll want the support from someone you can trust. Our legal partners have been practicing crypto law since 2018.
                            <a href='https://docs.bridgr.xyz/' className='text-white'> Read more...</a>
                        </p> */}
                    </div>

                    <div className="relative text-off-white border-[3px] border-white border-opacity-20 rounded-2xl p-5">
                        <img src="/computer.svg" className='sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] mb-2 mx-auto'/>
                        <p className="font-medium xl:text-2xl md:text-xl text-lg text-center mb-2">
                                Web3 Consultancy</p>
                            <ul className='list-disc list-inside 2xl:text-[21px] xl:text-xl md:text-lg text-md text-secondary-white'>
                                <li>Website development</li>
                                <li>Smart contract builds</li>
                                <li>Smart contract audits</li>
                            </ul>
                        {/* <p className="md:mt-[16px] mt-[10px] font-normal xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[15px] text-[#B0B0B0]">
                            If you ever find yourself in a tight spot you’ll want the support from someone you can trust. Our legal partners have been practicing crypto law since 2018.
                            <a href='https://docs.bridgr.xyz/' className='text-white'> Read more...</a>
                        </p> */}
                    </div>

                    </div>

                </div>
            </motion.div>
        </section>
    );
};

export default Services