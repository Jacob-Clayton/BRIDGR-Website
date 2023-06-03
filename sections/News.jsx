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
                <div className="flex flex-col gap-5 sm:gap-6 text-center sm:text-left">
                    {reversedNewsArticles.map((news) => {
                        return( 
                            <div key={news.index} className="relative flex flex-row xl:gap-16 lg:gap-12 md:gap-8 sm:gap-6 gap-4">
                                <Image
                                    src={news.imgUrl}
                                    alt={news.altText}
                                    className="sm:mx-auto my-auto xl:w-[180px] xl:h-[180px] lg:w-[170px] lg:h-[170px] sm:w-[130px] sm:h-[130px] w-[90px] h-[90px] rounded object-cover"
                                    width={700} height={700} quality={100}
                                />
                                <div className="w-full flex justify-between items-center">
                                    <div className="flex-1 flex flex-col gap-1">
                                        <a href={news.link}>
                                            <p className={`${styles.subheaderText} text-left`}>{news.title}</p>
                                        </a>
                                        <p className={`${styles.descriptionText} text-left`}>{news.description}</p>
                                        <p className={`text-secondary-white text-left sm:block hidden`}>{news.date}</p>
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