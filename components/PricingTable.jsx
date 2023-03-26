import PriceButton from "./PriceButton";
import InfoButton from "./InfoButton";
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { fadeIn } from '../utils/motion';
import styles from "../styles";
import { Urbanist, Poppins } from "@next/font/google";

const urbanist = Urbanist({
    subsets: ['latin'],
    variable: '--font-urbanist',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins'
})


const PricingTable = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
        <>
            <motion.div
                variants={fadeIn('up', 'tween', 0.2, 1)}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                className={`${styles.innerWidth} flex flex-col md:flex-row justify-center mx-auto`}
            >
                <div className="md:mt-10 mt-5 xl:mx-4 mx-2 p-2">
                    <div className="bg-white rounded-2xl h-full 2xl:w-[330px] xl:w-[320px] lg:w-[300px] md:w-[230px] flex flex-col justify-between shadow-2xl overflow-hidden">
                        <div className="px-4 py-6">
                            <div className="font-medium">
                                    <div className="bg-white rounded-lg p-6 sm:px-20 md:px-2 lg:px-8 xl:px-10">
                                    <h4 className="text-3xl font-medium text-center text-primary-black mb-4">Friend</h4>
                                    <div class="flex justify-center items-baseline my-8">
                                        <span class=" mr-2 text-4xl text-primary-black font-extrabold">$200</span>
                                        <span class="text-gray-400 font-normal">/ lifetime</span>
                                    </div>
                                    <p className="text-gray-700 mb-2">
                                        <svg className="inline-block w-4 h-4 mr-2 fill-current text-blue-500" viewBox="0 0 30 30">
                                        <path d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 " fill-opacity="1" fill-rule="nonzero"/>                                </svg>
                                        Visibilty
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:px-20 md:px-6 lg:px-14 px-4 mb-10">
                            <InfoButton href='https://docs.bridgr.xyz/benefits/for-friends/community-access'>Read More</InfoButton>
                            <PriceButton href='mailto:bridgrxyz@gmail.com'>Register Interest</PriceButton>
                        </div>
                    </div>
                </div>

                <div className="mt-10 xl:mx-6 md:mx-4 mx-2 rounded-2xl magic-border p-1">
                    <div className="relative bg-white rounded-2xl h-full 2xl:w-[330px] xl:w-[320px] lg:w-[300px] md:w-[230px] flex flex-col justify-between shadow-2xl overflow-hidden">

                    <div class="absolute right-0 top-[163px] magic-border w-full h-[1.6rem] flex justify-center items-center text-white font-medium xl:text-[0.95rem] lg:text-[0.89rem] md:text-[0.67rem] sm:text-lg text-[0.83rem] transform skew-y-3">
                        <span className="text-center leading-none">Register Interest before June for 20% off</span>
                    </div>

                        <div className="px-4 py-6">
                            <div className="font-medium">
                                    <div className="bg-white rounded-lg p-6 sm:px-20 md:px-2 lg:px-8 xl:px-10 ">
                                        <div className="magic-text2">
                                            <h4 className="text-4xl font-[700] text-center text-primary-black mb-4">Member</h4>
                                        </div>
                                    <div class="flex justify-center items-baseline my-8 relative">
                                        <span class="mr-2 text-4xl text-primary-black font-extrabold z-10">$2000</span>
                                        <span class="text-gray-400 font-normal z-10">/ year</span>                                    
                                    </div>
                                    <p className="text-gray-700 mb-2">
                                        <svg className="inline-block w-4 h-4 mr-2 fill-current text-blue-500" viewBox="0 0 30 30">
                                        <path d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 " fill-opacity="1" fill-rule="nonzero"/>
                                        </svg>
                                        Visibilty
                                    </p>
                                    <p className="text-gray-700 mb-2">
                                        <svg className="inline-block w-4 h-4 mr-2 fill-current text-violet-500" viewBox="0 0 30 30">
                                        <path d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 " fill-opacity="1" fill-rule="nonzero"/>
                                        </svg>
                                        Business Building
                                    </p>
                                    <p className="text-gray-700 mb-2">
                                        <svg className="inline-block w-4 h-4 mr-2 fill-current text-violet-500" viewBox="0 0 30 30">
                                        <path d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 " fill-opacity="1" fill-rule="nonzero"/>
                                        </svg>
                                        Access Investors
                                    </p>
                                    <p className="text-gray-700 mb-2">
                                        <svg className="inline-block w-4 h-4 mr-2 fill-current text-violet-500" viewBox="0 0 30 30">
                                        <path d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 " fill-opacity="1" fill-rule="nonzero"/>
                                        </svg>
                                        Web3 Education
                                    </p>
                                    <p className="text-gray-700 mb-2">
                                        <svg className="inline-block w-4 h-4 mr-2 fill-current text-violet-500" viewBox="0 0 30 30">
                                        <path d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 " fill-opacity="1" fill-rule="nonzero"/>
                                        </svg>
                                        Web3 Legal Services
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:px-20 md:px-6 lg:px-14 px-4 mb-10">
                            <InfoButton href='https://docs.bridgr.xyz/benefits/for-members'>Read More</InfoButton>
                            <PriceButton href='mailto:bridgrxyz@gmail.com'>Register Interest</PriceButton>
                        </div>
                    </div>
                </div>

                <div className="mt-10 xl:mx-4 mx-2 p-2">
                    <div className="bg-white rounded-2xl h-full 2xl:w-[330px] xl:w-[320px] lg:w-[300px] md:w-[230px] flex flex-col justify-between shadow-2xl overflow-hidden">
                        <div className="px-4 py-6">
                            <div className="font-medium">
                                <div className="bg-white rounded-lg p-6 sm:px-20 md:px-2 lg:px-8 xl:px-10">
                                    <h4 className="text-3xl font-medium text-center text-primary-black mb-4">Consult</h4>
                                    <div class="flex justify-center items-baseline my-8">
                                        <span class="mr-2 text-4xl text-primary-black font-extrabold">$150</span>
                                        <span class="text-gray-400 font-normal">/ hour</span>
                                    </div>
                                    <p className="text-gray-700 mb-2">
                                        <svg className="inline-block w-4 h-4 mr-2 fill-current text-teal-500" viewBox="0 0 30 30">
                                        <path d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 " fill-opacity="1" fill-rule="nonzero"/>
                                        </svg>
                                        Web3 Consultancy
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:px-20 md:px-6 lg:px-14 px-4 mb-10">
                            <InfoButton href='https://docs.bridgr.xyz/consultancy/web3-consultancy'>Read More</InfoButton>
                            <PriceButton href='mailto:bridgrxyz@gmail.com'>Contact Us</PriceButton>
                        </div>
                        
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default PricingTable;