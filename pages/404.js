'use client';
import styles from '../styles';
import { Navbar, TitleText } from '../components';
import Link from 'next/link';


const NotFoundPage = () => {
    return (
        <>
        <Navbar />
        <section className={`${styles.paddings} relative bg-cetecean-blue min-h-screen`}>
                <div className={`${styles.innerWidth} mx-auto mt-5 sm:mt-10 md:mt-20`}>
                    <TitleText title={<>404: Page Not Found</>}textStyles="text-center" />
                    <p className={`${styles.descriptionText} text-center mt-10 `}>
                        Sorry, there is nothing to see here
					</p>
                    <div className='mt-10 flex flex-row gap-6 justify-center'>
                        <button className='bg-violet py-2 px-5 items-center rounded'>
                            <Link className= {`${styles.descriptionText} cursor-pointer`} href="/">
                                Home
                            </Link>
                        </button>
                        <button className='bg-violet py-1 px-4 items-center rounded'>
                            <Link className= {`${styles.descriptionText} cursor-pointer`} href="/#Contact">
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