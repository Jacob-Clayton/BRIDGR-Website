'use client';

import styles from '../styles';
import { TitleText } from '../components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { Urbanist } from '@next/font/google';
import { Newsletter } from '../components';
import Link from 'next/link';

const urbanist = Urbanist({
    subsets: ['latin'],
    variable: '--font-urbanist',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const News = () => {
    return (
        <section className={`${styles.paddings} relative z-10`} id="News">
            <div className="gradient-02 overflow-visible z-0 lg:block hidden" />
            <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
                <TitleText title={<>News</>} textStyles="text-center" />

                <p className="md:mt-10 mt-5 font-normal 2xl:text-[21px] xl:text-xl md:text-lg text-md text-center justify-center text-secondary-white">
                    Read more about out latest news and events on<a href='https://medium.com/@bridgrxyz' className='text-white font-medium'> Medium.</a>
                </p>
                
                <div className="md:mt-10 mt-5 flex flex-col gap-5">

                <div className="relative flex sm:flex-row flex-col gap-4">
                        <Image
                            src="/gamehaus_game.jpg"
                            alt="nft nyc event"
                            className="mx-auto lg:w-[180px] lg:h-[180px] w-[150px] h-[150px] rounded-[32px] object-cover"
                            width={180} height={180}
                        />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                                <a href='https://www.eventbrite.sg/e/nftnyc-after-party-on-april-12th-gamehaus-new-york-tickets-605643825987'>
                                    <p className="mx-auto sm:mx-0 font-normal text-xl sm:text-xl md:text-2xl lg:text-2xl text-white">
                                        NFT NYC </p>
                                </a>
                                <p className="mt-[16px] font-normal 2xl:text-[21px] xl:text-xl md:text-lg text-md text-secondary-white">
                                    We're hosting an NFT.NYC after party with a CryptoPunk band performance, free beers and NFT prizes on 
                                    Apr 12th 2023.</p>
                            </div>
                            <a href='https://www.eventbrite.sg/e/nftnyc-after-party-on-april-12th-gamehaus-new-york-tickets-605643825987'>
                                <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white hover:bg-white hover:bg-opacity-10 duration-500">
                                        <img src="/arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain"/> 
                                </div>
                            </a>  
                        </div>
                    </div>

                    <div className="relative flex sm:flex-row flex-col gap-4">
                        <Image
                            src="/istanbul_dj.jpg"
                            alt="istanbul event"
                            className="mx-auto lg:w-[180px] lg:h-[180px] w-[150px] h-[150px] rounded-[32px] object-cover"
                            width={180} height={180}
                        />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                            <a href='https://medium.com/@bridgrxyz/web3-social-on-april-1st-in-istanbul-solidarity-donations-through-web3-b1839981ed9a'>
                                <p className="mx-auto sm:mx-0 font-normal text-xl sm:text-xl md:text-2xl lg:text-2xl text-white">
                                    Istanbul Keynote Panel</p>
                            </a>
                                <p className="mt-[16px] font-normal 2xl:text-[21px] xl:text-xl md:text-lg text-md text-secondary-white">
                                    Panel to raise awareness on how Web3 technologies can be implemented during emergency situations like the February earthquake, with networking afterwards on 
                                    Apr 1st 2023.</p>
                            </div>
                            <a href='https://medium.com/@bridgrxyz/web3-social-on-april-1st-in-istanbul-solidarity-donations-through-web3-b1839981ed9a'>
                                <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white hover:bg-white hover:bg-opacity-10 duration-500">
                                        <img src="/arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain"/> 
                                </div>
                            </a>  
                        </div>
                    </div>

                    <div className="flex sm:flex-row flex-col gap-4">
                        <Image
                            src="/balinews.jpg"
                            alt="bali event"
                            className="mx-auto lg:w-[180px] lg:h-[180px] w-[150px] h-[150px] rounded-[32px] object-cover"
                            width={180} height={180}
                        />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                                <a href='https://twitter.com/Bridgrxyz/status/1625104846675386369?s=20'>
                                    <p className="mx-auto sm:mx-0 font-normal text-xl sm:text-xl md:text-2xl lg:text-2xl text-white">
                                        Beachside in Bali </p>
                                </a>
                                <p className="mt-[16px] font-normal 2xl:text-[21px] xl:text-xl md:text-lg text-md text-secondary-white">
                                    We hit the tropics for a red carpet event at the Lighthouse Studios with EDNS and Off-Chain on 
                                    Feb 24th 2023.</p>
                            </div>
                            <a href='https://twitter.com/Bridgrxyz/status/1625104846675386369?s=20'>
                                <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white hover:bg-white hover:bg-opacity-10 duration-500">
                                        <img src="/arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain"/> 
                                </div>
                            </a>  
                        </div>
                    </div>

                    <div className="flex sm:flex-row flex-col gap-4">
                        <Image
                            src="/singaporefeb.jpg"
                            alt="singapore event"
                            className="mx-auto lg:w-[180px] lg:h-[180px] w-[150px] h-[130px] rounded-[32px] object-cover"
                            width={180} height={180}
                        />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                                <a href='https://twitter.com/Bridgrxyz/status/1622586625552429057?s=20'>
                                    <p className="mx-auto sm:mx-0 font-normal text-xl sm:text-xl md:text-2xl lg:text-2xl text-white">
                                        Singapore Social</p>
                                </a>
                                <p className="mt-[16px] font-normal 2xl:text-[21px] xl:text-xl md:text-lg text-md text-secondary-white">
                                    Singapore's first NFT bar, The Parlour Singapore, hosted another fantastic sold out 'WEB3 SOCIAL' on 
                                    Feb 3rd 2023.</p>
                            </div>
                            <a href='https://twitter.com/Bridgrxyz/status/1622586625552429057?s=20'>
                                <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white hover:bg-white hover:bg-opacity-10 duration-500">
                                        <img src="/arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain" /> 
                                </div>
                            </a>  
                        </div>
                    </div>

                    <div className="flex sm:flex-row flex-col gap-4">
                        <Image
                            src="/istanbulnews.jpg"
                            alt="istanbul event"
                            className="mx-auto lg:w-[180px] lg:h-[180px] w-[150px] h-[150px] rounded-[32px] object-cover"
                            width={180} height={180}
                        />
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                                <a href='https://twitter.com/Bridgrxyz/status/1592214170996703232?s=20'>
                                    <p className="mx-auto sm:mx-0 font-normal text-xl sm:text-xl md:text-2xl lg:text-2xl text-white">
                                        Istanbul Blockchain Week</p>
                                </a>
                                <p className="mt-[16px] font-normal 2xl:text-[21px] xl:text-xl md:text-lg text-md text-secondary-white">
                                    BRIDGR hosted the official Istanbul Blockchain Week afterparty at our friend's bar YouPlace, on 
                                    Nov 14th 2022.</p>
                            </div>
                            <a href='https://twitter.com/Bridgrxyz/status/1592214170996703232?s=20'>
                                <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white hover:bg-white hover:bg-opacity-10 duration-500">
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