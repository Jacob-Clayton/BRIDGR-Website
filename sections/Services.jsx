'use client'

import styles from '../styles';
import { useMediaQuery } from 'react-responsive';
import { TitleText } from '../components';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import Link from 'next/link';

const Services = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return(
        <section className={`${styles.interWidth} mx-auto relative xl:mt-20 md:mt-10 mt-5`} id="Services">
            <div className='gradient-04 z-0 lg:block hidden' />

            <motion.div
                className={`${styles.paddings} flex flex-col`}
                variants={staggerContainer}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                viewport={{ once: false, amount: 0.01 }}
            >
            <TitleText title={<>Services</>}textStyles="text-center" />
            {/* <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                className={`${styles.descriptionText} md:mt-10 mt-5 2xl:w-1/2 xl:w-4/6 lg:w-3/4 w-full mx-auto text-center`}
            >
                Let Bridgr build your Web3 business 
            </motion.p> */}
            <motion.div 
                className={`mx-auto`} 
                id='details'
                variants={fadeIn('up', 'tween', 0.05, 1)}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                viewport={{ once: false, amount: 0.01 }}
            >
                <div className='xl:mt-20 sm:mt-10 mt-5 lg:h-[500px] md:h-[560px] sm:h-[480px] h-full relative'>

                    <div className='absolute sm:block hidden xl:w-[240px] xl:h-[240px] lg:w-[180px] lg:h-[180px] md:w-[140px] md:h-[140px] sm:w-[120px] sm:h-[120px] w-[100px] h-[100px] bg-cetecean-blue border-lavender border-[2px] rounded-full top-0 bottom-0 right-0 left-0 mx-auto my-auto'>
                        <img src='/logo-05.png' className='w-[55%] h-[55%] absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto'/>
                    </div>

                    <div className='flex h-full sm:flex-row flex-col gap-2'>
                        
                        <div className=' flex flex-col mx-auto sm:w-1/2 w-full sm:gap-2 gap-4 sm:p-2 sm:px-3 p-2 h-full sm:border-[1px] border-[0px] rounded border-lavender border-opacity-0'>

                            <div className='flex sm:flex-row flex-col-reverse justify-end h-1/3 xl:pr-[100px] lg:pr-[50px] md:pr-[20px] sm:pr-[20px] border-[1px] sm:border-[0px] border-gray-500 border-opacity-30 rounded sm:p-0 p-4 gap-2 sm:gap-0'>
                                <div className='flex flex-col my-auto xl:w-2/3 w-full'>
                                    <p className={`${styles.subheaderText} sm:text-right text-left lg:mb-2 sm:mb-1 text-lavender`}>Visibility</p>
                                    <p className={`${styles.descriptionText} sm:text-right text-left`}>
                                        Global web3 events with exposure from our shared 250,000+ community.&nbsp;
                                            <Link href='https://docs.bridgr.xyz/benefits/for-members/increased-visibility' className='hover-underline-animation font-medium'>
                                                Read more.
                                            </Link>
                                    </p>
                                </div>
                                <div className="lg:w-16 lg:h-16 sm:w-10 sm:h-10 w-9 h-9 lg:ml-6 ml-3 flex my-auto items-center flex-shrink-0 rounded-full bg-off-white">
                                    <img src="/globe.png" alt='visibility' className='lg:p-2 md:p-[0.3rem] p-[0.35rem] mx-auto'/>
                                </div>
                            </div>

                            <div className='flex sm:flex-row flex-col-reverse justify-start h-1/3 xl:pr-[70px] lg:pr-[55px] md:pr-[90px] sm:pr-[70px] border-[1px] sm:border-[0px] border-gray-500 border-opacity-30 rounded sm:p-0 p-4 gap-2 sm:gap-0'>
                                <div className='flex flex-col my-auto lg:w-2/3 w-full'>
                                    <p className={`${styles.subheaderText} sm:text-right text-left lg:mb-2 sm:mb-1 text-lavender`}>Business Building</p>
                                    <p className={`${styles.descriptionText} sm:text-right text-left`}>
                                        We help you build your business from the ground up.&nbsp;
                                            <Link href='https://docs.bridgr.xyz/benefits/for-members/web3-business-building' className='hover-underline-animation font-medium'>
                                                Read more.
                                            </Link>
                                    </p>                              
                                </div>
                                <div className="lg:w-16 lg:h-16 sm:w-10 sm:h-10 w-9 h-9 lg:ml-6 ml-3 flex my-auto items-center flex-shrink-0 rounded-full bg-off-white">
                                    <img src="/support.png" alt='visibility' className='lg:p-[0.7rem] md:p-2 p-[0.4rem] mx-auto'/>
                                </div>
                            </div>
                            
                            <div className='flex sm:flex-row flex-col-reverse justify-end h-1/3 xl:pr-[100px] lg:pr-[50px] md:pr-[20px] sm:pr-[20px] border-[1px] sm:border-[0px] border-gray-500 border-opacity-30 rounded sm:p-0 p-4 gap-2 sm:gap-0'>
                                <div className='flex flex-col my-auto xl:w-2/3 w-full'>
                                    <p className={`${styles.subheaderText} sm:text-right text-left lg:mb-2 sm:mb-1 text-lavender`}>Access Investors</p>
                                    <p className={`${styles.descriptionText} sm:text-right text-left w-full`}>
                                        Direct access to investors and help building your pitch.&nbsp;
                                            <Link href='https://docs.bridgr.xyz/benefits/for-members/access-investors' className='hover-underline-animation font-medium'>
                                                Read more.
                                            </Link>
                                    </p>
                                </div>
                                <div className="lg:w-16 lg:h-16 sm:w-10 sm:h-10 w-9 h-9 lg:ml-6 ml-3 flex my-auto items-center flex-shrink-0 rounded-full bg-off-white">
                                    <img src="/finance.png" alt='visibility' className='lg:p-2 md:p-2 p-[0.35rem] mx-auto'/>
                                </div>
                            </div>

                        </div>

                        <div className='flex flex-col sm:w-1/2 w-full mx-auto sm:gap-2 gap-4 sm:p-2 sm:px-3 p-2 h-full sm:border-[1px] border-[0px] rounded border-lavender border-opacity-0'>

                            <div className='flex sm:flex-row flex-col justify-start h-1/3 xl:pl-[100px] lg:pl-[50px] md:pl-[20px] sm:pl-[20px] border-[1px] sm:border-[0px] border-gray-500 border-opacity-30 rounded sm:p-0 p-4 gap-2 sm:gap-0'>
                                <div className="lg:w-16 lg:h-16 sm:w-10 sm:h-10 w-9 h-9 lg:mr-6 mr-3 sm:ml-0 ml-3 flex my-auto items-center flex-shrink-0 rounded-full bg-off-white">
                                    <img src="/diploma.png" alt='visibility' className='lg:p-[0.8rem] md:p-2 p-[0.4rem] mx-auto'/>
                                </div>
                                <div className='flex flex-col my-auto xl:w-2/3 w-full'>
                                    <p className={`${styles.subheaderText} text-lavender lg:mb-2 sm:mb-1`}>Web3 Education</p>
                                    <p className={`${styles.descriptionText}`}>
                                        Workshops, seminars and training certificates.&nbsp;
                                        <Link href='https://docs.bridgr.xyz/benefits/for-members/education' className='hover-underline-animation font-medium'>
                                            Read more.
                                        </Link>
                                    </p>                                
                                </div>
                            </div>

                            <div className='flex sm:flex-row flex-col justify-end h-1/3 xl:pl-[70px] lg:pl-[55px] md:pl-[90px] sm:pl-[70px] border-[1px] sm:border-[0px] border-gray-500 border-opacity-30 rounded sm:p-0 p-4 gap-2 sm:gap-0'>
                                <div className="lg:w-16 lg:h-16 sm:w-10 sm:h-10 w-9 h-9 lg:mr-6 mr-3 sm:ml-0 ml-3 flex my-auto items-center flex-shrink-0 rounded-full bg-off-white">
                                    <img src="/scales.png" alt='visibility' className='lg:p-[0.62rem] md:p-2 p-[0.35rem] mx-auto'/>
                                </div>
                                <div className='flex flex-col my-auto lg:w-2/3 w-full'>
                                    <p className={`${styles.subheaderText} text-lavender lg:mb-2 sm:mb-1`}>Legal Services</p>
                                    <p className={`${styles.descriptionText}`}>
                                        Blockchain, cryptocurrency, AI, IP and corporate law specialists.&nbsp;
                                        <Link href='https://docs.bridgr.xyz/benefits/for-members/legal' className='hover-underline-animation font-medium'>
                                            Read more.
                                        </Link>
                                    </p>                                
                                </div>
                            </div>

                            <div className='flex sm:flex-row flex-col justify-start h-1/3 xl:pl-[100px] lg:pl-[50px] md:pl-[20px] sm:pl-[20px] border-[1px] sm:border-[0px] border-gray-500 border-opacity-30 rounded sm:p-0 p-4 gap-2 sm:gap-0'>
                                <div className="lg:w-16 lg:h-16 sm:w-10 sm:h-10 w-9 h-9 lg:mr-6 mr-3 sm:ml-0 ml-3 flex my-auto items-center flex-shrink-0 rounded-full bg-off-white">
                                    <img src="/code.png" alt='visibility' className='lg:p-[0.65rem] md:p-2 p-[0.35rem] mx-auto'/>
                                </div>
                                <div className='flex flex-col my-auto xl:w-2/3 w-full'>
                                    <p className={`${styles.subheaderText} text-lavender lg:mb-2 sm:mb-1`}>Web3 Development</p>
                                    <p className={`${styles.descriptionText}`}>
                                        Web3 integrated websites, smart contracts, audits, and NFT utility development.&nbsp;
                                        <Link href='https://docs.bridgr.xyz/benefits/for-members/web3-development' className='hover-underline-animation font-medium'>
                                            Read more.
                                        </Link>
                                    </p>                                
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Services