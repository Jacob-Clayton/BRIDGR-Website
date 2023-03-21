'use client';

import styles from '../styles';
import { TitleText } from '../components';
import Image from 'next/image';

const News = () => {
    return (
        <section className={`${styles.paddings} relative z-10`} id="News">
            <div className="gradient-02 overflow-visible z-0 lg:block hidden" />
            <div className={`${styles.innerWidth} mx-auto mt-10 flex flex-col`}>
            <TitleText title={<>News</>} textStyles="text-center" />
                <div className="mt-10 flex flex-col gap-[30px]">

                    <div className="flex sm:flex-row flex-col gap-4">
                        <Image
                            src="/balinews.jpg"
                            alt="bali event"
                            className="lg:w-[200px] lg:h-[180px] w-[150px] h-[130px] rounded-[32px] object-cover"
                            width={220} height={200}
                        />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                                <h4 className="font-normal text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] xl:text-[24px] text-white">
                                    Beachside in Bali </h4>
                                <p className="mt-[16px] font-light 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-secondary-white">
                                    We went all tropical and decided to throw a huge red carpet event at the Lighthouse Studios Bali on 
                                    Feb 24th 2023.</p>
                            </div>
                            <a href='https://twitter.com/Bridgrxyz/status/1625104846675386369?s=20'>
                                <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white">
                                        <img src="/arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain"/> 
                                </div>
                            </a>  
                        </div>
                    </div>

                    <div className="flex sm:flex-row flex-col gap-4">
                        <Image
                            src="/singaporefeb.jpg"
                            alt="singapore event"
                            className="lg:w-[200px] lg:h-[180px] w-[150px] h-[130px] rounded-[32px] object-cover"
                            width={220} height={200}
                        />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                                <h4 className="font-normal text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] xl:text-[24px] text-white">
                                    Singapore Social</h4>
                                <p className="mt-[16px] font-light 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-secondary-white">
                                    Singapore's first NFT bar, The Parlour Singapore, hosted another fantastic sold out 'WEB3 SOCIAL' on 
                                    Feb 3rd 2023.</p>
                            </div>
                            <a href='https://twitter.com/Bridgrxyz/status/1622586625552429057?s=20'>
                                <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white">
                                        <img src="/arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain" /> 
                                </div>
                            </a>  
                        </div>
                    </div>

                    <div className="flex sm:flex-row flex-col gap-4">
                        <Image
                            src="/istanbulnews.jpg"
                            alt="istanbul event"
                            className="lg:w-[200px] lg:h-[180px] w-[150px] h-[130px] rounded-[32px] object-cover"
                            width={220} height={200}
                        />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                                <h4 className="font-normal text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] xl:text-[24px] text-white">
                                    Istanbul Blockchain Week</h4>
                                <p className="mt-[16px] font-light 2xl:text-[21px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[13px] text-secondary-white">
                                    BRIDGR hosted the official Blockchain Week afterparty at one of our good friend's bar, Youplace, on 
                                    Nov 14th 2022.</p>
                            </div>
                            <a href='https://twitter.com/Bridgrxyz/status/1592214170996703232?s=20'>
                                <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white">
                                        <img src="/arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain"/> 
                                </div>
                            </a>  
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default News;