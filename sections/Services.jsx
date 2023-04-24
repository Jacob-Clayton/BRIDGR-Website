'use client'

import styles from '../styles';
import { useMediaQuery } from 'react-responsive';
import { TitleText, InfoTip } from '../components';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { Poppins } from '@next/font/google';
import Link from 'next/link';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
    display: 'swap',
})

const Services = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return(
        <section className={`${styles.paddings} ${poppins.variable} font-poppins`} id="Services">
            <motion.div 
                className={`${styles.innerWidth} 2xl:mt-[100px] md:mt-12 sm:mt-10 mt-4 mx-auto`} 
                id='details'
                variants={fadeIn('up', 'tween', 0.3, 1)}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                viewport={{ once: false, amount: 0.01 }}
            >
                <TitleText title={<>Services</>}textStyles="text-center" />


                <section className={`text-secondary-white ${poppins.variable} font-poppins`}>
                    <div className="container xl:mt-20 md:mt-10 mt-5 mx-auto">
                        <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/3 md:w-1/2 w-full p-4">
                            <div className="relative border border-white border-opacity-70 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#379CE0] mb-4">
                                <img src="/worldwide.svg" alt='visibility' className=' p-[0.35rem] mx-auto'/>
                            </div>
                            <p className="text-xl text-off-white title-font mb-2 font-poppins">Visibility</p>
                            <ul className='list-disc list-inside leading-relaxed text-lg font-poppins'>
                                <li>Global events</li>
                                <li>Shared community</li>
                                <li>Collaboration</li>
                            </ul>
                            <InfoTip message={"Read more"}>
                                <Link href="https://docs.bridgr.xyz/benefits/for-members/game-integration">
                                    <svg class="w-5 h-5 absolute right-5 bottom-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </Link>
                            </InfoTip>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 w-full p-4">
                            <div className="relative border border-white border-opacity-70 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#379CE0] mb-4">
                                <img src="/construction.svg" alt='business building' className='p-[0.35rem] mx-auto'/>
                            </div>
                            <p className="text-xl text-off-white title-font mb-2 font-poppins">Business Building</p>
                            <ul className='list-disc list-inside leading-relaxed text-lg font-poppins'>
                                <li>Focus groups</li>
                                <li>New revenue streams</li>
                                <li>Entrepreneurship</li>
                            </ul>
                            <InfoTip message={"Read more"}>
                                <Link href="https://docs.bridgr.xyz/benefits/for-members/web3-business-building">
                                    <svg class="w-5 h-5 absolute right-5 bottom-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </Link>
                            </InfoTip>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 w-full p-4">
                            <div className="relative border border-white border-opacity-70 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#379CE0] mb-4">
                                <svg className="svg-icon p-1" viewBox="0 0 20 20">
                                    <path fill="#379CE0" d="M10.001,9.658c-2.567,0-4.66-2.089-4.66-4.659c0-2.567,2.092-4.657,4.66-4.657s4.657,2.09,4.657,4.657C14.658,7.569,12.569,9.658,10.001,9.658z M10.001,1.8c-1.765,0-3.202,1.437-3.202,3.2c0,1.766,1.437,3.202,3.202,3.202c1.765,0,3.199-1.436,3.199-3.202C13.201,3.236,11.766,1.8,10.001,1.8z"></path>
                                    <path fill="#379CE0" d="M9.939,19.658c-0.091,0-0.179-0.017-0.268-0.051l-7.09-2.803c-0.276-0.108-0.461-0.379-0.461-0.678c0-4.343,3.535-7.876,7.881-7.876c4.343,0,7.878,3.533,7.878,7.876c0,0.302-0.182,0.572-0.464,0.68l-7.213,2.801C10.118,19.64,10.03,19.658,9.939,19.658z M3.597,15.639l6.344,2.507l6.464-2.512c-0.253-3.312-3.029-5.927-6.404-5.927C6.623,9.707,3.848,12.326,3.597,15.639z"></path>
                                    <path fill="#379CE0" d="M9.939,19.658c0,0-0.003,0-0.006,0c-0.347-0.003-0.646-0.253-0.709-0.596L7.462,9.567C7.389,9.172,7.65,8.79,8.046,8.718C8.442,8.643,8.82,8.906,8.894,9.301l1.076,5.796l1.158-5.741c0.08-0.394,0.461-0.655,0.86-0.569c0.396,0.08,0.649,0.464,0.569,0.859l-1.904,9.427C10.585,19.413,10.286,19.658,9.939,19.658z"></path>
                                </svg>                            
                            </div>
                            <p className="text-xl text-off-white title-font mb-2 font-poppins">Access Investors</p>
                            <ul className='list-disc list-inside leading-relaxed text-lg font-poppins'>
                                <li>Access our VCs</li>
                                <li>Pitch deck building</li>
                                <li>Pitch to investors</li>
                            </ul>
                            <InfoTip message={"Read more"}>
                                <Link href="https://docs.bridgr.xyz/benefits/for-members/access-investors">
                                    <svg class="w-5 h-5 absolute right-5 bottom-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </Link>
                            </InfoTip>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 w-full p-4">
                            <div className="relative border border-white border-opacity-70 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#379CE0] mb-4">
                                <img src="/certificate.svg" alt='education' className='p-[0.3rem] mx-auto'/>
                            </div>
                            <p className="text-xl text-off-white title-font mb-2 font-poppins">Web3 Education</p>
                            <ul className='list-disc list-inside leading-relaxed text-lg font-poppins'>
                                <li>Training Certificates</li>
                                <li>Workships</li>
                                <li>Seminars</li>
                            </ul>
                            <InfoTip message={"Read more"}>
                                <Link href="https://docs.bridgr.xyz/benefits/for-members/education">
                                    <svg class="w-5 h-5 absolute right-5 bottom-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </Link>
                            </InfoTip>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 w-full p-4">
                            <div className="relative border border-white border-opacity-70 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#379CE0] mb-4">
                                <img src="/law.svg" alt='legal services' className='p-1 mx-auto'/>
                            </div>
                            <p className="text-xl text-off-white title-font mb-2 font-poppins">Web3 Legal Services</p>
                            <ul className='list-disc list-inside leading-relaxed text-lg font-poppins'>
                                <li>Corporate law</li>
                                <li>Blockchain adoption</li>
                                <li>IP law</li>
                            </ul>
                            <InfoTip message={"Read more"}>
                                <Link href="https://docs.bridgr.xyz/benefits/for-members/legal">
                                    <svg class="w-5 h-5 absolute right-5 bottom-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </Link>
                            </InfoTip>
                            </div>

                        </div>
                        <div className="xl:w-1/3 md:w-1/2 w-full p-4">
                            <div className="relative border border-white border-opacity-70 p-6 rounded-lg">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#379CE0] mb-4">
                                <img src="/computer.svg" alt='consultancy' className='p-[0.3rem]'/>
                            </div>
                            <p className="text-xl text-off-white title-font mb-2 font-poppins">Web3 Consultancy</p>
                            <ul className='text-lg list-disc list-inside leading-relaxed font-poppins'>
                                <li>Website development</li>
                                <li>Smart contract builds</li>
                                <li>Smart contract audits</li>
                            </ul>
                            <InfoTip message={"Read more"}>
                                <Link href="https://docs.bridgr.xyz/consultancy/web3-consultancy">
                                    <svg class="w-5 h-5 absolute right-5 bottom-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </Link>
                            </InfoTip>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                </section>
            </motion.div>
        </section>
    );
};

export default Services