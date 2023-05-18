'use client';

import styles from '../styles';
import { TitleText } from '../components';
import Image from 'next/image';

const News = () => {
    return (
        <section className={`${styles.paddings} relative z-10`} id="News">
            <div className="gradient-02 overflow-visible z-0 lg:block hidden" />
            
            <div className={`${styles.innerWidth} mx-auto flex flex-col text-off-white`}>
                {/* <TitleText title={<>News</>} textStyles="text-center" /> */}
                {/* <p className={`${styles.descriptionText} ${poppins.variable} font-poppins text-center`}>
                    Read more about our latest events and news on<a href='https://medium.com/@bridgrxyz' className='text-white font-medium'> Medium.</a>
                </p> */}
                <div className="flex flex-col gap-4 sm:gap-5 text-center sm:text-left">

                    <div className="relative flex sm:flex-row flex-col xl:gap-20 lg:gap-12 md:gap-8 sm:gap-6 gap-2">
                        <Image
                            src="/edenroc.webp"
                            alt="nft nyc event"
                            className="mx-auto lg:w-[180px] lg:h-[180px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] rounded object-cover"
                            width={250} height={250}
                        />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-1 flex flex-col gap-1">
                                <a href='https://www.eventbrite.sg/e/bitcoin-2023-miami-beach-side-networking-on-may-18th-eden-roc-hotel-tickets-632009837437'>
                                    <p className={`mx-auto ${styles.headerText}`}>Bitcoin Miami</p>
                                </a>
                                <p className={`${styles.descriptionText}`}>
                                    We hosted a beachside social with some of the brightest minds in Web3.
                                </p>
                                <p className={` text-secondary-white`}>
                                    May 18th 2023
                                </p>
                            </div>
                            
                        </div>
                        <div className='flex my-auto'>
                            <a href='https://www.eventbrite.sg/e/bitcoin-2023-miami-beach-side-networking-on-may-18th-eden-roc-hotel-tickets-632009837437'>
                                <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white hover:bg-white hover:bg-opacity-10 duration-500">
                                        <Image src="/arrow.svg" alt="arrow" width={40} height={40} className="w-[40%] h-[40%] object-contain"/> 
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="relative flex sm:flex-row flex-col xl:gap-20 lg:gap-12 md:gap-8 sm:gap-6 gap-2">
                        <Image
                            src="/gamehaus_game.jpg"
                            alt="nft nyc event"
                            className="mx-auto lg:w-[180px] lg:h-[180px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] rounded object-cover"
                            width={180} height={180}
                        />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-1 flex flex-col gap-1">
                                <a href='https://twitter.com/Bridgrxyz/status/1650437870321291269?s=20'>
                                    <p className={`mx-auto ${styles.headerText}`}>NFT NYC </p>
                                </a>
                                <p className={`${styles.descriptionText}`}>
                                    NFT.NYC after party with the worlds first CryptoPunk band, live DJ and NFT prizes.
                                </p>
                                <p className={`text-secondary-white`}>
                                    April 12th 2023
                                </p>
                            </div>
                            
                        </div>
                        <div className='flex my-auto'>
                            <a href='https://twitter.com/Bridgrxyz/status/1650437870321291269?s=20'>
                                <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white hover:bg-white hover:bg-opacity-10 duration-500">
                                        <Image src="/arrow.svg" alt="arrow" width={40} height={40} className="w-[40%] h-[40%] object-contain"/> 
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="relative flex sm:flex-row flex-col xl:gap-20 lg:gap-12 md:gap-8 sm:gap-6 gap-2">
                        <Image
                            src="/istanbul_dj.jpg"
                            alt="istanbul event"
                            className="mx-auto lg:w-[180px] lg:h-[180px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] rounded object-cover"
                            width={180} height={180}
                        />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-1 flex flex-col gap-1">
                                <a href='https://twitter.com/Bridgrxyz/status/1644964278833905667?s=20'>
                                    <p className={`mx-auto ${styles.headerText}`}>Istanbul Keynote Panel</p>
                                </a>
                                <p className={`${styles.descriptionText}`}>
                                    Discussing how Web3 can help during emergencies like the February earthquake.
                                </p>
                                <p className={`text-secondary-white`}>
                                    April 1st 2023
                                </p>
                            </div>
                        </div>
                        <div className='flex my-auto'>
                            <a href='https://twitter.com/Bridgrxyz/status/1644964278833905667?s=20'>
                                <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white hover:bg-white hover:bg-opacity-10 duration-500">
                                        <Image src="/arrow.svg" alt="arrow" width={40} height={40} className="w-[40%] h-[40%] object-contain"/> 
                                </div>
                            </a>  
                        </div>
                    </div>

                    <div className="flex sm:flex-row flex-col xl:gap-20 lg:gap-12 md:gap-8 sm:gap-6 gap-2">
                        <Image
                            src="/balinews.jpg"
                            alt="bali event"
                            className="mx-auto lg:w-[180px] lg:h-[180px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] rounded object-cover"
                            width={180} height={180}
                        />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-1 flex flex-col gap-1">
                                <a href='https://twitter.com/Bridgrxyz/status/1625104846675386369?s=20'>
                                    <p className={`mx-auto ${styles.headerText}`}>Beachside in Bali </p>
                                </a>
                                <p className={`${styles.descriptionText}`}>
                                    We hit the tropics and threw a red carpet event in Bali with EDNS and Off-Chain.
                                </p>
                                <p className={`text-secondary-white`}>
                                    Feb 24th 2023
                                </p>
                            </div>
                            
                        </div>
                        <div className='flex my-auto'>
                            <a href='https://twitter.com/Bridgrxyz/status/1625104846675386369?s=20'>
                                <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white hover:bg-white hover:bg-opacity-10 duration-500">
                                        <Image src="/arrow.svg" alt="arrow" width={40} height={40} className="w-[40%] h-[40%] object-contain"/> 
                                </div>
                            </a>  
                        </div>
                    </div>

                    <div className="flex sm:flex-row flex-col xl:gap-20 lg:gap-12 md:gap-8 sm:gap-6 gap-2">
                        <Image
                            src="/singaporefeb.jpg"
                            alt="singapore event"
                            className="mx-auto lg:w-[180px] lg:h-[180px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] rounded object-cover"
                            width={180} height={180}
                        />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-1 flex flex-col gap-1">
                                <a href='https://twitter.com/Bridgrxyz/status/1622586625552429057?s=20'>
                                    <p className={`mx-auto ${styles.headerText}`}>Singapore Social</p>
                                </a>
                                <p className={`${styles.descriptionText}`}>
                                    Singapore's first NFT bar, The Parlour Singapore, hosted a sold out 'WEB3 SOCIAL'.
                                </p>
                                <p className={`text-secondary-white`}>
                                    Feb 3rd 2023
                                </p>
                            </div>
                        </div>
                        <div className='flex my-auto'>
                            <a href='https://twitter.com/Bridgrxyz/status/1622586625552429057?s=20'>
                                <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white hover:bg-white hover:bg-opacity-10 duration-500">
                                        <Image src="/arrow.svg" alt="arrow" width={40} height={40} className="w-[40%] h-[40%] object-contain" /> 
                                </div>
                            </a> 
                        </div>
                    </div>

                    <div className="flex sm:flex-row flex-col xl:gap-20 lg:gap-12 md:gap-8 sm:gap-6 gap-2">
                        <Image
                            src="/istanbulnews.jpg"
                            alt="istanbul event"
                            className="mx-auto lg:w-[180px] lg:h-[180px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] rounded object-cover"
                            width={180} height={180}
                        />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-1 flex flex-col gap-1">
                                <a href='https://twitter.com/Bridgrxyz/status/1592214170996703232?s=20'>
                                    <p className={`mx-auto ${styles.headerText}`}>Istanbul Blockchain Week</p>
                                </a>
                                <p className={`${styles.descriptionText}`}>
                                    BRIDGR hosted the official Istanbul Blockchain Week afterparty at YouPlace.
                                </p>
                                <p className={`text-secondary-white`}>
                                    Nov 14th 2022
                                </p>
                            </div>
                        </div>
                        <div className='flex my-auto'>
                            <a href='https://twitter.com/Bridgrxyz/status/1592214170996703232?s=20'>
                                <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white hover:bg-white hover:bg-opacity-10 duration-500">
                                        <Image src="/arrow.svg" alt="arrow" width={40} height={40} className="w-[40%] h-[40%]  object-contain"/> 
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