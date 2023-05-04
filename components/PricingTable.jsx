import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { fadeIn } from '../utils/motion';
import Link from 'next/link';
import styles from '../styles';

const PricingTable = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
        <section className="text-gray-900 xl:mt-20 md:mt-10 mt-5">
            <motion.div
                variants={fadeIn('up', 'tween', 0.05, 1)}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                className={` mx-auto`}
            >
                <div className="flex flex-wrap justify-center items-stretch -mx-6">

                    {/* <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                        <div className="flex flex-col p-6 space-y-6 rounded sm:p-8 bg-off-white">
                            <div className="space-y-2">
                                <p className={`${styles.subheaderText} text-violet`}>Consult us</p>
                                <span className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-5xl text-4xl font-bold text-cetecean-blue">$150
                                    <span className="text-sm font-medium tracking-wide ml-1">/ hour</span>
                                </span>
                            </div>
                            <p className={`${styles.descriptionText} text-primary-black`}>Technical consultancy specialising in smart contracts.
                                <Link href="https://docs.bridgr.xyz/consultancy/web3-consultancy" className='font-medium'> Read more.</Link>
                            </p>
                            <ul className={`${styles.descriptionText} text-primary-black lg:space-y-[0.2rem] space-y-[0.1rem] flex-1`}>
                                <li className="flex mb-2 space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#180D4C" className="flex-shrink-0 w-6 h-6 ">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Web3 Consultancy</span>
                                </li>
                            </ul>
                            <a rel="noopener noreferrer" href="#Contact" className={`${styles.descriptionText} inline-block w-full px-5 py-3 text-center rounded bg-violet`}>
                                Contact Us
                            </a>
                        </div>
                    </div> */}

                    <div className="flex w-full mb-8 sm:px-4 md:w-1/2 xl:w-1/3 lg:mb-0">
                        <div className="flex flex-col p-6 space-y-6 rounded sm:p-8 bg-off-white">
                            <div className="space-y-2">
                                <p className={`${styles.subheaderText} text-violet`}>Friend</p>
                                <span className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-5xl text-4xl font-bold text-cetecean-blue">$200
                                    <span className="sm:text-sm sm:leading[20px] text-[13px] leading-[18px] font-medium tracking-wide ml-1">/ lifetime</span>
                                </span>
                            </div>
                            <p className={`${styles.descriptionText} text-primary-black`}>Global events and media package with engagement from our shared community.&nbsp;
                                <Link href="https://docs.bridgr.xyz/benefits/for-friends" className='font-medium hover-underline-animation-b'>Read more.</Link>
                            </p>
                            <ul className={`${styles.descriptionText} text-primary-black lg:space-y-[0.2rem] space-y-[0.1rem] flex-1`}>
                                <li className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#180D4C" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <p>Visibility</p>
                                </li>
                            </ul>
                            <Link rel="noopener noreferrer" href="#Contact" className={` ${styles.descriptionText} inline-block w-full px-5 py-3 text-center rounded bg-violet`}>
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    <div className="w-full mb-8 sm:px-4 md:w-1/2 xl:w-1/3 lg:mb-0">
                        <div className="p-6 space-y-6 rounded sm:p-8 bg-off-white">
                            <div className="space-y-2">
                                <p className={`${styles.subheaderText} text-violet`}>Member</p>
                                <span className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-5xl text-4xl font-bold text-cetecean-blue">$2000
                                    <span className="sm:text-sm sm:leading[20px] text-[13px] leading-[18px] font-medium tracking-wide ml-1">/ year</span>
                                </span>
                            </div>
                            <p className={`${styles.descriptionText} text-primary-black`}>Everything from Friend included, plus access to our partners combined services.&nbsp;
                                <Link href="https://docs.bridgr.xyz/benefits/for-members" className='font-medium hover-underline-animation-b'>Read more.</Link>
                            </p>
                            <ul className={`${styles.descriptionText} text-primary-black lg:space-y-[0.1rem] space-y-[0.05rem]`}>
                                <li className="flex items-start space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#180D4C" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <p>Visibility</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#180D4C" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <p>Business Building</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#180D4C" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <p>Access Investors</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#180D4C" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <p>Web3 Education</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#180D4C" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <p>Web3 Legal Services</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#180D4C" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <p>Web3 Development</p>
                                </li>
                            </ul>
                            <Link rel="noopener noreferrer" href="/apply/member" className={` ${styles.descriptionText} inline-block w-full px-5 py-3 text-center rounded bg-violet`}>
                                Register Interest
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </motion.div>
        </section>
    );
};

export default PricingTable;