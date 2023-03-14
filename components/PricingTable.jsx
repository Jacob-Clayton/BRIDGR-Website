import PriceButton from "./PriceButton";
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { fadeIn } from '../utils/motion';


const PricingTable = () => {
    const isLgScreen = useMediaQuery({ minWidth: 1024 });

    return (
        <>
            <motion.div
                variants={fadeIn('up', 'tween', 0.2, 1)}
                initial={isLgScreen ? 'hidden' : 'visible'}
                whileInView="show"
                className="flex flex-col md:flex-row justify-center"
            >
                <div className="mt-10 mx-4 h-[550px] ">
                    <div className="bg-white rounded-lg h-full w-[400px] flex flex-col justify-between shadow-2xl overflow-hidden">
                        <div className="px-4 py-6" >
                            <div className="flex flex-row justify-between">
                                <div className="flex-1">
                                    <div className="bg-white rounded-lg p-6 md:px-10">
                                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Friend</h4>
                                    <h5 className="mb-2 text-gray-500">Benefits</h5>
                                    <p className="text-gray-700 mb-2">
                                        <svg className="inline-block w-4 h-4 mr-2 fill-current text-blue-500" viewBox="0 0 30 30">
                                        <path d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 " fill-opacity="1" fill-rule="nonzero"/>                                </svg>
                                        Visibilty
                                    </p>
                                    <h5 className="mb-2 mt-4 text-gray-500">Price</h5>
                                    <p className="text-gray-700 mb-2">
                                        <svg className="inline-block w-4 h-4 mr-2 fill-current text-green-600" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M18.52 6.235a1.24 1.24 0 01-.356.875l-7.34 7.342-3.202 1.283a1.24 1.24 0 01-1.152-.328l-3.93-3.93a1.24 1.24 0 01-.327-1.152l1.282-3.203 7.34-7.34a1.24 1.24 0 011.75 0l3.93 3.93c.24.24.371.56.327.9"/>
                                        </svg>
                                        $200
                                    </p>
                                    <p className="text-gray-700 mb-2">
                                        <svg className="inline-block w-4 h-4 mr-2 fill-current text-green-600" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M18.52 6.235a1.24 1.24 0 01-.356.875l-7.34 7.342-3.202 1.283a1.24 1.24 0 01-1.152-.328l-3.93-3.93a1.24 1.24 0 01-.327-1.152l1.282-3.203 7.34-7.34a1.24 1.24 0 011.75 0l3.93 3.93c.24.24.371.56.327.9"/>
                                        </svg>
                                        One-off Lifetime Fee
                                    </p>
                                    {/* <a href="https://docs.bridgr.xyz" className="cursor-pointer">
                                    <div className="mt-4 flex justify-center">
                                        <h5 className=" text-gray-800 hover:text-white px-3 py-1 rounded-lg font-light  border-blue-500 border-[2px] hover:bg-blue-500">Read more...</h5>
                                    </div>
                                    </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-20 mb-10">
                            <PriceButton href='mailto:bridgrxyz@gmail.com'>Contact Us</PriceButton>
                        </div>
                    </div>
                </div>

                <div className="mt-10 mx-4">
                    <div className="bg-white rounded-lg h-full w-[400px] flex flex-col justify-between shadow-2xl overflow-hidden">
                        <div className="px-4 py-6">
                            <div className="flex flex-row justify-between">
                                <div className="flex-1">
                                    <div className="bg-white rounded-lg p-6 md:px-10">
                                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Member</h4>
                                    <h5 className="mb-2 text-gray-500">Benefits</h5>
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
                                        Web3 Education
                                    </p>
                                    <p className="text-gray-700 mb-2">
                                        <svg className="inline-block w-4 h-4 mr-2 fill-current text-violet-500" viewBox="0 0 30 30">
                                        <path d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 " fill-opacity="1" fill-rule="nonzero"/>
                                        </svg>
                                        Web3 Business Model Design
                                    </p>
                                    <p className="text-gray-700 mb-2">
                                        <svg className="inline-block w-4 h-4 mr-2 fill-current text-violet-500" viewBox="0 0 30 30">
                                        <path d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 " fill-opacity="1" fill-rule="nonzero"/>
                                        </svg>
                                        Access Web3 Focus Groups
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
                                        Web3 Legal Advice
                                    </p>
                                    <h5 className="mb-2 mt-4 text-gray-500">Price</h5>
                                    <p className="text-gray-700 mb-2">
                                        <svg className="inline-block w-4 h-4 mr-2 fill-current text-green-600" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.52 6.235a1.24 1.24 0 01-.356.875l-7.34 7.342-3.202 1.283a1.24 1.24 0 01-1.152-.328l-3.93-3.93a1.24 1.24 0 01-.327-1.152l1.282-3.203 7.34-7.34a1.24 1.24 0 011.75 0l3.93 3.93c.24.24.371.56.327.9"/>
                                        </svg>
                                        $2000
                                    </p>
                                    <p className="text-gray-700 mb-2">
                                        <svg className="inline-block w-4 h-4 mr-2 fill-current text-green-600" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.52 6.235a1.24 1.24 0 01-.356.875l-7.34 7.342-3.202 1.283a1.24 1.24 0 01-1.152-.328l-3.93-3.93a1.24 1.24 0 01-.327-1.152l1.282-3.203 7.34-7.34a1.24 1.24 0 011.75 0l3.93 3.93c.24.24.371.56.327.9"/>
                                        </svg>
                                        Annual Subscription
                                    </p>
                                    {/* <a href="https://docs.bridgr.xyz" className="cursor-pointer">
                                    <div className="mt-4 flex justify-center">
                                        <h5 className=" text-gray-800 hover:text-white px-3 py-1 rounded-lg font-light  border-blue-500 border-[2px] hover:bg-blue-500">Read more...</h5>
                                    </div>
                                    </a> */}
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-20 mb-10">
                            <PriceButton href='mailto:bridgrxyz@gmail.com'>Contact Us</PriceButton>
                        </div>
                    </div>
                </div>

                <div className="mt-10 mx-4">
                    <div className="bg-white rounded-lg h-full w-[400px] flex flex-col justify-between shadow-2xl overflow-hidden">
                        <div className="px-4 py-6">
                            <div className="flex flex-row justify-between">
                                <div className="flex-1">
                                    <div className="bg-white rounded-lg p-6 md:px-10">
                                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Custom</h4>
                                    <h5 className="mb-2 text-gray-500">Benefits</h5>
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
                                        Web3 Education
                                    </p>
                                    <p className="text-gray-700 mb-2">
                                        <svg className="inline-block w-4 h-4 mr-2 fill-current text-violet-500" viewBox="0 0 30 30">
                                        <path d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 " fill-opacity="1" fill-rule="nonzero"/>
                                        </svg>
                                        Web3 Business Model Design
                                    </p>
                                    <p className="text-gray-700 mb-2">
                                        <svg className="inline-block w-4 h-4 mr-2 fill-current text-violet-500" viewBox="0 0 30 30">
                                        <path d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 " fill-opacity="1" fill-rule="nonzero"/>
                                        </svg>
                                        Access Web3 Focus Groups
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
                                        Web3 Legal Advice
                                    </p>
                                    <p className="text-gray-700 mb-2">
                                        <svg className="inline-block w-4 h-4 mr-2 fill-current text-teal-400" viewBox="0 0 30 30">
                                        <path d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 " fill-opacity="1" fill-rule="nonzero"/>
                                        </svg>
                                        Web3 Consultancy
                                    </p>
                                    <h5 className="mb-2 mt-4 text-gray-500">Price</h5>
                                    <p className="text-gray-700 mb-2">
                                        <svg className="inline-block w-4 h-4 mr-2 fill-current text-green-600" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.52 6.235a1.24 1.24 0 01-.356.875l-7.34 7.342-3.202 1.283a1.24 1.24 0 01-1.152-.328l-3.93-3.93a1.24 1.24 0 01-.327-1.152l1.282-3.203 7.34-7.34a1.24 1.24 0 011.75 0l3.93 3.93c.24.24.371.56.327.9"/>
                                        </svg>
                                        Custom
                                    </p>
                                    {/* <a href="https://docs.bridgr.xyz" className="cursor-pointer">
                                    <div className="mt-4 flex justify-center">
                                        <h5 className=" text-gray-800 hover:text-white px-3 py-1 rounded-lg font-light  border-blue-500 border-[2px] hover:bg-blue-500">Read more...</h5>
                                    </div>
                                    </a> */}
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-20 mb-10">
                            <PriceButton href='mailto:bridgrxyz@gmail.com'>Contact Us</PriceButton>
                        </div>
                        
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default PricingTable;