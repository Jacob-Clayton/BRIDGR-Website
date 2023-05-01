'use client'

import styles from '../styles';
import { useMediaQuery } from 'react-responsive';
import { TitleText } from '../components';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Services = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return(
        <section className={` relative md:mt-20 sm:mt-10 mt-5`} id="Services">
            <div className='gradient-04 z-0 lg:block hidden' />

            <motion.div 
                className={`${styles.interWidth} mx-auto`} 
                id='details'
                variants={fadeIn('up', 'tween', 0.05, 1)}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                viewport={{ once: false, amount: 0.01 }}
            >
                <TitleText title={<>Services</>}textStyles="text-center" />

                <div className='xl:mt-20 sm:mt-10 mt-5 lg:h-[500px] md:h-[560px] sm:h-[480px] h-full relative'>

                    <div className='absolute sm:block hidden xl:w-[240px] xl:h-[240px] lg:w-[180px] lg:h-[180px] md:w-[140px] md:h-[140px] sm:w-[120px] sm:h-[120px] w-[100px] h-[100px] bg-cetecean-blue border-lavender border-[2px] rounded-full top-0 bottom-0 right-0 left-0 mx-auto my-auto'>
                        <img src='/logo-05.png' className='w-[55%] h-[55%] absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto'/>
                    </div>

                    <div className='flex h-full sm:flex-row flex-col gap-2'>

                        <div className='flex flex-col mx-auto sm:w-1/2 w-full sm:gap-2 gap-4 sm:p-2 sm:px-3 p-2 h-full sm:border-[1px] border-[0px] rounded border-lavender border-opacity-0'>

                            <div className='flex sm:flex-row flex-col-reverse justify-end h-1/3 xl:pr-[100px] lg:pr-[50px] md:pr-[20px] sm:pr-[20px] border-[1px] sm:border-[0px] border-gray-500 border-opacity-30 rounded sm:p-0 p-4 gap-2 sm:gap-0'>
                                <div className='flex flex-col my-auto xl:w-2/3 w-full'>
                                    <p className={`${styles.subheaderText} sm:text-right text-left lg:mb-2 sm:mb-1 text-lavender`}>Visibility</p>
                                    <p className={`${styles.descriptionText} sm:text-right text-left`}>
                                        Global web3 events with exposure from our shared community of 250,000+ people.
                                            <span href='https://docs.bridgr.xyz/benefits/for-members/increased-visibility' className='hover-underline-animation cursor-pointer'>
                                                &nbsp;Read more.
                                            </span>
                                    </p>
                                </div>
                                <div className="lg:w-16 lg:h-16 sm:w-10 sm:h-10 w-9 h-9 lg:ml-6 ml-3 flex my-auto items-center flex-shrink-0 rounded-full bg-off-white">
                                    <img src="/worldwide.svg" alt='visibility' className='lg:p-3 md:p-2 p-[0.35rem] mx-auto'/>
                                </div>
                            </div>

                            <div className='flex sm:flex-row flex-col-reverse h-1/3 xl:pr-[70px] lg:pr-[55px] md:pr-[90px] sm:pr-[70px] border-[1px] sm:border-[0px] border-gray-500 border-opacity-30 rounded sm:p-0 p-4 gap-2 sm:gap-0'>
                                <div className='flex flex-col my-auto lg:w-2/3 w-full'>
                                    <p className={`${styles.subheaderText} sm:text-right text-left lg:mb-2 sm:mb-1 text-lavender`}>Business Building</p>
                                    <p className={`${styles.descriptionText} sm:text-right text-left`}>
                                        Advice and assistance to build your business from the ground up.
                                            <span href='https://docs.bridgr.xyz/benefits/for-members/web3-business-building' className='hover-underline-animation cursor-pointer'>
                                                &nbsp;Read more.
                                            </span>
                                    </p>                              
                                </div>
                                <div className="lg:w-16 lg:h-16 sm:w-10 sm:h-10 w-9 h-9 lg:ml-6 ml-3 flex my-auto items-center flex-shrink-0 rounded-full bg-off-white">
                                    <img src="/construction.svg" alt='visibility' className='lg:p-3 md:p-2 p-[0.35rem] mx-auto'/>
                                </div>
                            </div>
                            
                            <div className='flex sm:flex-row flex-col-reverse justify-end h-1/3 xl:pr-[100px] lg:pr-[50px] md:pr-[20px] sm:pr-[20px] border-[1px] sm:border-[0px] border-gray-500 border-opacity-30 rounded sm:p-0 p-4 gap-2 sm:gap-0'>
                                <div className='flex flex-col my-auto xl:w-2/3 w-full'>
                                    <p className={`${styles.subheaderText} sm:text-right text-left lg:mb-2 sm:mb-1 text-lavender`}>Access Investors</p>
                                    <p className={`${styles.descriptionText} sm:text-right text-left w-full`}>
                                        Direct access to investors and help building your pitch.
                                            <span href='https://docs.bridgr.xyz/benefits/for-members/access-investors' className='hover-underline-animation cursor-pointer'>
                                                &nbsp;Read more.
                                            </span>
                                    </p>
                                </div>
                                <div className="lg:w-16 lg:h-16 sm:w-10 sm:h-10 w-9 h-9 lg:ml-6 ml-3 flex my-auto items-center flex-shrink-0 rounded-full bg-off-white">
                                    <svg className="lg:p-3 md:p-2 p-[0.35rem]" viewBox="0 0 20 20">
                                        <path fill="#170c4d" d="M10.001,9.658c-2.567,0-4.66-2.089-4.66-4.659c0-2.567,2.092-4.657,4.66-4.657s4.657,2.09,4.657,4.657C14.658,7.569,12.569,9.658,10.001,9.658z M10.001,1.8c-1.765,0-3.202,1.437-3.202,3.2c0,1.766,1.437,3.202,3.202,3.202c1.765,0,3.199-1.436,3.199-3.202C13.201,3.236,11.766,1.8,10.001,1.8z"></path>
                                        <path fill="#170c4d" d="M9.939,19.658c-0.091,0-0.179-0.017-0.268-0.051l-7.09-2.803c-0.276-0.108-0.461-0.379-0.461-0.678c0-4.343,3.535-7.876,7.881-7.876c4.343,0,7.878,3.533,7.878,7.876c0,0.302-0.182,0.572-0.464,0.68l-7.213,2.801C10.118,19.64,10.03,19.658,9.939,19.658z M3.597,15.639l6.344,2.507l6.464-2.512c-0.253-3.312-3.029-5.927-6.404-5.927C6.623,9.707,3.848,12.326,3.597,15.639z"></path>
                                        <path fill="#170c4d" d="M9.939,19.658c0,0-0.003,0-0.006,0c-0.347-0.003-0.646-0.253-0.709-0.596L7.462,9.567C7.389,9.172,7.65,8.79,8.046,8.718C8.442,8.643,8.82,8.906,8.894,9.301l1.076,5.796l1.158-5.741c0.08-0.394,0.461-0.655,0.86-0.569c0.396,0.08,0.649,0.464,0.569,0.859l-1.904,9.427C10.585,19.413,10.286,19.658,9.939,19.658z"></path>
                                    </svg>                                  
                                </div>
                            </div>

                        </div>

                        <div className='flex flex-col sm:w-1/2 w-full mx-auto sm:gap-2 gap-4 sm:p-2 sm:px-3 p-2 h-full sm:border-[1px] border-[0px] rounded border-lavender border-opacity-0'>

                            <div className='flex sm:flex-row flex-col justify-start h-1/3 xl:pl-[100px] lg:pl-[50px] md:pl-[20px] sm:pl-[20px] border-[1px] sm:border-[0px] border-gray-500 border-opacity-30 rounded sm:p-0 p-4 gap-2 sm:gap-0'>
                                <div className="lg:w-16 lg:h-16 sm:w-10 sm:h-10 w-9 h-9 lg:mr-6 mr-3 lg:ml-5 ml-3 flex my-auto items-center flex-shrink-0 rounded-full bg-off-white">
                                    <img src="/certificate.svg" alt='visibility' className='lg:p-3 md:p-2 p-[0.35rem] mx-auto'/>
                                </div>
                                <div className='flex flex-col my-auto xl:w-2/3 w-full'>
                                    <p className={`${styles.subheaderText} text-lavender lg:mb-2 sm:mb-1`}>Web3 Education</p>
                                    <p className={`${styles.descriptionText}`}>
                                        Workshops, seminars and training certificates.
                                        <span href='https://docs.bridgr.xyz/benefits/for-members/education' className='hover-underline-animation cursor-pointer'>
                                            &nbsp;Read more.
                                        </span>
                                    </p>                                
                                </div>
                            </div>

                            <div className='flex sm:flex-row flex-col justify-end h-1/3 xl:pl-[70px] lg:pl-[55px] md:pl-[90px] sm:pl-[70px] border-[1px] sm:border-[0px] border-gray-500 border-opacity-30 rounded sm:p-0 p-4 gap-2 sm:gap-0'>
                                <div className="lg:w-16 lg:h-16 sm:w-10 sm:h-10 w-9 h-9 lg:mr-6 mr-3 lg:ml-5 ml-3 flex my-auto items-center flex-shrink-0 rounded-full bg-off-white">
                                    <img src="/law.svg" alt='visibility' className='lg:p-3 md:p-2 p-[0.35rem] mx-auto'/>
                                </div>
                                <div className='flex flex-col my-auto lg:w-2/3 w-full'>
                                    <p className={`${styles.subheaderText} text-lavender lg:mb-2 sm:mb-1`}>Legal Services</p>
                                    <p className={`${styles.descriptionText}`}>
                                        Blockchain, cryptocurrency, AI, IP and corporate law specialists.
                                        <span href='https://docs.bridgr.xyz/benefits/for-members/legal' className='hover-underline-animation cursor-pointer'>
                                            &nbsp;Read more.
                                        </span>
                                    </p>                                
                                </div>
                            </div>

                            <div className='flex sm:flex-row flex-col justify-start h-1/3 xl:pl-[100px] lg:pl-[50px] md:pl-[20px] sm:pl-[20px] border-[1px] sm:border-[0px] border-gray-500 border-opacity-30 rounded sm:p-0 p-4 gap-2 sm:gap-0'>
                                <div className="lg:w-16 lg:h-16 sm:w-10 sm:h-10 w-9 h-9 lg:mr-6 mr-3 lg:ml-5 ml-3 flex my-auto items-center flex-shrink-0 rounded-full bg-off-white">
                                    <img src="/computer.svg" alt='visibility' className='lg:p-3 md:p-2 p-[0.35rem] mx-auto'/>
                                </div>
                                <div className='flex flex-col my-auto xl:w-2/3 w-full'>
                                    <p className={`${styles.subheaderText} text-lavender lg:mb-2 sm:mb-1`}>Web3 Development</p>
                                    <p className={`${styles.descriptionText}`}>
                                        Web3 integrated websites, smart contracts, audits, plus NFT utility development.
                                        <span href='https://docs.bridgr.xyz/benefits/for-members/web3-development' className='hover-underline-animation cursor-pointer'>
                                            &nbsp;Read more.
                                        </span>
                                    </p>                                
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
            </motion.div>
        </section>
    );
};

export default Services