'use client';

import styles from '../styles';
import { TitleText } from '../components';
import Image from 'next/image';
import { newsArticles } from '../constants';

const News = () => {
    const reversedNewsArticles = [...newsArticles].reverse();

    return (
        <section className={`${styles.paddings} relative z-10`} id="News">
            <div className="gradient-02 overflow-visible z-0 lg:block hidden" />
            
            <div className={`${styles.innerWidth} mx-auto flex flex-col text-off-white`}>
                {/* <TitleText title={<>News</>} textStyles="text-center" /> */}
                {/* <p className={`${styles.descriptionText} ${poppins.variable} font-poppins text-center`}>
                    Read more about our latest events and news on<a href='https://medium.com/@bridgrxyz' className='text-white font-medium'> Medium.</a>
                </p> */}
                <div className="flex flex-col gap-4 sm:gap-5 text-center sm:text-left">
                    {reversedNewsArticles.map((news) => {
                        return( 
                            <div key={news.index} className="relative flex sm:flex-row flex-col xl:gap-20 lg:gap-12 md:gap-8 sm:gap-6 gap-2">
                                <Image
                                    src={news.imgUrl}
                                    alt={news.altText}
                                    className="mx-auto lg:w-[180px] lg:h-[180px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] rounded object-cover"
                                    width={500} height={500}
                                />
                                <div className="w-full flex justify-between items-center">
                                    <div className="flex-1 flex flex-col gap-1">
                                        <a href={news.link}>
                                            <p className={`mx-auto ${styles.headerText}`}>{news.title}</p>
                                        </a>
                                        <p className={`${styles.descriptionText}`}>{news.description}</p>
                                        <p className={`text-secondary-white`}>{news.date}</p>
                                    </div>
                                    
                                </div>
                                <div className='flex my-auto'>
                                    <a href={news.link}>
                                        <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white hover:bg-white hover:bg-opacity-10 duration-500">
                                                <Image src="/arrow.svg" alt="arrow" width={40} height={40} className="w-[40%] h-[40%] object-contain"/> 
                                        </div>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default News;