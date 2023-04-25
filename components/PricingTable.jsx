import PriceButton from "./PriceButton";
import InfoButton from "./InfoButton";
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { fadeIn } from '../utils/motion';
import styles from "../styles";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
    display: 'swap',
})


const PricingTable = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
        <>
            <section className="text-gray-900 md:mt-10 mt-5">
                <motion.div
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    initial={isLgScreen ? 'hidden' : 'visible'}
                    whileInView="show"
                    className={` ${poppins.variable} mx-auto`}
                >
                    <div className="flex flex-wrap items-stretch -mx-4">

                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="flex flex-col p-6 space-y-6 rounded-md shadow sm:p-8 bg-off-white text-gray-900">
                                <div className="space-y-2">
                                    <h4 className="xl:text-2xl lg:text-xl text-2xl font-bold text-[#379CE0]">Consult us</h4>
                                    <span className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-5xl text-4xl font-bold ">$150
                                        <span className="text-sm font-medium tracking-wide ml-1 text-secondary-white">/ hour</span>
                                    </span>
                                </div>
                                <p className="mt-3 leading-relaxed ">Technical consultancy specialising in smart contracts and website builds.</p>
                                <ul className="flex-1 mb-6 ">
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-[#379CE0]">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Web3 Consultancy</span>
                                    </li>
                                </ul>
                                <a rel="noopener noreferrer" href="#Contact" className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded bg-[#379CE0] text-off-white">
                                    Contact Us
                                </a>
                            </div>
                        </div>

                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="flex flex-col p-6 space-y-6 rounded-md shadow sm:p-8 bg-off-white text-gray-900">
                                <div className="space-y-2">
                                    <h4 className="xl:text-2xl lg:text-xl text-2xl font-bold text-[#379CE0]">Friend</h4>
                                    <span className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-5xl text-4xl font-bold">$200
                                        <span className="text-sm font-medium tracking-wide ml-1 text-secondary-white">/ lifetime</span>
                                    </span>
                                </div>
                                <p className="leading-relaxed">Global Web3 events exposure with a media package for self promotion plus engagement with our shared community.</p>
                                <ul className="flex-1 space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#379CE0" className="flex-shrink-0 w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Visibility</span>
                                    </li>
                                </ul>
                                <a rel="noopener noreferrer" href="#Contact" className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded bg-[#379CE0] text-off-white">
                                    Contact Us
                                </a>
                            </div>
                        </div>

                        <div className="w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                            <div className="p-6 space-y-6 rounded-md shadow sm:p-8 bg-off-white">
                                <div className="space-y-2">
                                    <h4 className="xl:text-2xl lg:text-xl text-2xl font-bold text-[#379CE0]">Member</h4>
                                    <span className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-5xl text-4xl font-bold">$2000
                                        <span className="text-sm font-medium tracking-wide ml-1 text-secondary-white">/ year</span>
                                    </span>
                                </div>
                                <p className="leading-relaxed">Register interest before June for 20% off.</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-[#379CE0]">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Visibility</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-[#379CE0]">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Business Building</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-[#379CE0]">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Access Investors</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-[#379CE0]">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Web3 Education</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-[#379CE0]">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Web3 Legal Services</span>
                                    </li>
                                </ul>
                                <a rel="noopener noreferrer" href="/apply/member" className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-[#379CE0] text-off-white">
                                    Register Interest
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default PricingTable;