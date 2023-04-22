'use client';
import styles from '../styles';
import { Navbar, TitleText } from '../components';
import Link from 'next/link';


const NotFoundPage = () => {
    return (
        <>
        <Navbar />
        <section className={`${styles.paddings} relative bg-primary-darkBlue min-h-screen`}>
                <div className={`${styles.innerWidth} mx-auto mt-5 sm:mt-10 md:mt-20`}>
                    <TitleText title={<>404: Page Not Found</>}textStyles="text-center" />
                    <p className="mt-10 font-normal 2xl:text-[21px] xl:text-xl md:text-lg text-md text-center text-secondary-white">
                        Sorry, there is nothing to see here
					</p>
                    <div className='mt-10 flex flex-row gap-6 justify-center'>
                        <button className='border-[1px] border-white border-opacity-30 shadow-md hover:bg-white hover:bg-opacity-10 text-off-white py-1 px-4 items-center rounded-lg duration-500'>
                            <Link className= "font-normal xl:text-xl lg:text-lg md:text-md text-sm hover:text-white duration-400 cursor-pointer" href="/">
                                Home
                            </Link>
                        </button>
                        <button className='border-[1px] border-white border-opacity-30 shadow-md hover:bg-white hover:bg-opacity-10 text-off-white py-1 px-4 items-center rounded-lg duration-500'>
                            <Link className= "font-normal xl:text-xl lg:text-lg md:text-md text-sm hover:text-white duration-400 cursor-pointer" href="/#Contact">
                                Contact Us
                            </Link>
                        </button>
                    </div>
                </div>
        </section>
        </>
    );
};

export default NotFoundPage;